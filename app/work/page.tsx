import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";

export const metadata = { title: "Case Studies" };

export default function WorkIndex() {
  const studies = getAllCaseStudies();

  return (
    <div style={{ padding: "80px clamp(24px, 6vw, 96px)" }}>
      <h2 className="h2" style={{ marginBottom: 48 }}>
        Case Studies
      </h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {studies.map((cs) => (
          <li
            key={cs.slug}
            style={{
              borderTop: "1px solid var(--ink)",
              padding: "24px 0",
            }}
          >
            <Link
              href={`/work/${cs.slug}`}
              style={{ textDecoration: "none" }}
            >
              <h3 className="h3">{cs.title}</h3>
              {cs.blurb && (
                <p style={{ marginTop: 8, maxWidth: "60ch" }}>{cs.blurb}</p>
              )}
              <p
                className="caption"
                style={{ marginTop: 8 }}
              >
                {cs.year} · {cs.agency}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
