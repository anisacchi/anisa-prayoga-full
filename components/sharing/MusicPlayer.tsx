'use client';

import { useMusic } from '@/context/MusicContext';
import { useEffect } from 'react';
import { SpeakerOff, SpeakerOn } from '@/components/icons';
import { Button } from '@/components';

const MusicPlayer = () => {
  const { isPlaying, handlePlayMusic, toggleMusic } = useMusic();

  useEffect(() => {
    const startMusicOnInteraction = () => {
      handlePlayMusic();
      document.removeEventListener('click', startMusicOnInteraction);
    };

    document.addEventListener('click', startMusicOnInteraction);

    return () => {
      document.removeEventListener('click', startMusicOnInteraction);
    };
  }, []);

  return (
    <Button
      variant='secondary'
      shape='circle'
      onClick={toggleMusic}
      classname=' top-4 ml-4 fixed z-30'
    >
      {isPlaying ? (
        <SpeakerOn
          width={18}
          height={18}
        />
      ) : (
        <SpeakerOff
          width={18}
          height={18}
        />
      )}
    </Button>
  );
};

export default MusicPlayer;
