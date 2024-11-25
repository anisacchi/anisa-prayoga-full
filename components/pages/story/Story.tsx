import React from 'react';
import Image from 'next/image';

import { Typing, Wagging } from '@/components/animations';
import stories from '@/data/story.json';
import { Bunga2, WaveTop } from '@/public/images';
import StoryCard from './StoryCard';

const Story = () => {
  return (
    <div className='relative w-full flex flex-col items-center p-5 bg-white'>
      <Wagging
        duration={7}
        amplitude={4}
        origin='bottom right'
        className='absolute z-10 -top-[155px] left-0 w-[120px] h-[120px]'
      >
        <Image
          src={Bunga2}
          alt='Bunga'
          width={120}
          height={120}
          className='rotate-[30deg]'
        />
      </Wagging>

      <Wagging
        duration={8}
        amplitude={5}
        origin='bottom left'
        className='absolute z-10 -top-36 right-[10%] w-[100px] h-[100px]'
      >
        <Image
          src={Bunga2}
          alt='Bunga'
          width={100}
          height={100}
          className='scale-x-[-1] -rotate-12'
        />
      </Wagging>

      <Image
        src={WaveTop}
        alt='Wave'
        width={800}
        height={170}
        className='absolute -top-20 right-0 w-full h-[84px] z-20 object-fill'
      />

      {/* Title */}
      <div className='flex justify-center items-center mb-4'>
        <Typing
          text='Our Love Story'
          className='!text-3xl !font-great-vibes text-maroon-dark'
          once={false}
        />
      </div>

      {stories.map((story, index) => (
        <StoryCard key={story.title} story={story} index={index} />
      ))}
    </div>
  );
};

export default Story;
