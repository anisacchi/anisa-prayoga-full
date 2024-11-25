import { Bunga2, HeroBg, HeroGif } from '@/public/images';
import Image from 'next/image';
import React from 'react';

import { Wagging } from '@/components/animations';

const Hero = () => {
  return (
    <div className='relative w-full flex justify-center'>
      <Image src={HeroBg} alt='Gunungan' width={260} height={260} />

      <Image
        src={HeroGif}
        alt='Bride and Groom'
        width={260}
        height={260}
        className='absolute bottom-0 z-20'
      />

      <Wagging
        amplitude={5}
        duration={4}
        origin='bottom right'
        className={`absolute bottom-8 z-10 w-[100px] h-[100px] right-[55%]`}
      >
        <Image src={Bunga2} alt='Bunga' width={100} height={100} />
      </Wagging>

      <Wagging
        amplitude={5}
        duration={4}
        origin='bottom left'
        className={`absolute bottom-8 z-10 w-[100px] h-[100px] left-[55%]`}
      >
        <Image
          src={Bunga2}
          alt='Bunga'
          width={100}
          height={100}
          className='-scale-x-100'
        />
      </Wagging>
    </div>
  );
};

export default Hero;
