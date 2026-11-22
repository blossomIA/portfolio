import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getProject } from "@/lib/projects";
import { site } from "@/lib/site";

/* Share images (Open Graph / X cards), drawn at build time. Charcoal like the
   site, with the project's accent on case studies. */

export const ogSize = { width: 1200, height: 630 };

const INK = "#f3f1ea";
const MUTED = "#a8a59b";
const BG = "#121114";
const PINK = "#f472b6";

/** Read a JPEG from src/assets as a data URL (Satori can't fetch local files). */
const asset = async (file: string) =>
  `data:image/jpeg;base64,${(await readFile(join(process.cwd(), "src", "assets", file))).toString("base64")}`;

/** Home and general pages: name, role, location and her portrait. */
export async function siteOg(kicker = "Portfolio") {
  const portrait = await asset("og-portrait.jpg");
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: BG, color: INK, padding: 64 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, paddingRight: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, color: MUTED, fontSize: 24, letterSpacing: 2 }}>
            <div style={{ width: 10, height: 10, borderRadius: 10, background: PINK }} />
            {kicker.toUpperCase()}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 70, letterSpacing: -2.5, lineHeight: 1, whiteSpace: "nowrap" }}>
              {`${site.name}`}
              <span style={{ color: PINK, marginLeft: 2 }}>.</span>
            </div>
            <div style={{ fontSize: 34, color: MUTED, marginTop: 20 }}>{site.role}</div>
            <div style={{ fontSize: 26, color: MUTED, marginTop: 28, lineHeight: 1.4, maxWidth: 620 }}>
              Modern digital products through user research, systems thinking, AI, and clean execution.
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: MUTED }}>
            <span>{site.url.replace(/^https?:\/\//, "")}</span>
            <span>Based in {site.location}</span>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={portrait}
          width={360}
          height={502}
          alt=""
          style={{ alignSelf: "center", borderRadius: 18, objectFit: "cover", border: "1px solid #2e2c31" }}
        />
      </div>
    ),
    ogSize,
  );
}

/** A case study: its cover on top, title and project underneath. */
export async function caseStudyOg(slug: string) {
  const p = getProject(slug)!;
  const cover = await asset(`og-cover-${slug}.jpg`);
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: BG, color: INK }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={cover} width={1200} height={400} alt="" style={{ objectFit: "cover" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, padding: "0 56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22, color: MUTED, letterSpacing: 2 }}>
            <div style={{ width: 10, height: 10, borderRadius: 10, background: p.theme.accent === "#0A0A0A" ? "#ff8a45" : p.theme.accent }} />
            {`${p.name} · ${p.kind}`.toUpperCase()}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 14 }}>
            <div style={{ fontSize: 52, letterSpacing: -1.5, lineHeight: 1.05, maxWidth: 820 }}>{p.title}</div>
            <div style={{ fontSize: 22, color: MUTED }}>{site.name}</div>
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
