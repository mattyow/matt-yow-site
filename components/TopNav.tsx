import Link from "next/link";
import styles from "./TopNav.module.css";

const NAV = [
  { label: "Info", href: "/" },
  { label: "Projects", href: "/work" },
  { label: "Contact", href: "mailto:hello@mattyow.com" },
];

export default function TopNav() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.wordmark}>
        Matt Yow
      </Link>
      <nav className={styles.nav} aria-label="Primary">
        {NAV.map(({ label, href }) =>
          href.startsWith("mailto:") ? (
            <a key={label} href={href} className={styles.pill}>
              {label}
            </a>
          ) : (
            <Link key={label} href={href} className={styles.pill}>
              {label}
            </Link>
          )
        )}
      </nav>
    </header>
  );
}
