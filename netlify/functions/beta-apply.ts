import type { Config } from "@netlify/functions";
import { escapeHtml, sendEmail } from "./_shared/email";

type BetaPayload = {
  company?: string;
  email?: string;
  interest_type?: string;
  website_or_social?: string;
  workflow_problem?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const payload = (await req.json()) as BetaPayload;
  const email = clean(payload.email);
  const company = clean(payload.company);
  const interestType = clean(payload.interest_type);
  const websiteOrSocial = clean(payload.website_or_social);
  const workflowProblem = clean(payload.workflow_problem);

  if (!email || !company || !workflowProblem || !interestType) {
    return new Response(JSON.stringify({ ok: false, error: "Missing required fields." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  return sendEmail({
    formType: "beta",
    replyTo: email,
    subject: `New beta application from ${company}`,
    text:
      `Brand or company: ${company}\n` +
      `Email: ${email}\n\n` +
      `Website or social link: ${websiteOrSocial || "Not provided"}\n` +
      `Looking for: ${interestType}\n\n` +
      `Workflow they want to improve:\n${workflowProblem}`,
    html: `
      <h2>New Klyvo beta application</h2>
      <p><strong>Brand or company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Website or social link:</strong> ${escapeHtml(websiteOrSocial || "Not provided")}</p>
      <p><strong>Looking for:</strong> ${escapeHtml(interestType)}</p>
      <p><strong>Workflow they want to improve:</strong></p>
      <p>${escapeHtml(workflowProblem).replaceAll("\n", "<br>")}</p>
    `,
  });
};

export const config: Config = {
  path: "/api/beta-apply",
  method: "POST",
};
