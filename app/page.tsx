import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.feature}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>About</p>
          <h2 className="h2">Hello, my name is Matt Yow</h2>
          <p className={styles.body}>
            My name is Matt Yow. I specialize in brand identity, experience,
            and activation. I&rsquo;ve been designing for over 15 years across
            startups, larger enterprises, and agencies. Currently I am{" "}
            <em>Staff Brand Designer</em> at Netlify. I live in Richmond,
            Virginia.
          </p>
        </div>
        <div className={styles.media}>
          {/* Drop a portrait into /public/images/matt-portrait.jpg and uncomment: */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* <img src="/images/matt-portrait.jpg" alt="Matt Yow" /> */}
        </div>
      </section>
    </div>
  );
}
