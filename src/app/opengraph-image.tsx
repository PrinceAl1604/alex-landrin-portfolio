import { ImageResponse } from "next/og";
import { site } from "@/lib/content/profile";

export const runtime = "edge";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated OG image — mirrors the site's ink-on-paper, grid-forward look. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FBFBF9",
          color: "#16150F",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 26, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B6B66" }}>
            §01 — Portfolio
          </div>
          <div style={{ fontSize: 26, fontWeight: 700 }}>
            <span style={{ color: "#13453E" }}>AL</span>·landrin
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em" }}>
            Systems thinker.
          </div>
          <div style={{ fontSize: 104, fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em", color: "#13453E" }}>
            Product shipper.
          </div>
          <div style={{ marginTop: 32, fontSize: 30, color: "#6B6B66", maxWidth: 900 }}>
            Product &amp; brand designer — from the brand mark to the shipped interface.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#6B6B66" }}>
          <span>{site.name}</span>
          <span>Magdeburg · Open to senior Product Design roles</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
