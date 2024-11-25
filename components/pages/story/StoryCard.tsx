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
      <div className='relative w-10'>
        <Slide direction='down'>
          <div className='absolute top-0 left-5 border-l border-l-maroon-dark h-full' />
        </Slide>
        {/* <Slide threshold={0.6} direction='down' className='h-full'>
          <div className='absolute top-0 bottom-0 left-5 border-l border-l-maroon-dark h-full' />

          <div className='absolute -top-1 left-[2px] p-2 rounded-full aspect-square border border-maroon-dark bg-white z-10'>
            <HeartFill width={20} height={20} className='text-maroon-dark' />
          </div>
        </Slide> */}
      </div>

      <Slide direction='right' delay={0.2} threshold={0.6} className='w-full'>
        <div className='w-full m-2 p-5 rounded-lg border border-maroon-dark bg-white shadow-lg'>
          <Image src={Bingkai} alt='Bingkai foto' width={500} height={500} />
        </div>
      </Slide>
    </div>
  );
};

export default StoryCard;
