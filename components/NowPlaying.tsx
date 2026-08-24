"use client";

import { useEffect, useState } from "react";
import styles from "./NowPlaying.module.css";

type Track = {
  name: string;
  artist: string;
  url: string;
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
        // silently fail — widget just doesn't show
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
      <span className={styles.pulse} aria-hidden="true" />
      <span className={styles.text}>
        {track.artist} — {track.name}
      </span>
    </a>
  );
}