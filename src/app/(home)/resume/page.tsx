import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "The one-pager, a quick read of what I've shipped, who I've shipped with, and where I'm headed.",
};

/**
 * Résumé lives on Google Drive. Set NEXT_PUBLIC_RESUME_DRIVE_ID to the file ID
 * (the part of the share link between /d/ and /view; share as "Anyone with the
 * link · Viewer"). Until it's set, visitors see a friendly "on its way" state
 * instead of setup instructions.
 */
const FILE_ID = process.env.NEXT_PUBLIC_RESUME_DRIVE_ID?.trim();

export default function ResumePage() {
  const view = FILE_ID && `https://drive.google.com/file/d/${FILE_ID}/view`;
  const preview = FILE_ID && `https://drive.google.com/file/d/${FILE_ID}/preview`;
  const download = FILE_ID && `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

  return (
    <div className="solo">
      <section className="solo-panel" style={{ "--sp": "var(--note-purple)", "--sa": "var(--purple)" } as React.CSSProperties}>
        <span className="tag lab c-purple">Résumé</span>
        <h1 className="d">
          The <span>one-pager.</span>
        </h1>
        <p className="lede">
          A quick read of what I&apos;ve shipped, who I&apos;ve shipped with, and where I&apos;m headed.
          {FILE_ID ? " Preview it below or grab the PDF." : ""}
        </p>
        <div className="solo-actions">
          {download ? (
            <>
              <a className="btn btn-solid" href={download}>
                Download PDF
              </a>
              <a className="btn btn-line" href={view} target="_blank" rel="noreferrer">
                Open in Drive
              </a>
            </>
          ) : (
            <>
              <span className="btn btn-line" aria-disabled style={{ cursor: "default" }}>
                PDF on its way
              </span>
              <Link className="btn btn-solid" href="/#contact">
                Ask me for it
              </Link>
            </>
          )}
        </div>
      </section>

      {preview && (
        <div className="wrap">
          <div className="solo-doc">
            <iframe src={preview} title="Amarachi Blossom, Résumé" allow="autoplay" />
          </div>
        </div>
      )}
    </div>
  );
}
