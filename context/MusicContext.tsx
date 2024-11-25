'use client'

import React, { createContext, useContext, useRef, useState } from 'react';

type MusicContextType = {
  isPlaying: boolean;
  toggleMusic: () => void;
	handlePlayMusic: () => void;
};

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log('Playback failed:', error);
        });
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        handlePlayMusic();
      }
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic, handlePlayMusic }}>
      {children}
      <audio ref={audioRef} muted loop>
        <source src='/music/forlove.mp3' type='audio/mpeg' />
      </audio>
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};
