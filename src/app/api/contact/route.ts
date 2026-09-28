import { promises as fs } from "node:fs";
import path from "node:path";
import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SERVICES: Record<string, string> = {
  "website-design": "Website Design & Development",
  "mobile-app": "Mobile App Development",
  "e-commerce": "E-Commerce Development",
  "startup-mvp": "Startup MVP Development",
  "marketing-event": "Marketing & Event Websites",
  other: "Something else",
};

type Errors = Partial<
  Record<"name" | "email" | "service" | "message" | "consent" | "form", string>
>;

export async function POST(request: Request) {
  let body: {
    name?: unknown;
    email?: unknown;
    service?: unknown;
    message?: unknown;
    consent?: unknown;
  };
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, errors: { form: "Invalid request body." } },
      { status: 400 }
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const service = typeof body.service === "string" ? body.service : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const consent = body.consent === true;

  const errors: Errors = {};
  if (!name) errors.name = "Please enter your name.";
  else if (name.length > 120) errors.name = "Name is too long.";
  if (!email) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email) || email.length > 254)
    errors.email = "Please enter a valid email address.";
  if (!SERVICES[service]) errors.service = "Please select a service.";
  if (!message) errors.message = "Please tell us about your project.";
  else if (message.length < 10)
    errors.message = "Message must be at least 10 characters.";
  else if (message.length > 5000) errors.message = "Message is too long.";
  if (!consent)
    errors.consent = "Please consent so we can reply to your inquiry.";

  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors }, { status: 400 });
  }

  const record = {
    id:
      typeof globalThis.crypto?.randomUUID === "function"
        ? globalThis.crypto.randomUUID()
        : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`,
    name,
    email,
    service,
    message,
    receivedAt: new Date().toISOString(),
  };

  try {
    const dir = path.join(process.cwd(), "data");
    await fs.mkdir(dir, { recursive: true });
    await fs.appendFile(
      path.join(dir, "inquiries.jsonl"),
      JSON.stringify(record) + "\n",
      "utf8"
    );
  } catch (error) {
    console.error("[contact] failed to store inquiry", error);
    return Response.json(
      { ok: false, errors: { form: "Could not save your message. Please try again." } },
      { status: 500 }
    );
  }

  console.log(`[contact] inquiry from ${name} <${email}> (${service})`);

  // Email delivery (open source: nodemailer + any SMTP). If SMTP is not
  // configured (e.g. local dev), the inquiry is still stored in
  // data/inquiries.jsonl above and we return success.
  const smtpHost = process.env.CONTACT_SMTP_HOST;
  const smtpUser = process.env.CONTACT_SMTP_USER;
  const smtpPass = process.env.CONTACT_SMTP_PASS;
  if (smtpHost && smtpUser && smtpPass) {
    const smtpPort = Number(process.env.CONTACT_SMTP_PORT ?? "465");
    const to = process.env.CONTACT_TO ?? "lenyeuwaeme@gmail.com";
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      });
      await transporter.sendMail({
        from: process.env.CONTACT_FROM ?? smtpUser,
        to,
        replyTo: `${name} <${email}>`,
        subject: `New inquiry from ${name} (${SERVICES[service]})`,
        text: `Name: ${name}\nEmail: ${email}\nService: ${SERVICES[service]}\n\n${message}`,
      });
    } catch (error) {
      console.error("[contact] failed to send inquiry email", error);
      return Response.json(
        { ok: false, errors: { form: "Could not send your message. Please try again." } },
        { status: 500 }
      );
    }
  } else {
    console.warn(
      "[contact] SMTP not configured — inquiry stored locally only. Set CONTACT_SMTP_* env vars to enable email delivery."
    );
  }

  return Response.json({ ok: true });
}
