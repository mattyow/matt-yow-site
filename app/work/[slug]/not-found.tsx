import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "80px 48px" }}>
      <h2 className="h2">Not found.</h2>
      <p style={{ marginTop: 24 }}>
        That case study doesn&rsquo;t exist (yet). <Link href="/">Go home</Link>.
      </p>
    </div>
  );
}
