import styles from "./Figure.module.css";

type Size = "col" | "wide" | "bleed";

export default function Figure({
  src,
  alt,
  caption,
  size = "col",
}: {
  src: string;
  alt: string;
  caption?: string;
  size?: Size;
}) {
  return (
    <figure
      className={`${styles.figure} ${styles[`size_${size}`]}`}
      data-size={size}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
      {caption && <figcaption className="caption">{caption}</figcaption>}
    </figure>
  );
}
