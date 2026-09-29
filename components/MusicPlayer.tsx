"use client";

import { useRef } from "react";

type MusicPlayerProps = {
  music: string;
};

export default function MusicPlayer({ music }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playMusic = async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
    } catch (error) {
      console.error("Music playback failed:", error);
    }
  };

  return (
    <audio
      ref={audioRef}
      src={music}
      loop
      preload="auto"
    />
  );
}