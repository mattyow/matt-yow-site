import type { Metadata } from "next";
import TopNav from "@/components/TopNav";
import "./globals.css";
import CursorBlend from "@/components/CursorBlend";
import ExternalLinks from "@/components/ExternalLinks";

export const metadata: Metadata = {
  title: {
    default: "Matt Yow",
    template: "%s — Matt Yow",
  },
  description:
    "Matt Yow specializes in brand identity, experience, and activation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CursorBlend />
        <ExternalLinks />
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TopNav />
          <main style={{ flex: 1 }}>{children}</main>
          <footer style={{ padding: "0 clamp(32px, 6vw, 96px)" }}>
            <div
              style={{
                borderTop: "1px solid var(--ink)",
                padding: "32px 0",
                fontFamily: '"Triptych Roman", Georgia, serif',
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              © 2026. Matt Yow
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
