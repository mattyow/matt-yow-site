import Link from "next/link";
import CopyEmailPill from "./CopyEmailPill";
import styles from "./TopNav.module.css";

const NAV = [
  { label: "Info", href: "/" },
  { label: "Projects", href: "/work" },
];

export default function TopNav() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.wordmark}>
        Matt Yow
      </Link>
      <nav className={styles.nav} aria-label="Primary">
        {NAV.map(({ label, href }) => (
          <Link key={label} href={href} className={styles.pill}>
            {label}
          </Link>
        ))}
        <CopyEmailPill defaultLabel="Contact" className={styles.pill} />
      </nav>
    </header>
  );
}
