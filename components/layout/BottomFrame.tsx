import React from 'react';
import Image from 'next/image';
import { Slide } from '@/components/animations';
import { BungaCornerBottom } from '@/public/images';

const BottomFrame = () => {
  return (
    <>
      <Slide
        direction='right'
        delay={0.5}
        className={`absolute bottom-0 z-10 !w-[150px] !h-[150px] left-0`}
      >
        <Image src={BungaCornerBottom} alt='Bunga' width={150} height={150} />
      </Slide>

      <Slide
        direction='left'
        delay={0.5}
        className={`absolute bottom-0 z-10 !w-[150px] !h-[150px] right-0`}
      >
        <Image
          src={BungaCornerBottom}
          alt='Bunga'
          width={150}
          height={150}
          className='-scale-x-100'
        />
      </Slide>
    </>
  );
};

export default BottomFrame;
