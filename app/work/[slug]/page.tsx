import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Crumbs from "@/components/Crumbs";
import Figure from "@/components/Figure";
import TwoUp from "@/components/TwoUp";
import PullQuote from "@/components/PullQuote";
import BackPill from "@/components/BackPill";
import {
  getAllSlugs,
  getCaseStudy,
} from "@/lib/case-studies";
import styles from "./page.module.css";

const mdxComponents = {
  Figure,
  TwoUp,
  PullQuote,
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
      <nav className={styles.crumbsRow}>
        <Crumbs
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/work" },
            { label: cs.title },
          ]}
        />
      </nav>

      <header className={styles.hero}>
        <h1 className="h1">{cs.title}</h1>
        <div className={styles.meta}>
          {cs.year && (
            <div className={styles.row}>
              <span className={styles.k}>Year:</span>
              {cs.year}
            </div>
          )}
          {cs.agency && (
            <div className={styles.row}>
              <span className={styles.k}>Agency:</span>
              {cs.agency}
            </div>
          )}
          {cs.services && (
            <div className={styles.row}>
              <span className={styles.k}>Services:</span>
              {cs.services}
            </div>
          )}
        </div>
      </header>

      <div className={styles.body}>
        <MDXRemote source={cs.body} components={mdxComponents} />
      </div>

      <BackPill href="/work" label="Back" />
    </article>
  );
}
