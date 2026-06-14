import type { Config } from "@netlify/functions";
import { escapeHtml, sendEmail } from "./_shared/email";

type ContactPayload = {
  email?: string;
  message?: string;
  name?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const payload = (await req.json()) as ContactPayload;
  const name = clean(payload.name);
  const email = clean(payload.email);
  const message = clean(payload.message);

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ ok: false, error: "Missing required fields." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  return sendEmail({
    formType: "contact",
    replyTo: email,
    subject: `New Klyvo Studios contact inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nWhat they need help creating:\n${message}`,
    html: `
      <h2>New Klyvo Studios contact inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>What they need help creating:</strong></p>
      <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
    `,
  });
};

export const config: Config = {
  path: "/api/contact",
  method: "POST",
};
