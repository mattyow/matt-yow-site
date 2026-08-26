import CopyEmailPill from "./CopyEmailPill";
import styles from "./AvailabilityCTA.module.css";

export default function AvailabilityCTA() {
  return (
  <div className={styles.cta}>
    <span className={styles.text}>
     <span className={styles.dot} aria-hidden="true" />
      I am available for contract work — or say hello!
   </span>
    <CopyEmailPill defaultLabel="Contact" className={styles.pill} />
  </div>
  );
}
