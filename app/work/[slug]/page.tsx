import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Figure from "@/components/Figure";
import TwoUp from "@/components/TwoUp";
import PullQuote from "@/components/PullQuote";
import Press from "@/components/Press";
import AvailabilityCTA from "@/components/AvailabilityCTA";
import {
  getAllSlugs,
  getCaseStudy,
} from "@/lib/case-studies";
import styles from "./page.module.css";

const mdxComponents = {
  Figure,
  TwoUp,
  PullQuote,
  Press,
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  return { title: cs?.title ?? "Not found" };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <article className={styles.article}>
      <header className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className="h1">{cs.title}</h1>
          {cs.blurb && <p className={styles.intro}>{cs.blurb}</p>}
        </div>

        <div className={styles.heroRight}>
          <dl className={styles.meta}>
            {cs.year && (
              <>
                <dt>Year:</dt>
                <dd>{cs.year}</dd>
              </>
            )}
            {cs.agency && (
              <>
                <dt>Agency:</dt>
                <dd>{cs.agency}</dd>
              </>
            )}
            {cs.services && (
              <>
                <dt>Notes:</dt>
                <dd>{cs.services}</dd>
              </>
            )}
          </dl>
        </div>
      </header>

      <div className={styles.body}>
        <MDXRemote source={cs.body} components={mdxComponents} />
      </div>

      <div className={styles.ctaSection}>
        <AvailabilityCTA />
      </div>
    </article>
  );
}