"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { External } from "@/components/site/Icon";

const projectTypes = [
  "Product design (end-to-end)",
  "Design systems",
  "UX research",
  "Consulting / advisory",
];
const budgets = ["Under $5k", "$5k – $15k", "$15k – $30k", "Let's discuss"];

const channels = [
  { href: "mailto:hello@amarachiblossom.com", label: "Email", value: "hello@amarachiblossom.com", hc: "var(--pink)" },
  { href: "https://linkedin.com/in/amarachiblossom", label: "LinkedIn", value: "linkedin.com/in/amarachiblossom", hc: "var(--purple)" },
  { href: "https://amarachiblossom.com", label: "Website", value: "amarachiblossom.com", hc: "var(--cyan)" },
];

const initial: ContactState = { status: "idle" };

export function Contact() {
  const [state, action, pending] = useActionState(sendContact, initial);
  const err = state.status === "error" ? state : null;
  const v = err?.values ?? {};

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div>
          <span className="tag lab c-pink">Contact</span>
          <h2 className="d" id="contact-title">
            Have an <span>interesting</span> problem?
          </h2>
          <p className="sub">I&apos;d love to hear about it.</p>
          <p className="lede">
            Have a project in mind? Want to explore collaboration? Just want to
            talk design? I&apos;m based in Germany (CET) and my response time is
            embarrassingly fast for any time zone.
          </p>
          <div className="chans">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                style={{ "--hc": c.hc } as React.CSSProperties}
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <span>
                  <small>{c.label}</small>
                  {c.value}
                </span>
                <External />
              </a>
            ))}
          </div>
        </div>

        {state.status === "sent" ? (
          <div className="form-done" role="status">
            <h3 className="d">Sent, thank you.</h3>
            <p style={{ marginTop: 14, color: "var(--muted)" }}>
              Thanks, I&apos;ll get back to you shortly.
            </p>
          </div>
        ) : (
          <form className="form" action={action} noValidate>
            <div className="two">
              <div>
                <input
                  className="f"
                  name="name"
                  defaultValue={v.name}
                  placeholder="Your name"
                  aria-label="Your name"
                  autoComplete="name"
                  required
                  aria-invalid={!!err?.fields?.name}
                  aria-describedby={err?.fields?.name ? "e-name" : undefined}
                />
                {err?.fields?.name && <p className="form-msg err" id="e-name">{err.fields.name}</p>}
              </div>
              <div>
                <input
                  className="f"
                  name="email"
                  defaultValue={v.email}
                  type="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  autoComplete="email"
                  required
                  aria-invalid={!!err?.fields?.email}
                  aria-describedby={err?.fields?.email ? "e-email" : undefined}
                />
                {err?.fields?.email && <p className="form-msg err" id="e-email">{err.fields.email}</p>}
              </div>
            </div>
            <input className="f" name="company" defaultValue={v.company} placeholder="Company (optional)" aria-label="Company (optional)" autoComplete="organization" />

            <fieldset className="pick">
              <legend className="lab">Project type</legend>
              {projectTypes.map((t) => (
                <label key={t}>
                  <input type="radio" name="projectType" value={t} defaultChecked={v.projectType === t} />
                  <span>{t}</span>
                </label>
              ))}
            </fieldset>
            <fieldset className="pick">
              <legend className="lab">Budget</legend>
              {budgets.map((b) => (
                <label key={b}>
                  <input type="radio" name="budget" value={b} defaultChecked={v.budget === b} />
                  <span>{b}</span>
                </label>
              ))}
            </fieldset>

            <div>
              <textarea
                className="f"
                name="message"
                defaultValue={v.message}
                rows={5}
                placeholder="Tell me about your project…"
                aria-label="Tell me about your project"
                required
                aria-invalid={!!err?.fields?.message}
                aria-describedby={err?.fields?.message ? "e-message" : undefined}
              />
              {err?.fields?.message && <p className="form-msg err" id="e-message">{err.fields.message}</p>}
            </div>

            {/* Honeypot for bots; hidden from people and screen readers. */}
            <div className="hp" aria-hidden>
              <label>
                Website <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div style={{ marginTop: 8, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <button className="btn btn-solid" disabled={pending}>
                {pending ? "Sending…" : "Send message"}
              </button>
              {err && !err.fields && (
                <p className="form-msg err" role="alert">
                  {err.message}
                </p>
              )}
            </div>
          </form>
        )}
      </div>
      <div className="wrap">
        <a className="big-mail" href="mailto:hello@amarachiblossom.com">
          hello@amarachiblossom.com
        </a>
      </div>
    </section>
  );
}
