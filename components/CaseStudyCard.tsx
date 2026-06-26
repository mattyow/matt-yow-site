import Link from "next/link";
import styles from "./CaseStudyCard.module.css";

export default function CaseStudyCard({
  slug,
  title,
  cover,
}: {
  slug: string;
  title: string;
  cover?: string;
}) {
  return (
    <Link href={`/work/${slug}`} className={styles.card} aria-label={title}>
      {cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={cover} alt={title} />
      )}
    </Link>
  );
}
