import React from 'react';
import { Characters, Reveal, Wagging } from './animation';
import { BottomWelcomeScreen, Hero } from '@/components';
import {
  Bunga1,
  BungaCornerBottomLeft,
  BungaCornerBottomRight,
  CornerTopRight,
} from '@/public/images';
import Image from 'next/image';

const WelcomeScreen: React.FC<{ guest: string }> = ({ guest }) => {
  return (
    <div className='relative w-full'>
      <div className='w-full h-screen p-6 flex flex-col justify-center items-center text-center'>
        <Reveal type='scale'>
          <p className='font-light mb-8'>Wedding Invitation</p>
        </Reveal>

        <Reveal type='scale' delay={0.1}>
          <Hero />
        </Reveal>

        <Reveal type='scale' delay={0.2}>
          <h1 className='text-4xl my-3 font-greatVibes'>
            Anisa<span className='text-lg mx-2'>&</span>Prayoga
          </h1>
        </Reveal>

        <Reveal type='scale' styles='flex flex-col'>
          <p className='text-sm my-2'>With great joy, we invite</p>
          <div className='w-2/3 border-b-2 border-b-maroon-dark flex justify-center items-center'>
            <Characters text={guest} className='font-caveat text-lg' />
          </div>
          <p className='mb-10 mt-2 text-sm'>
            to celebrate this special moment with us 😊
          </p>
        </Reveal>

        <Image
          src={CornerTopRight}
          alt='Bunga'
          width={180}
          height={193}
          className='absolute z-20 -top-6 -right-6'
        />

        <Wagging
          type='rotate'
          duration={4}
          amplitude={5}
          origin='origin-top-right'
          className='absolute z-30 -top-6 -right-4 w-[120px] h-[120px]'
        >
          <Image
            src={Bunga1}
            alt='Bunga'
            width={120}
            height={120}
            className='block'
          />
        </Wagging>

        <BottomWelcomeScreen />
      </div>
    </div>
  );
};

export default WelcomeScreen;
