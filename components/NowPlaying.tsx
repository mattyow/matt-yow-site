"use client";

import { useEffect, useState } from "react";
import styles from "./NowPlaying.module.css";

type Track = {
  name: string;
  artist: string;
  url: string;
  image: string | null;
};

export default function NowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchTrack() {
      try {
        const res = await fetch("/api/nowplaying");
        if (!res.ok) return;
        const data = await res.json();
        if (!cancelled) {
          setTrack(data.playing ? data.track : null);
        }
      } catch {
        // silently fail
      }
    }

    fetchTrack();
    const interval = setInterval(fetchTrack, 30000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  if (!track) return null;

  return (
    <a
      href={track.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.widget}
    >
      {track.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={track.image} alt="" className={styles.cover} />
      )}
      <span className={styles.text}>
        Now Playing: {track.artist} — {track.name}
      </span>
    </a>
  );
}