import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "80px 48px" }}>
      <h2 className="h2">Not found.</h2>
      <p style={{ marginTop: 24 }}>
        That archive entry doesn&rsquo;t exist (yet).{" "}
        <Link href="/archive">Back to archive</Link>.
      </p>
    </div>
  );
}
