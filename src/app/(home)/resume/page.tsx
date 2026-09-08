import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionLabel } from "@/components/SectionLabel";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Résumé, Amarachi Blossom",
  description:
    "The one-pager, a quick read of what I've shipped, who I've shipped with, and where I'm headed.",
};

// Google Drive file ID for the résumé.
// To swap in a real résumé:
// 1. Upload the PDF to Google Drive.
// 2. Share it as "Anyone with the link · Viewer".
// 3. Copy the file ID from the sharing URL (the part between /d/ and /view).
// 4. Paste it below.
const RESUME_FILE_ID = "REPLACE_WITH_YOUR_GOOGLE_DRIVE_FILE_ID";
const RESUME_VIEW_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/view`;
const RESUME_PREVIEW_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/preview`;
const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`;

export default function ResumePage() {
  const isPlaceholder = RESUME_FILE_ID === "REPLACE_WITH_YOUR_GOOGLE_DRIVE_FILE_ID";

  return (
    <>
      <section className="border-b border-border-soft pt-16 pb-16">
        <Container>
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-[13px] leading-5 tracking-button text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel number="07" label="Résumé" />
              <h1 className="mt-6 font-display text-[48px] leading-[1.02] tracking-display text-ink md:text-[72px]">
                The one-pager.
              </h1>
              <p className="mt-6 max-w-[560px] text-[17px] leading-[1.62] text-muted">
                A quick read of what I&apos;ve shipped, who I&apos;ve shipped
                with, and where I&apos;m headed. Preview it below or grab the
                PDF.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={RESUME_DOWNLOAD_URL}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-medium leading-5 text-white tracking-button transition-opacity hover:opacity-90"
              >
                <Download className="size-4" strokeWidth={2.2} />
                Download PDF
              </a>
              <a
                href={RESUME_VIEW_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-soft px-6 py-3.5 text-[14px] font-medium leading-5 text-ink tracking-button transition-colors hover:bg-surface"
              >
                Open in Drive
                <ExternalLink className="size-4" strokeWidth={2.2} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          {isPlaceholder ? (
            <div className="rounded-card border-l-2 border-accent-purple bg-surface/50 p-8">
              <p className="font-mono text-[10px] uppercase tracking-label-lg text-accent-purple">
                Setup needed
              </p>
              <h2 className="mt-3 text-[24px] font-medium leading-[1.3] tracking-h2 text-ink">
                Point this page at your Google Drive résumé.
              </h2>
              <ol className="mt-6 space-y-3 text-[15px] leading-[1.72] text-muted">
                <li>
                  <span className="font-medium text-ink">1.</span> Upload the
                  PDF to Google Drive.
                </li>
                <li>
                  <span className="font-medium text-ink">2.</span> Right-click
                  the file → <em>Share</em> → set access to{" "}
                  <em>Anyone with the link · Viewer</em>.
                </li>
                <li>
                  <span className="font-medium text-ink">3.</span> Copy the file
                  ID from the sharing URL (the string between{" "}
                  <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[13px]">
                    /d/
                  </code>{" "}
                  and{" "}
                  <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[13px]">
                    /view
                  </code>
                  ).
                </li>
                <li>
                  <span className="font-medium text-ink">4.</span> Paste it into{" "}
                  <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[13px]">
                    RESUME_FILE_ID
                  </code>{" "}
                  in{" "}
                  <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[13px]">
                    src/app/(home)/resume/page.tsx
                  </code>
                  .
                </li>
              </ol>
            </div>
          ) : (
            <div className="overflow-hidden rounded-card border border-border-soft bg-surface">
              <div className="aspect-[3/4] w-full md:aspect-[8.5/11]">
                <iframe
                  src={RESUME_PREVIEW_URL}
                  title="Amarachi Blossom, Résumé"
                  className="h-full w-full"
                  allow="autoplay"
                />
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
