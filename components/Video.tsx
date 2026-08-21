import styles from "./Video.module.css";

type Size = "col" | "wide" | "bleed";

export default function Video({
  src,
  caption,
  size = "col",
  poster,
}: {
  src: string;
  caption?: string;
  size?: Size;
  poster?: string;
}) {
  return (
    <figure className={`${styles.figure} ${styles[`size_${size}`]}`}>
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className={styles.video}
      />
      {caption && <figcaption className="caption">{caption}</figcaption>}
    </figure>
  );
}