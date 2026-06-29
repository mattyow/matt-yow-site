import type { Metadata } from "next";
import TopNav from "@/components/TopNav";
import "./globals.css";

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
                fontFamily: '"Umiak Mono", ui-monospace, monospace',
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
