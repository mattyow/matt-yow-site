import { NextResponse } from "next/server";

export const revalidate = 0; // always fresh

export async function GET() {
  const apiKey = process.env.LASTFM_API_KEY;
  const user = process.env.LASTFM_USERNAME;

  if (!apiKey || !user) {
    return NextResponse.json({ playing: false });
  }

  try {
    const res = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json&limit=1`,
      { next: { revalidate: 0 } }
    );

    if (!res.ok) {
      return NextResponse.json({ playing: false });
    }

    const data = await res.json();
    const track = data?.recenttracks?.track?.[0];

    if (!track) {
      return NextResponse.json({ playing: false });
    }

    // The "@attr.nowplaying" field is only present when actively playing
    const isNowPlaying = track["@attr"]?.nowplaying === "true";

    if (!isNowPlaying) {
      return NextResponse.json({ playing: false });
    }

    return NextResponse.json({
      playing: true,
      track: {
        name: track.name,
        artist: track.artist["#text"],
        url: track.url,
      },
    });
  } catch {
    return NextResponse.json({ playing: false });
  }
}