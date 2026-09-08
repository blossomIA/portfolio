import { Container } from "./Container";
import { Download } from "lucide-react";

function IconGithub({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.55v-2c-3.2.69-3.87-1.35-3.87-1.35-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.39-5.27 5.67.41.36.78 1.07.78 2.16v3.2c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05a4.17 4.17 0 0 1 3.76-2.07C21.4 8.63 22 11.3 22 14.55V21h-4v-5.7c0-1.36-.02-3.11-1.9-3.11-1.9 0-2.2 1.48-2.2 3.01V21h-4V9Z" />
    </svg>
  );
}

function IconTwitter({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.24 2H21.5l-7.4 8.46L23 22h-6.83l-5.35-6.98L4.7 22H1.44l7.92-9.05L1 2h6.99l4.84 6.4L18.24 2Zm-1.2 18h1.86L7.05 4H5.06l11.98 16Z" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", href: "https://github.com/amarachiblossom", icon: IconGithub },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/amarachiblossom",
    icon: IconLinkedin,
  },
  { label: "Twitter", href: "https://twitter.com/amarachiblossom", icon: IconTwitter },
];

export function Footer() {
  return (
    <footer className="border-t border-border-soft">
      <Container>
        <div className="pt-16 pb-8">
          {/* Sign-off */}
          <div className="text-center">
            <p className="font-display text-[24px] leading-tight tracking-h2 text-ink">
              You made it to the end.
            </p>
            <p className="mt-1 text-[16px] leading-6 text-muted">
              We should probably work together.
            </p>
          </div>

          {/* Row */}
          <div className="mt-10 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-ink">
                AMARACHI BLOSSOM.
              </p>
              <p className="mt-1 text-[13px] leading-4 text-muted">
                Product Designer
              </p>
            </div>

            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border-soft text-ink/70 transition-colors hover:border-accent-purple hover:text-accent-purple"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>

            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border-soft px-5 py-2.5 text-[14px] font-medium leading-5 text-ink tracking-button transition-colors hover:bg-surface"
            >
              <Download className="size-3.5" />
              Download Resume
            </a>
          </div>

          {/* Bottom line */}
          <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border-soft pt-8 text-[12px] leading-4 text-muted md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Amarachi Blossom. All rights reserved.</p>
            <p className="italic">
              &ldquo;Thanks for scrolling this far. You clearly have excellent taste.&rdquo;
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
