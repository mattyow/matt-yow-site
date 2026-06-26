import AvailabilityCTA from "@/components/AvailabilityCTA";
import styles from "./page.module.css";

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
  role: "Bachelor's of Fine Arts, Graphic Design",
};

const CLIENTS = [
  "Adobe", "Apple", "BambooHR", "Chick-fil-A", "Hewlett-Packard",
  "Intercom", "Lyft", "Microsoft", "Monotype", "Red Antler",
  "SCAD", "SeatGeek", "Tiny Wins", "Treehouse",
  "University of California Berkeley",
];

const SOCIAL = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Substack", href: "#" },
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Index</p>
          <h1 className="h1">Hello</h1>

          <div className={styles.bio}>
            <p>
              With over 15 years of experience, I&rsquo;ve integrated with teams
              of all sizes — from startups to publicly traded companies, from
              internal teams to an array of contractors. My focus is on core
              brand design systems with a deep regard to powerful brand
              strategy.
            </p>
            <p>
              Currently I am <em>Staff Brand Designer</em> at Netlify.
            </p>
            <p>I live in Richmond, Virginia.</p>
            <p>
              Take a look at{" "}
              <a href="#" className={styles.link}>
                my home library
              </a>{" "}
              minisite.
            </p>
          </div>

          <div className={styles.ctaWrap}>
            <AvailabilityCTA />
          </div>
        </div>

        <div className={styles.graphic}>
          {/* Drop a graphic at /public/images/matt-icon.svg */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/matt-icon.svg" alt="" />
        </div>
      </section>

      <section className={styles.twoCol}>
        <div>
          <h2 className={styles.sectionHeading}>Experience</h2>
          <ul className={styles.list}>
            {EXPERIENCE.map((job, i) => (
              <li key={i} className={styles.listItem}>
                <div>{job.company}, {job.dates}</div>
                <div className={styles.italic}>{job.role}</div>
              </li>
            ))}
            <li className={`${styles.listItem} ${styles.education}`}>
              <div>{EDUCATION.company}, {EDUCATION.dates}</div>
              <div className={styles.italic}>{EDUCATION.role}</div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={styles.sectionHeading}>Clients &amp; Collaborators</h2>
          <ul className={styles.list}>
            {CLIENTS.map((client, i) => (
              <li key={i} className={styles.simpleItem}>{client}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.twoCol}>
        <div>
          <h2 className={styles.sectionHeading}>Elsewhere</h2>
          <ul className={styles.list}>
            {SOCIAL.map((s, i) => (
              <li key={i} className={styles.simpleItem}>
                <a href={s.href} className={styles.link}>{s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={styles.sectionHeading}>Colophon</h2>
          <p className={styles.colophonBody}>
            Typography: Figure by Fort Foundry, Heldane Text by Klim Type
            Foundry, and Umiak Mono by East of Rome. Deployed from GitHub with
            Next.js, hosted on Netlify.
          </p>
        </div>
      </section>
    </div>
  );
}
