import Link from "next/link";
import styles from "./BackPill.module.css";

export default function BackPill({
  href = "/work",
  label = "Back",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <div className={styles.row}>
      <span className={styles.sep} aria-hidden="true">
        ←
      </span>
      <Link href={href} className={styles.pill}>
        {label}
      </Link>
    </div>
  );
}
