import { READING } from "@/content/reading/books";
import styles from "./page.module.css";

export const metadata = { title: "Reading List" };

export default function ReadingListPage() {
  return (
    <div className={styles.page}>
      <h2 className="h2">Reading List</h2>
      <p className={styles.intro}>
        Books I&rsquo;ve read since 2013, since I started tracking.
      </p>

      <div className={styles.years}>
        {READING.map((yearData, idx) => (
          <details
            key={yearData.year}
            className={styles.year}
            open={idx === 0}
          >
            <summary className={styles.summary}>{yearData.year}</summary>
            <ol className={styles.list}>
              {yearData.books.map((book, i) => (
                <li key={i} className={styles.item}>
                  <em>{book.title}</em>{" "}
{book.author.startsWith("edited by") ? book.author : `by ${book.author}`}
                </li>
              ))}
            </ol>
          </details>
        ))}
      </div>
    </div>
  );
}