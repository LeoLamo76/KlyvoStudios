type SendEmailInput = {
  formType: "contact" | "beta";
  subject: string;
  replyTo?: string;
  text: string;
  html: string;
};

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendEmail(input: SendEmailInput) {
  const apiKey = Netlify.env.get("RESEND_API_KEY");
  const fromEmail =
    Netlify.env.get("CONTACT_FROM_EMAIL") || "Klyvo Studios <onboarding@resend.dev>";

  if (!apiKey) {
    return json(
      {
        ok: false,
        error: "Missing RESEND_API_KEY environment variable.",
      },
      500
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: ["klyvo.cloud@gmail.com"],
      reply_to: input.replyTo,
      subject: input.subject,
      html: input.html,
      text: input.text,
      tags: [
        { name: "source", value: "klyvo-studios-site" },
        { name: "form", value: input.formType },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();

    return json(
      {
        ok: false,
        error: "Email provider rejected the request.",
        detail: errorText,
      },
      502
    );
  }

  return json({ ok: true });
}
