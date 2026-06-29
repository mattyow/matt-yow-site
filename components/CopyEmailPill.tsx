"use client";

import { useState } from "react";

export default function CopyEmailPill({
  defaultLabel,
  copiedLabel = "Email copied!",
  email = "hello@mattyow.com",
  className,
}: {
  defaultLabel: string;
  copiedLabel?: string;
  email?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API blocked — fall back to a mailto.
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      aria-label={copied ? copiedLabel : `Copy email address ${email}`}
    >
      {copied ? copiedLabel : defaultLabel}
    </button>
  );
}
