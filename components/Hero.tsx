import React from 'react';
import { Wagging } from './animation';
import { Bunga2, HeroBg, HeroGif } from '@/public/images';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='relative w-full flex justify-center'>
      <Image src={HeroBg} alt='Gunungan' width={280} height={280} />

      <Image
        src={HeroGif}
        alt='Bride and Groom'
        width={280}
        height={280}
        className='absolute bottom-0 z-20'
      />

      <Wagging
        type='rotate'
        duration={4}
        amplitude={5}
        origin='origin-bottom-right'
        className='absolute z-10 bottom-8 right-[55%] w-[100px] h-[100px]'
      >
        <Image
          src={Bunga2}
          alt='Bunga'
          width={100}
          height={100}
          className='block w-auto h-auto rotate-12'
        />
      </Wagging>

      <Wagging
        type='rotate'
        duration={4}
        amplitude={5}
        origin='origin-bottom-left'
        className='absolute z-10 bottom-8 left-[55%] w-[100px] h-[100px]'
      >
        <Image
          src={Bunga2}
          alt='Bunga'
          width={100}
          height={100}
          className='block w-auto h-auto -scale-x-100'
        />
      </Wagging>
    </div>
  );
};

export default Hero;
