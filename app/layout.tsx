import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
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
        <Sidebar />
        <div
          style={{
            marginLeft: "var(--sb-closed)",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <main style={{ flex: 1 }}>{children}</main>
          <footer
            style={{
              padding: "32px clamp(32px, 6vw, 96px)",
              fontFamily: '"Umiak Mono", ui-monospace, monospace',
              fontSize: 14,
              lineHeight: 1.6,
              borderTop: "1px solid var(--ink)",
            }}
          >
            © 2026. Matt Yow
          </footer>
        </div>
      </body>
    </html>
  );
}
