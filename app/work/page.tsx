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
      <p className={styles.eyebrow}>Projects</p>

      <p className={styles.intro}>
        With over 15 years of experience, I&rsquo;ve integrated with teams of all
        sizes — from startups to publicly traded companies, from internal teams
        to an array of contractors. My focus is on core brand design systems
        with a deep regard to powerful brand strategy.
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

      <div className={styles.archiveLinkRow}>
        <Link href="/archive" className={styles.archivePill}>
          View Full Archive
        </Link>
      </div>

      <AvailabilityCTA />
    </div>
  );
}
