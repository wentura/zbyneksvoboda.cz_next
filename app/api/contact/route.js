import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Check if API key is available
    if (!process.env.RESEND_API_KEY) {
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
    const { name, email, phone, website, discussion } = body;

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
