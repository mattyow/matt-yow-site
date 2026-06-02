import styles from "./PullQuote.module.css";

export default function PullQuote({
  attribution,
  children,
}: {
  attribution?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrap}>
      <blockquote className={styles.block}>
        <p className={styles.quote}>{children}</p>
        {attribution && (
          <p className={styles.attribution}>{attribution}</p>
        )}
      </blockquote>
    </div>
  );
}
