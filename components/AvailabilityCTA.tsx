import styles from "./AvailabilityCTA.module.css";

export default function AvailabilityCTA({
  email = "hello@mattyow.com",
}: {
  email?: string;
}) {
  return (
    <div className={styles.cta}>
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.text}>
        I am available for contract work — or say hello!
      </span>
      <a href={`mailto:${email}`} className={styles.pill}>
        Email Me
      </a>
    </div>
  );
}
