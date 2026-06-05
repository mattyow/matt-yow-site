import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Crumbs from "@/components/Crumbs";
import Figure from "@/components/Figure";
import TwoUp from "@/components/TwoUp";
import PullQuote from "@/components/PullQuote";
import BackPill from "@/components/BackPill";
import {
  getAllArchiveSlugs,
  getArchiveEntry,
} from "@/lib/archive";
import styles from "./page.module.css";

const mdxComponents = {
  Figure,
  TwoUp,
  PullQuote,
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
      <nav className={styles.crumbsRow}>
        <Crumbs
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Archive", href: "/archive" },
            { label: entry.title },
          ]}
        />
      </nav>

      <header className={styles.hero}>
        <h1 className="h1">{entry.title}</h1>
        <div className={styles.meta}>
          {entry.year && (
            <div className={styles.row}>
              <span className={styles.k}>Year:</span>
              {entry.year}
            </div>
          )}
          {entry.agency && (
            <div className={styles.row}>
              <span className={styles.k}>Agency:</span>
              {entry.agency}
            </div>
          )}
          {entry.services && (
            <div className={styles.row}>
              <span className={styles.k}>Services:</span>
              {entry.services}
            </div>
          )}
        </div>
      </header>

      <div className={styles.body}>
        <MDXRemote source={entry.body} components={mdxComponents} />
      </div>

      <BackPill href="/archive" label="Back" />
    </article>
  );
}
