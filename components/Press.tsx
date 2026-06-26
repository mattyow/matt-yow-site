import styles from "./Press.module.css";

export default function Press({ children }: { children: React.ReactNode }) {
  return (
    <section className={styles.press}>
      <h2 className={styles.heading}>Press</h2>
      <ul className={styles.list}>{children}</ul>
    </section>
  );
}
