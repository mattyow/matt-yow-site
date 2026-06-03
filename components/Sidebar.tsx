"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Sidebar.module.css";

const navItems = [
  { href: "/", label: "Index", icon: IconIndex },
  { href: "/work", label: "Case Studies", icon: IconCase },
  { href: "/archive", label: "Archive", icon: IconArchive },
  { href: "/writing", label: "Writing", icon: IconWriting },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={styles.sidebar}
      data-state={open ? "open" : "closed"}
      aria-label="Primary"
    >
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
      >
        <IconPanel />
        <span>Matt Yow</span>
      </button>

      <hr className={styles.rule} />

      <nav className={styles.nav}>
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
<Link
  key={href}
  href={href}
  className={styles.item}
  data-label={label}
  data-active={isActive ? "true" : undefined}
>
              <Icon />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

/* ---------- Icons ---------- */

function IconPanel() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4.375 5.25H23.625C24.1082 5.25 24.5 5.64175 24.5 6.125V21.875C24.5 22.3582 24.1082 22.75 23.625 22.75H4.375C3.89175 22.75 3.5 22.3582 3.5 21.875V6.125C3.5 5.64175 3.89175 5.25 4.375 5.25Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.375 22.75L18.375 5.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconIndex() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 17.5C16.4162 17.5 18.375 15.5412 18.375 13.125C18.375 10.7088 16.4162 8.75 14 8.75C11.5838 8.75 9.625 10.7088 9.625 13.125C9.625 15.5412 11.5838 17.5 14 17.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.97754 21.8061C7.63588 20.5094 8.64043 19.4203 9.87985 18.6595C11.1193 17.8988 12.5451 17.4961 13.9994 17.4961C15.4537 17.4961 16.8796 17.8988 18.119 18.6595C19.3584 19.4203 20.3629 20.5094 21.0213 21.8061"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCase() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.57715 8.41309L14.0006 14.1181L24.424 8.41309"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.42 2.73434L24.045 8.00403C24.1824 8.07923 24.2972 8.18995 24.3772 8.32462C24.4572 8.4593 24.4996 8.61299 24.5 8.76966V19.2303C24.4996 19.3869 24.4572 19.5406 24.3772 19.6753C24.2972 19.81 24.1824 19.9207 24.045 19.9959L14.42 25.2656C14.2912 25.3361 14.1468 25.373 14 25.373C13.8532 25.373 13.7088 25.3361 13.58 25.2656L3.955 19.9959C3.81756 19.9207 3.70284 19.81 3.6228 19.6753C3.54277 19.5406 3.50036 19.3869 3.5 19.2303V8.76966C3.50036 8.61299 3.54277 8.4593 3.6228 8.32462C3.70284 8.18995 3.81756 8.07923 3.955 8.00403L13.58 2.73434C13.7088 2.66388 13.8532 2.62695 14 2.62695C14.1468 2.62695 14.2912 2.66388 14.42 2.73434Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14.1191V25.3749"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconArchive() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.57715 8.41309L14.0006 14.1181L24.424 8.41309"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="7.44 4.38"
      />
      <path
        d="M14.42 2.73434L24.045 8.00403C24.1824 8.07923 24.2972 8.18995 24.3772 8.32462C24.4572 8.4593 24.4996 8.61299 24.5 8.76966V19.2303C24.4996 19.3869 24.4572 19.5406 24.3772 19.6753C24.2972 19.81 24.1824 19.9207 24.045 19.9959L14.42 25.2656C14.2912 25.3361 14.1468 25.373 14 25.373C13.8532 25.373 13.7088 25.3361 13.58 25.2656L3.955 19.9959C3.81756 19.9207 3.70284 19.81 3.6228 19.6753C3.54277 19.5406 3.50036 19.3869 3.5 19.2303V8.76966C3.50036 8.61299 3.54277 8.4593 3.6228 8.32462C3.70284 8.18995 3.81756 8.07923 3.955 8.00403L13.58 2.73434C13.7088 2.66388 13.8532 2.62695 14 2.62695C14.1468 2.62695 14.2912 2.66388 14.42 2.73434Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14.1191V25.3749"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="7.44 4.38"
      />
    </svg>
  );
}

function IconBook() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 21H22.75V3.5H7.875C7.17881 3.5 6.51113 3.77656 6.01884 4.26884C5.52656 4.76113 5.25 5.42881 5.25 6.125V22.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.75 25C23.0261 25 23.25 24.7761 23.25 24.5C23.25 24.2239 23.0261 24 22.75 24V24.5V25ZM7 24.5V24C6.30964 24 5.75 23.4404 5.75 22.75H5.25H4.75C4.75 23.9926 5.75736 25 7 25V24.5ZM5.25 22.75H5.75C5.75 22.0596 6.30964 21.5 7 21.5V21V20.5C5.75736 20.5 4.75 21.5074 4.75 22.75H5.25ZM7 24.5V25H22.75V24.5V24H7V24.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconWriting() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10.138 23.6251H5.25C5.01794 23.6251 4.79538 23.533 4.63128 23.3689C4.46719 23.2048 4.375 22.9822 4.375 22.7501V17.8622C4.37511 17.6304 4.46715 17.4082 4.63094 17.2442L18.1191 3.75608C18.2831 3.59211 18.5056 3.5 18.7376 3.5C18.9695 3.5 19.192 3.59211 19.3561 3.75608L24.2441 8.64077C24.408 8.80484 24.5001 9.02732 24.5001 9.25928C24.5001 9.49125 24.408 9.71372 24.2441 9.8778L10.7559 23.3692C10.592 23.533 10.3697 23.625 10.138 23.6251Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.875 7L21 13.125"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9375 10.0625L7.4375 20.5625"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4441 23.5681L4.43066 17.5547"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
