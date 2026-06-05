import Link from "next/link";
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
  "Adobe",
  "Apple",
  "BambooHR",
  "Chick-fil-A",
  "Hewlett-Packard",
  "Intercom",
  "Lyft",
  "Microsoft",
  "Monotype",
  "Red Antler",
  "SCAD",
  "SeatGeek",
  "Tiny Wins",
  "Treehouse",
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
      <p className={styles.eyebrow}>Index</p>

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className="h1">Hello</h1>
          <h2 className={styles.subtitle}>My name is Matt Yow</h2>

          <div classN
