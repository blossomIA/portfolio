import Link from "next/link";
import type { Metadata } from "next";

// Placeholder: the owner hasn't decided what Reward will hold yet.
// Kept out of search results until it has real content.
export const metadata: Metadata = {
  title: "Reward",
  robots: { index: false, follow: true },
};

export default function RewardPage() {
  return (
    <div className="solo">
      <section
        className="solo-panel"
        style={{ "--sp": "var(--note-pink)", "--sa": "var(--pink)" } as React.CSSProperties}
      >
        <div className="solo-sticker">
          Coming soon
        </div>
        <span className="tag lab c-pink">Reward</span>
        <h1 className="d">
          Something&apos;s <span>coming.</span>
        </h1>
        <p className="lede">This page is still being put together. Check back soon.</p>
        <div className="solo-actions">
          <Link className="btn btn-solid" href="/projects">
            See the work
          </Link>
          <Link className="btn btn-line" href="/me">
            Meet Amarachi
          </Link>
        </div>
      </section>
    </div>
  );
}
