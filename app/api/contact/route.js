import { NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiter: max 5 requests per IP per 10 minutes
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const ipHits = new Map();

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

function isRateLimited(ip) {
  const now = Date.now();
  const entry = ipHits.get(ip) || { count: 0, start: now };
  if (now - entry.start > RATE_LIMIT_WINDOW_MS) {
    ipHits.set(ip, { count: 1, start: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }
  entry.count += 1;
  ipHits.set(ip, entry);
  return false;
}

export async function POST(request) {
  try {
    // Rate limit check
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Příliš mnoho požadavků. Zkuste to prosím později." },
        { status: 429 },
      );
    }

    // Check if API key is available
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        {
          message:
            "Email service is not configured. Please contact administrator.",
        },
        { status: 500 },
      );
    }

    const body = await request.json();
    const { name, email, phone, website, discussion, company, formStartedAt } =
      body;

    // Honeypot: if filled, silently accept but do not send
    if (company && company.trim() !== "") {
      return NextResponse.json(
        { message: "Zpráva byla úspěšně odeslána." },
        { status: 200 },
      );
    }

    // Speed check: if submitted in under 3 seconds, likely bot
    if (typeof formStartedAt === "number") {
      const elapsed = Date.now() - formStartedAt;
      if (elapsed < 3000) {
        return NextResponse.json(
          { message: "Zpráva byla úspěšně odeslána." },
          { status: 200 },
        );
      }
    }

    // Validate required fields
    if (!name || !email || !discussion) {
      return NextResponse.json(
        { message: "Všechna povinná pole musí být vyplněna." },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Neplatný formát emailu." },
        { status: 400 },
      );
    }

    // Create email content
    const emailContent = `
      <h2>Nová zpráva z kontaktního formuláře</h2>
      <p><strong>Jméno:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
      ${website ? `<p><strong>Web:</strong> ${website}</p>` : ""}
      <p><strong>O čem budeme diskutovat:</strong></p>
      <p>${discussion.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>Zpráva byla odeslána z kontaktního formuláře na webu zbyneksvoboda.cz</small></p>
    `;

    // Send email using Resend
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "Kontaktní formulář <info@zbyneksvoboda.cz>",
      to: ["info@zbyneksvoboda.cz", "zbynek.svoboda@gmail.com"], // Replace with your email
      subject: `Nová zpráva od ${name} - zbyneksvoboda.cz`,
      html: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          message: `Chyba při odesílání emailu: ${error.message || "Neznámá chyba"}. Zkuste to prosím znovu.`,
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Zpráva byla úspěšně odeslána." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Něco se pokazilo. Zkuste to prosím znovu." },
      { status: 500 },
    );
  }
}
