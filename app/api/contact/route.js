import { NextResponse } from "next/server";
import { Resend } from "resend";
import { escapeHtml, MAX_LENGTHS, validateLength } from "@/lib/utils";
import {
  ValidationError,
  ExternalServiceError,
  ConfigurationError,
} from "@/lib/errors";
import logger from "@/lib/logger";
import {
  checkRateLimit,
  RATE_LIMIT_MAX_REQUESTS,
  RATE_LIMIT_WINDOW_SECONDS,
} from "@/lib/rateLimit";

const ALLOWED_ORIGINS = [
  "https://zbyneksvoboda.cz",
  "https://www.zbyneksvoboda.cz",
  "http://localhost:3000",
  "http://localhost:3001",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:3001",
];

function getClientIp(request) {
  try {
    const xf = request.headers.get("x-forwarded-for");
    if (xf) return xf.split(",")[0].trim();
  } catch {}
  try {
    return request.headers.get("x-real-ip") || "unknown";
  } catch {}
  return "unknown";
}

function isAllowedOrigin(request) {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  if (origin && ALLOWED_ORIGINS.includes(origin)) return true;

  if (referer) {
    try {
      const refererOrigin = new URL(referer).origin;
      if (ALLOWED_ORIGINS.includes(refererOrigin)) return true;
    } catch {}
  }

  // Stejný origin bez Origin headeru (některé browsery / same-site)
  if (!origin && !referer && process.env.NODE_ENV === "development") {
    return true;
  }

  return false;
}

export async function POST(request) {
  const startTime = Date.now();
  const ip = getClientIp(request);

  try {
    if (!isAllowedOrigin(request)) {
      logger.warn({
        event: "origin_check_failed",
        ip,
        origin: request.headers.get("origin"),
        referer: request.headers.get("referer"),
        path: "/api/contact",
      });
      return NextResponse.json(
        { message: "Neplatný požadavek." },
        { status: 403 },
      );
    }

    const rateLimitResult = await checkRateLimit(ip);
    if (rateLimitResult.limited) {
      logger.warn({
        event: "rate_limit_exceeded",
        ip,
        path: "/api/contact",
        remaining: rateLimitResult.remaining,
        reset: rateLimitResult.reset,
      });
      return NextResponse.json(
        { message: "Příliš mnoho požadavků. Zkuste to prosím později." },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": (
              rateLimitResult.limit || RATE_LIMIT_MAX_REQUESTS
            ).toString(),
            "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
            "X-RateLimit-Reset": rateLimitResult.reset.toString(),
            "Retry-After": RATE_LIMIT_WINDOW_SECONDS.toString(),
          },
        },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      logger.error({
        event: "configuration_error",
        error: "RESEND_API_KEY is not set",
        ip,
      });
      throw new ConfigurationError(
        "Email service is not configured. Please contact administrator.",
      );
    }

    const body = await request.json();
    const {
      name,
      email,
      phone,
      website,
      discussion,
      company,
      formStartedAt,
      problemType,
      budget,
    } = body;

    if (company && company.trim() !== "") {
      logger.info({ event: "honeypot_triggered", ip });
      return NextResponse.json(
        { message: "Zpráva byla úspěšně odeslána." },
        { status: 200 },
      );
    }

    // Povinný timestamp — bez něj bot obejde speed check
    if (typeof formStartedAt !== "number" || !Number.isFinite(formStartedAt)) {
      logger.info({ event: "speed_check_missing", ip });
      return NextResponse.json(
        { message: "Zpráva byla úspěšně odeslána." },
        { status: 200 },
      );
    }

    const elapsed = Date.now() - formStartedAt;
    if (elapsed < 3000 || elapsed > 1000 * 60 * 60 * 24) {
      logger.info({
        event: "speed_check_failed",
        ip,
        elapsed,
      });
      return NextResponse.json(
        { message: "Zpráva byla úspěšně odeslána." },
        { status: 200 },
      );
    }

    if (!name || !email || !discussion || !problemType || !budget) {
      throw new ValidationError("Všechna povinná pole musí být vyplněna.");
    }

    try {
      validateLength("Jméno", name, MAX_LENGTHS.name);
      validateLength("Email", email, MAX_LENGTHS.email);
      if (phone) validateLength("Telefon", phone, MAX_LENGTHS.phone);
      if (website) validateLength("Web", website, MAX_LENGTHS.website);
      validateLength("Typ problému", problemType, MAX_LENGTHS.problemType);
      validateLength("Investice", budget, MAX_LENGTHS.budget);
      validateLength("Zpráva", discussion, MAX_LENGTHS.discussion);
    } catch (lengthError) {
      throw new ValidationError(lengthError.message);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new ValidationError("Neplatný formát emailu.");
    }

    const emailContent = `
      <h2>Nová zpráva z kontaktního formuláře</h2>
      <p><strong>Jméno:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : ""}
      ${website ? `<p><strong>Web:</strong> ${escapeHtml(website)}</p>` : ""}
      <p><strong>Typ problému:</strong> ${escapeHtml(problemType)}</p>
      <p><strong>Orientační investice:</strong> ${escapeHtml(budget)}</p>
      <p><strong>O čem budeme diskutovat:</strong></p>
      <p>${escapeHtml(discussion).replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>Zpráva byla odeslána z kontaktního formuláře na webu zbyneksvoboda.cz</small></p>
    `;

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Kontaktní formulář <info@zbyneksvoboda.cz>",
      to: ["info@zbyneksvoboda.cz", "zbynek.svoboda@gmail.com"],
      subject: `Nová zpráva od ${escapeHtml(name)} - zbyneksvoboda.cz`,
      html: emailContent,
      replyTo: email,
    });

    if (error) {
      logger.error({
        event: "external_service_error",
        service: "Resend",
        error: error.message,
        ip,
      });
      throw new ExternalServiceError(
        "Chyba při odesílání emailu. Zkuste to prosím znovu.",
        "Resend",
      );
    }

    logger.info({
      event: "contact_form_submitted",
      ip,
      email: email.substring(0, 3) + "***",
      duration: Date.now() - startTime,
    });

    return NextResponse.json(
      { message: "Zpráva byla úspěšně odeslána." },
      { status: 200 },
    );
  } catch (error) {
    logger.error({
      event: "api_error",
      errorType: error.name || "UnknownError",
      message: error.message,
      statusCode: error.statusCode || 500,
      ip,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });

    const statusCode = error.statusCode || 500;
    const message =
      statusCode >= 500
        ? "Něco se pokazilo. Zkuste to prosím znovu."
        : error.message;

    return NextResponse.json({ message }, { status: statusCode });
  }
}
