import { Slide } from '@/components/animations';
import { HeartFill } from '@/components/icons';
import { Bingkai } from '@/public/images';
import Image from 'next/image';
import React from 'react';

interface StoryCardProps {
  index: number;
  story: {
    title: string;
    image: string;
    story: string;
  };
}

const StoryCard: React.FC<StoryCardProps> = ({ story, index }) => {
  return (
    <div className='relative flex w-full h-full'>
      <div className='relative flex w-10'>
        <Slide direction='down' className='h-full'>
          <div className='w-full ml-5 border-l border-l-maroon-dark h-full' />

          <div className='absolute -top-1 left-[2px] p-2 rounded-full aspect-square border border-maroon-dark bg-white z-10'>
            <HeartFill width={20} height={20} className='text-maroon-dark' />
          </div>
        </Slide>
      </div>

      <Slide
        direction='right'
        delay={0.2}
        threshold={0.6}
        className='w-full ml-5'
      >
        <div className='w-full m-2 p-5 rounded-lg border border-maroon-dark bg-white shadow-lg'>
          <div className='relative w-full'>
            <Image
              src={Bingkai}
              alt='Bingkai foto'
              width={400}
              height={400}
              className='absolute top-0 left-0 z-10'
            />

            <Image
              src={story.image}
              alt={story.title}
              width={400}
              height={400}
              className='w-full p-[6.6%]'
            />
          </div>

          <Slide direction='right' className='!justify-start'>
            <h3 className='font-caveat text-xl'>{story.title}</h3>
          </Slide>

          <Slide direction='right' delay={0.2} className='!justify-start'>
            <p className='text-sm text-gray'>{story.story}</p>
          </Slide>
        </div>
      </Slide>
    </div>
  );
};

export default StoryCard;
