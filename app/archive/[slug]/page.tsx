import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Figure from "@/components/Figure";
import TwoUp from "@/components/TwoUp";
import PullQuote from "@/components/PullQuote";
import Press from "@/components/Press";
import Video from "@/components/Video";
import AvailabilityCTA from "@/components/AvailabilityCTA";
import {
  getAllArchiveSlugs,
  getArchiveEntry,
} from "@/lib/archive";
import styles from "./page.module.css";

const mdxComponents = {
  Figure,
  TwoUp,
  PullQuote,
  Press,
  Video,
};

export function generateStaticParams() {
  return getAllArchiveSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getArchiveEntry(slug);
  return { title: entry?.title ?? "Not found" };
}

export default async function ArchiveEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getArchiveEntry(slug);
  if (!entry) notFound();

  return (
    <article className={styles.article}>
      <header className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className="h1">{entry.title}</h1>
          {entry.blurb && <p className={styles.intro}>{entry.blurb}</p>}
        </div>

        <div className={styles.heroRight}>
          <dl className={styles.meta}>
            {entry.year && (
              <>
                <dt>Year:</dt>
                <dd>{entry.year}</dd>
              </>
            )}
            {entry.agency && (
              <>
                <dt>Agency:</dt>
                <dd>{entry.agency}</dd>
              </>
            )}
            {entry.services && (
              <>
                <dt>Notes:</dt>
                <dd>{entry.services}</dd>
              </>
            )}
          </dl>
        </div>
      </header>

      <div className={styles.body}>
        <MDXRemote source={entry.body} components={mdxComponents} />
      </div>

      <div className={styles.ctaSection}>
        <AvailabilityCTA />
      </div>
    </article>
  );
}