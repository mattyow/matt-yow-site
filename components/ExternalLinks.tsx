"use client";

import { useEffect } from "react";

export default function ExternalLinks() {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="http"]');
    links.forEach((link) => {
      if (!link.href.includes(window.location.hostname)) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
    });
  }, []);

  return null;
}