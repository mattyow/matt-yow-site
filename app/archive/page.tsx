import Link from "next/link";
import AvailabilityCTA from "@/components/AvailabilityCTA";
import { getAllArchiveEntries } from "@/lib/archive";
import styles from "./page.module.css";

export const metadata = { title: "Archive" };

export default function ArchivePage() {
  const entries = getAllArchiveEntries();

  return (
    <div className={styles.page}>
      <p className={styles.eyebrow}>Archive</p>

      <ul className={styles.list}>
        {entries.map((entry) => (
          <li key={entry.slug}>
            <Link href={`/archive/${entry.slug}`} className={styles.row}>
              <span className={styles.title}>{entry.title}</span>
              <span className={styles.year}>{entry.year}</span>
            </Link>
          </li>
        ))}
      </ul>

      <AvailabilityCTA />
    </div>
  );
}
