"use server";

/**
 * Sends the contact form to Amarachi's inbox through Resend's HTTP API.
 *
 * Needs (see .env.example):
 *   RESEND_API_KEY      — from resend.com
 *   CONTACT_TO_EMAIL    — where messages land
 *   CONTACT_FROM_EMAIL  — a sender on a domain verified in Resend
 */

export type ContactState =
  | { status: "idle" }
  | { status: "sent" }
  | {
      status: "error";
      message: string;
      fields?: Partial<Record<"name" | "email" | "message", string>>;
      /** what the visitor typed, so the form can be refilled */
      values?: Record<string, string>;
    };

const MAX = { name: 120, email: 200, company: 160, message: 5000 };

function clean(v: FormDataEntryValue | null, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function sendContact(_prev: ContactState, form: FormData): Promise<ContactState> {
  // Honeypot: real people never see or fill this field.
  if (clean(form.get("website"), 200)) return { status: "sent" };

  const name = clean(form.get("name"), MAX.name);
  const email = clean(form.get("email"), MAX.email);
  const company = clean(form.get("company"), MAX.company);
  const projectType = clean(form.get("projectType"), 80);
  const budget = clean(form.get("budget"), 80);
  const message = clean(form.get("message"), MAX.message);
  const values = { name, email, company, projectType, budget, message };

  const fields: NonNullable<Extract<ContactState, { status: "error" }>["fields"]> = {};
  if (!name) fields.name = "Please add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fields.email = "Please add a valid email address.";
  if (message.length < 10) fields.message = "Tell me a little more about the project.";
  if (Object.keys(fields).length) {
    return { status: "error", message: "A couple of things need fixing.", fields, values };
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !to || !from) {
    console.error("Contact form: RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is not set.");
    return {
      status: "error",
      message: "The form isn't connected yet. Please email hello@amarachiblossom.com instead.",
      values,
    };
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "—"],
    ["Project type", projectType || "—"],
    ["Budget", budget || "—"],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`;
  const html = `<table>${rows
    .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`)
    .join("")}</table><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New project enquiry from ${name}`,
        text,
        html,
      }),
    });
    if (!res.ok) {
      console.error("Contact form: Resend responded", res.status, await res.text());
      throw new Error("send failed");
    }
    return { status: "sent" };
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending that. Please try again, or email hello@amarachiblossom.com.",
      values,
    };
  }
}
