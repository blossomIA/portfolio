import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import "@/styles/resume.css";

export const metadata: Metadata = pageMeta({ title: "Résumé", description: "A continuous thread: product design roles at Seashell Labs, Meerge and FunMondayCo, and where it started at GoMyCode.", path: "/resume" });

/**
 * The download points at Google Drive when NEXT_PUBLIC_RESUME_DRIVE_ID is set
 * (the file ID between /d/ and /view of a link shared "Anyone with the link ·
 * Viewer"); otherwise at public/resume.pdf, which ships with the site.
 */
const FILE_ID = process.env.NEXT_PUBLIC_RESUME_DRIVE_ID?.trim();
const DOWNLOAD = FILE_ID
  ? `https://drive.google.com/uc?export=download&id=${FILE_ID}`
  : "/resume.pdf";

type Role = {
  year: string;
  type: string;
  role: string;
  org: string;
  href?: string;
  body: string;
};

const ROLES: Role[] = [
  {
    year: "2026",
    type: "Full-time",
    role: "Product Designer",
    org: "Seashell Labs / LinkBridge Consulting",
    body: "Led creation of a company-wide design system serving three product squads. Established component contracts, token architecture, and documentation standards, becoming the single source of truth across design and engineering.",
  },
  {
    year: "2025",
    type: "Full-time",
    role: "Product Designer",
    org: "Meerge / Megadel Africa",
    body: "Redesigned core supplier discovery and onboarding flows for a pan-African B2B platform. Worked closely with PMs and engineers to reduce friction in the user journey, driving measurable improvements in activation and engagement.",
  },
  {
    year: "2024",
    type: "Freelance",
    role: "Product Design Intern",
    org: "FunMondayCo.",
    body: "Delivered UX strategy, user research, wireframes, and high-fidelity UI for early stage startups across fintech, edtech and e-commerce. Developed a discipline of asking difficult questions before opening any design tool.",
  },
  {
    year: "2023",
    type: "Training",
    role: "Product Design",
    org: "GoMyCode",
    href: "https://gomycode.com",
    body: "Completed intensive product design training with a focus on UX fundamentals, design thinking, and Figma. Graduated with a capstone that secured a first professional contract within two months.",
  },
];

/** The one call to action: download the PDF. */
function Cta() {
  return (
    <div className="rs-actions">
      <a className="btn btn-solid" href={DOWNLOAD} download="Amarachi-Blossom-Resume.pdf">
        Download résumé
      </a>
    </div>
  );
}

export default function ResumePage() {
  return (
    <div className="rs">
      <header className="wrap rs-head">
        <span className="tag lab">Résumé · Experience</span>
        <h1 className="d rs-title">A continuous thread.</h1>
        <p className="rs-lede">
          From learning the fundamentals to leading a company-wide design system, each role built on the last.
        </p>
        <Cta />
      </header>

      <section className="wrap" aria-label="Experience">
        <ol className="rs-list">
          {ROLES.map((r) => (
            <li key={r.year + r.org} className="rs-item">
              <div className="rs-when">
                <span className="rs-year">{r.year}</span>
                <span className="rs-type">{r.type}</span>
              </div>
              <div className="rs-what">
                <h2 className="rs-role">
                  {r.role}
                  <span className="rs-dot" aria-hidden>
                    ·
                  </span>
                  {r.href ? (
                    <a className="rs-org" href={r.href} target="_blank" rel="noreferrer">
                      {r.org}
                    </a>
                  ) : (
                    <span className="rs-org">{r.org}</span>
                  )}
                </h2>
                <p>{r.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="wrap">
        <div className="rs-end">
          <div>
            <h2 className="d">Want the full picture?</h2>
            <p>Tools, skills, education and contact details, all on one page.</p>
          </div>
          <Cta />
        </div>
      </section>
    </div>
  );
}
