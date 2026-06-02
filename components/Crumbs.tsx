import Link from "next/link";
import styles from "./Crumbs.module.css";

type Crumb = { label: string; href?: string };

export default function Crumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className={styles.crumbs} aria-label="Breadcrumb">
      {crumbs.map((c, i) => (
        <span key={i} className={styles.row}>
          {c.href ? (
            <Link
              href={c.href}
              className={styles.pill}
              aria-current={i === crumbs.length - 1 ? "page" : undefined}
            >
              {c.label}
            </Link>
          ) : (
            <span className={styles.pill} aria-current="page">
              {c.label}
            </span>
          )}
          {i < crumbs.length - 1 && (
            <span className={styles.sep} aria-hidden="true">
              →
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
