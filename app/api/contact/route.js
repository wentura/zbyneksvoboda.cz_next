// * Importy pro Next response, Resend a interní utility.
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { escapeHtml, MAX_LENGTHS, validateLength } from "@/lib/utils";
import { ValidationError, ExternalServiceError, ConfigurationError, RateLimitError } from "@/lib/errors";
import logger from "@/lib/logger";
import { checkRateLimit, RATE_LIMIT_MAX_REQUESTS, RATE_LIMIT_WINDOW_SECONDS } from "@/lib/rateLimit";

// * Pomocná funkce pro zjištění IP klienta z headerů.
function getClientIp(request) {
  try {
    const xf = request.headers.get("x-forwarded-for");
    // * Pokud je k dispozici X-Forwarded-For, použij první IP.
    if (xf) return xf.split(",")[0].trim();
  } catch {}
  try {
    // * Fallback na X-Real-IP nebo výchozí hodnotu.
    return request.headers.get("x-real-ip") || "unknown";
  } catch {}
  return "unknown";
}

// * Handler POST pro odeslání kontaktního formuláře.
export async function POST(request) {
  const startTime = Date.now();
  const ip = getClientIp(request);
  
  try {
    // * Kontrola rate limitu.
    const rateLimitResult = await checkRateLimit(ip);
    // * Pokud je limit překročen, vrátit 429.
    if (rateLimitResult.limited) {
      logger.warn({
        event: 'rate_limit_exceeded',
        ip,
        path: '/api/contact',
        remaining: rateLimitResult.remaining,
        reset: rateLimitResult.reset
      });
      return NextResponse.json(
        { message: "Příliš mnoho požadavků. Zkuste to prosím později." },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': (rateLimitResult.limit || RATE_LIMIT_MAX_REQUESTS).toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.reset.toString(),
            'Retry-After': RATE_LIMIT_WINDOW_SECONDS.toString(),
          }
        },
      );
    }

    // * Kontrola, zda je k dispozici RESEND_API_KEY.
    const apiKey = process.env.RESEND_API_KEY;
    // * Pokud klíč chybí, vrátit chybu konfigurace.
    if (!apiKey) {
      logger.error({
        event: 'configuration_error',
        error: 'RESEND_API_KEY is not set',
        ip
      });
      throw new ConfigurationError("Email service is not configured. Please contact administrator.");
    }

    const body = await request.json();
    const { name, email, phone, website, discussion, company, formStartedAt } = body;

    // * Honeypot: pokud je vyplněný, nic neposílat.
    if (company && company.trim() !== "") {
      logger.info({
        event: 'honeypot_triggered',
        ip
      });
      return NextResponse.json(
        { message: "Zpráva byla úspěšně odeslána." },
        { status: 200 },
      );
    }

    // * Speed check: pokud formulář odešel příliš rychle, ignorovat.
    if (typeof formStartedAt === "number") {
      const elapsed = Date.now() - formStartedAt;
      // * Pokud je čas pod 3 sekundy, považuj za bot.
      if (elapsed < 3000) {
        logger.info({
          event: 'speed_check_failed',
          ip,
          elapsed
        });
        return NextResponse.json(
          { message: "Zpráva byla úspěšně odeslána." },
          { status: 200 },
        );
      }
    }

    // * Validace povinných polí.
    if (!name || !email || !discussion) {
      throw new ValidationError("Všechna povinná pole musí být vyplněna.");
    }

    // * Validace délek vstupů.
    try {
      validateLength('Jméno', name, MAX_LENGTHS.name);
      validateLength('Email', email, MAX_LENGTHS.email);
      // * Pokud je telefon uveden, zkontroluj délku.
      if (phone) validateLength('Telefon', phone, MAX_LENGTHS.phone);
      // * Pokud je web uveden, zkontroluj délku.
      if (website) validateLength('Web', website, MAX_LENGTHS.website);
      validateLength('Zpráva', discussion, MAX_LENGTHS.discussion);
    } catch (lengthError) {
      throw new ValidationError(lengthError.message);
    }

    // * Validace formátu emailu.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // * Pokud email neodpovídá regexu, vyhodit chybu.
    if (!emailRegex.test(email)) {
      throw new ValidationError("Neplatný formát emailu.");
    }

    // * Sestavení obsahu emailu s escapováním proti XSS.
    const emailContent = `
      <h2>Nová zpráva z kontaktního formuláře</h2>
      <p><strong>Jméno:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : ""}
      ${website ? `<p><strong>Web:</strong> ${escapeHtml(website)}</p>` : ""}
      <p><strong>O čem budeme diskutovat:</strong></p>
      <p>${escapeHtml(discussion).replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>Zpráva byla odeslána z kontaktního formuláře na webu zbyneksvoboda.cz</small></p>
    `;

    // * Odeslání emailu přes Resend.
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "Kontaktní formulář <info@zbyneksvoboda.cz>",
      to: ["info@zbyneksvoboda.cz", "zbynek.svoboda@gmail.com"],
      subject: `Nová zpráva od ${escapeHtml(name)} - zbyneksvoboda.cz`,
      html: emailContent,
      replyTo: email,
    });

    // * Pokud Resend vrátí chybu, zalogovat a vyhodit error.
    if (error) {
      logger.error({
        event: 'external_service_error',
        service: 'Resend',
        error: error.message,
        ip
      });
      throw new ExternalServiceError("Chyba při odesílání emailu. Zkuste to prosím znovu.", "Resend");
    }

    // * Log úspěšného odeslání formuláře.
    logger.info({
      event: 'contact_form_submitted',
      ip,
      email: email.substring(0, 3) + '***', // Partial email for privacy
      duration: Date.now() - startTime
    });

    return NextResponse.json(
      { message: "Zpráva byla úspěšně odeslána." },
      { status: 200 },
    );
  } catch (error) {
    // * Log chyby s kontextem.
    logger.error({
      event: 'api_error',
      errorType: error.name || 'UnknownError',
      message: error.message,
      statusCode: error.statusCode || 500,
      ip,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });

    // * Vrať odpověď podle typu chyby.
    const statusCode = error.statusCode || 500;
    const message = statusCode >= 500 
      ? "Něco se pokazilo. Zkuste to prosím znovu."
      : error.message;

    return NextResponse.json(
      { message },
      { status: statusCode }
    );
  }
}
