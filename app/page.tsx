import Link from "next/link";
import AvailabilityCTA from "@/components/AvailabilityCTA";
import CaseStudyCard from "@/components/CaseStudyCard";
import { getAllCaseStudies } from "@/lib/case-studies";
import styles from "./page.module.css";
import DitherLogo from "@/components/DitherLogo";

const EXPERIENCE = [
  { company: "Netlify", dates: "2025–current", role: "Staff Brand Designer" },
  { company: "Census (acquired by Fivetran)", dates: "2021–2025", role: "Principal Brand Designer" },
  { company: "Focus Lab", dates: "2020–2021", role: "Designer" },
  { company: "Vela", dates: "2019–2020", role: "Head of Brand" },
  { company: "Intercom", dates: "2017–2019", role: "Senior Brand Designer" },
  { company: "Twin Forrest", dates: "2014–2017", role: "Founder, Design Director" },
  { company: "Focus Lab", dates: "2011–2014", role: "Designer" },
  { company: "Red Antler", dates: "2011", role: "Design Intern" },
];

const EDUCATION = {
  company: "Savannah College of Art and Design",
  dates: "2015",
  role: "Bachelor’s of Fine Arts, Graphic Design",
};

const CLIENTS = [
  "Adobe", "Apple", "BambooHR", "Chick-fil-A", "Hewlett-Packard",
  "Intercom", "Lyft", "Microsoft", "Monotype", "Red Antler",
  "SeatGeek", "The Savannah College of Art and Design", "Tiny Wins", "Treehouse",
  "University of California Berkeley",
];

const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mattyow/" },
  { label: "Twitter", href: "https://x.com/matt_yow" },
  { label: "Dribbble", href: "https://dribbble.com/matt_yow" },
  { label: "Instagram", href: "https://www.instagram.com/matt_yow/" },
  { label: "Substack", href: "https://mattyow.substack.com/" },
];

export default function HomePage() {
  const featured = getAllCaseStudies().slice(0, 4);

  return (
    <div className={styles.page}>
      {/* Hero / Index + Recently */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h2 className="h2">Index</h2>
          <div className={styles.bio}>
            <p>
              With over 15 years of experience, I&rsquo;ve integrated with teams
              of all sizes — from startups to publicly traded companies, from
              internal teams to an array of contractors. My focus is on core
              brand design systems with a deep regard for powerful brand
              strategy.
            </p>
            <p>
              Currently, I am <em>Staff Brand Designer</em> at Netlify.
            </p>
            <p>I live in Richmond, Virginia.</p>
          </div>

          <div className={styles.recentlyBlock}>
            <h2 className="h2">Recently</h2>
            <ul className={styles.recentlyList}>
              <li>
                I built an app to catalog <a href="https://matt-yows-books.netlify.app/">my home library</a>.
              </li>
              <li>
                In an effort to <em>customize everything</em>, I also built a site
                to track books I want to buy. It is <a href="https://to-buy-and-be-read.netlify.app/">To Buy and Be Read</a>.
              </li>
              <li>
                Launched <a href="https://axis.run/">axis.run</a>, Netlify&rsquo;s agentic
                experience scoring system (AXIS)
              </li>
              <li>
                I published a font, <a href="https://ghost-byte.netlify.app/">Ghost Byte</a>. It&rsquo;s free.
              </li>
              <li>
                I made an <a href="https://baseball-daily.netlify.app/">Out of Town Scoreboard</a> for today&rsquo;s
                MLB games (&ldquo;today&rdquo; only) that uses Ghost Byte.
              </li>
              <li>
                Lettering for a shirt for Counter, a brand and type studio in Orlando. <a href="https://thisiscounter.com/claritee">See it here</a>.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.graphic}>
          <DitherLogo />
        </div>
      </section>

      {/* Featured Work */}
      <section className={styles.section}>
        <h2 className="h2">Featured Work</h2>
        <div className={styles.featuredGrid}>
          {featured.map((cs) => (
            <CaseStudyCard
              key={cs.slug}
              slug={cs.slug}
              title={cs.title}
              cover={cs.cover}
            />
          ))}
        </div>
        <div className={styles.viewAllRow}>
          <Link href="/work" className={`${styles.viewAllPill} plain`}>
            View all projects
          </Link>
        </div>
      </section>

      {/* Experience + Clients */}
      <section className={styles.twoCol}>
        <div>
          <h2 className="h2">Experience</h2>
          <ul className={styles.expList}>
            {EXPERIENCE.map((job, i) => (
              <li key={i}>
                <div>{job.company}, {job.dates}</div>
                <div><em>{job.role}</em></div>
              </li>
            ))}
            <li className={styles.education}>
              <div>{EDUCATION.company}, {EDUCATION.dates}</div>
              <div><em>{EDUCATION.role}</em></div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="h2">Clients &amp; Collaborators</h2>
          <ul className={styles.simpleList}>
            {CLIENTS.map((client, i) => (
              <li key={i}>{client}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Elsewhere + Colophon */}
      <section className={styles.twoCol}>
        <div>
          <h2 className="h2">Elsewhere</h2>
          <ul className={styles.simpleList}>
            {SOCIAL.map((s, i) => (
              <li key={i}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="h2">Colophon</h2>
          <p className={styles.colophonBody}>
            Typography is Triptych by The Pyte Foundry. 
            Site built by me. 
            All errors are intentional.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <AvailabilityCTA />
      </section>
    </div>
  );
}