import styles from "./TwoUp.module.css";

export default function TwoUp({ children }: { children: React.ReactNode }) {
  return <div className={styles.twoup}>{children}</div>;
}
