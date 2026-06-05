import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.join(process.cwd(), "content", "archive");

export type ArchiveEntry = {
  slug: string;
  title: string;
  cover?: string;
  year?: string;
  agency?: string;
  services?: string;
  order?: number;
  body: string;
};

export function getArchiveEntry(slug: string): ArchiveEntry | null {
  const filePath = path.join(ROOT, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    cover: data.cover,
    year: data.year,
    agency: data.agency,
    services: data.services,
    order: data.order,
    body: content,
  };
}

export function getAllArchiveEntries(): ArchiveEntry[] {
  if (!fs.existsSync(ROOT)) return [];

  return fs
    .readdirSync(ROOT)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
    .map((slug) => getArchiveEntry(slug))
    .filter((e): e is ArchiveEntry => e !== null)
    .sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined)
        return a.order - b.order;
      return a.title.localeCompare(b.title);
    });
}

export function getAllArchiveSlugs(): string[] {
  if (!fs.existsSync(ROOT)) return [];
  return fs
    .readdirSync(ROOT)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
