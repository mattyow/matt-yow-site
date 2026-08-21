import Link from "next/link";
import AvailabilityCTA from "@/components/AvailabilityCTA";
import CaseStudyCard from "@/components/CaseStudyCard";
import { getAllCaseStudies } from "@/lib/case-studies";
import styles from "./page.module.css";

export const metadata = { title: "Projects" };

export default function WorkIndex() {
  const studies = getAllCaseStudies();

  return (
    <div className={styles.page}>
      <h2 className="h2">Projects</h2>
      <p className={styles.intro}>
        Large, small, full-time, freelance, all of it.
      </p>

      <div className={styles.grid}>
        {studies.map((cs) => (
          <CaseStudyCard
            key={cs.slug}
            slug={cs.slug}
            title={cs.title}
            cover={cs.cover}
          />
        ))}
      </div>

      <div className={styles.ctaSection}>
        <AvailabilityCTA />
      </div>
    </div>
  );
}