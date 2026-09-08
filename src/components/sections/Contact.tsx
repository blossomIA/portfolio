"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/Container";
import { SectionLabel } from "@/components/SectionLabel";
import { ArrowRight } from "lucide-react";

type Chip = {
  label: string;
  value: string;
  href: string;
  bg: string;
  icon: string;
};

const chips: Chip[] = [
  {
    label: "Email",
    value: "hello@amarachiblossom.com",
    href: "mailto:hello@amarachiblossom.com",
    bg: "bg-accent-cyan-07",
    icon: "/icons/contact-email.svg",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/amarachiblossom",
    href: "https://linkedin.com/in/amarachiblossom",
    bg: "bg-accent-purple-07",
    icon: "/icons/contact-linkedin.svg",
  },
  {
    label: "Website",
    value: "amarachiblossom.com",
    href: "https://amarachiblossom.com",
    bg: "bg-accent-pink-07",
    icon: "/icons/contact-website.svg",
  },
];

const projectTypes = [
  "Product design (end-to-end)",
  "Design systems",
  "UX research",
  "Consulting / advisory",
];

const budgets = ["Under $5k", "$5k, $15k", "$15k, $30k", "Let’s discuss"];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="border-t border-border-soft pt-[98px] pb-[75px]"
    >
      <Container>
        <SectionLabel number="06" label="Contact" />
        <h2 className="mt-5 max-w-[900px] text-[56px] font-medium leading-[1.05] tracking-h2-lg text-ink md:text-[70px]">
          Have an interesting problem?
        </h2>
        <p className="mt-6 text-[20px] leading-[1.65] tracking-body-lg text-muted">
          I&apos;d love to hear about it.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="max-w-[460px] text-[15px] leading-[1.62] text-ink-76">
              Have a project in mind? Want to explore collaboration? Just want
              to talk design? My response time is embarrassingly fast for
              someone in this time zone.
            </p>
            <ul className="mt-8 space-y-4">
              {chips.map((chip) => (
                <li key={chip.label}>
                  <a
                    href={chip.href}
                    className="group flex items-center gap-4 rounded-2xl p-2 -m-2 transition-colors hover:bg-surface"
                    target={chip.href.startsWith("http") ? "_blank" : undefined}
                    rel={chip.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <span
                      className={`inline-flex size-9 items-center justify-center rounded-2xl ${chip.bg}`}
                    >
                      { /* eslint-disable-next-line @next/next/no-img-element */ }
                      <img
                        src={chip.icon}
                        alt=""
                        className="size-[15px]"
                      />
                    </span>
                    <span>
                      <span className="block font-mono text-[11px] uppercase leading-[16.5px] tracking-[0.55px] text-ink-32">
                        {chip.label}
                      </span>
                      <span className="mt-0.5 block text-[14px] font-medium leading-5 text-muted transition-colors group-hover:text-ink">
                        {chip.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {submitted ? (
            <div className="rounded-card border border-accent-purple-18 bg-surface p-8 text-[15px] leading-[1.62] text-ink">
              Thanks, I&apos;ll get back to you shortly. In the meantime, feel
              free to browse the case studies below.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="font-body space-y-4"
              noValidate
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FieldInput
                  label="Your name"
                  name="name"
                  required
                />
                <FieldInput
                  label="Email address"
                  name="email"
                  type="email"
                  required
                />
              </div>
              <FieldInput label="Company (optional)" name="company" />
              <FieldSelect label="Project type" name="projectType" options={projectTypes} />
              <FieldSelect label="Budget" name="budget" options={budgets} />
              <FieldTextarea
                label="Tell me about your project…"
                name="message"
                required
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-card bg-ink px-6 py-4 text-[16px] font-medium tracking-button text-white transition-opacity hover:opacity-90"
              >
                Send Message
                <ArrowRight className="size-4" />
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}

function FieldInput({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={label}
        className="w-full rounded-card border border-accent-purple-18 bg-surface px-4 py-3 text-[14px] text-ink placeholder:text-muted focus:border-accent-purple focus:outline-none"
      />
    </label>
  );
}

function FieldSelect({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: readonly string[];
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="w-full appearance-none rounded-card border border-accent-purple-18 bg-surface px-4 py-3 text-[14px] text-muted focus:border-accent-purple focus:outline-none"
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-ink">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function FieldTextarea({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <textarea
        name={name}
        required={required}
        placeholder={label}
        rows={4}
        className="w-full resize-none rounded-card border border-accent-purple-18 bg-surface px-4 py-3 text-[14px] text-ink placeholder:text-muted focus:border-accent-purple focus:outline-none"
      />
    </label>
  );
}
