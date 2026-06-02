import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.join(process.cwd(), "content", "case-studies");

export type CaseStudyMeta = {
  slug: string;
  title: string;
  year: string;
  agency: string;
  services: string;
  /** Optional one-line description shown on the index */
  blurb?: string;
  /** Cover image path (relative to /public). Optional. */
  cover?: string;
  /** Sort order, lower first. Falls back to year (desc). */
  order?: number;
};

export type CaseStudy = CaseStudyMeta & {
  /** Raw MDX body (frontmatter stripped) */
  body: string;
};

/** Read a single case study by slug. Returns null if not found. */
export function getCaseStudy(slug: string): CaseStudy | null {
  const filePath = path.join(ROOT, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    year: data.year ?? "",
    agency: data.agency ?? "",
    services: data.services ?? "",
    blurb: data.blurb,
    cover: data.cover,
    order: data.order,
    body: content,
  };
}

/** Read all case studies. */
export function getAllCaseStudies(): CaseStudy[] {
  if (!fs.existsSync(ROOT)) return [];

  return fs
    .readdirSync(ROOT)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
    .map((slug) => getCaseStudy(slug))
    .filter((cs): cs is CaseStudy => cs !== null)
    .sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined)
        return a.order - b.order;
      // Fallback: most recent first by year (handles "2021–2025" by first segment)
      const ay = parseInt(a.year.split(/\D/)[0] || "0", 10);
      const by = parseInt(b.year.split(/\D/)[0] || "0", 10);
      return by - ay;
    });
}

/** For generateStaticParams */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(ROOT)) return [];
  return fs
    .readdirSync(ROOT)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
