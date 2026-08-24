"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ExternalLinks() {
  const pathname = usePathname();

  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="http"]');
    links.forEach((link) => {
      if (!link.href.includes(window.location.hostname)) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });
  }, [pathname]);

  return null;
}