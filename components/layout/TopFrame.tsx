import React from 'react';
import Image from 'next/image';
import { Wagging } from '@/components/animations';
import { Bunga1, CornerTopRight } from '@/public/images';

const TopFrame = () => {
  return (
    <>
      <Image
        src={CornerTopRight}
        alt='Bunga'
        width={180}
        height={193}
        className='absolute -top-6 -right-6 z-20'
      />

      <Wagging
        amplitude={5}
        duration={4}
        origin='top right'
        className='absolute -top-6 -right-6 z-30'
      >
        <Image src={Bunga1} alt='Bunga' width={130} height={130} />
      </Wagging>
    </>
  );
};

export default TopFrame;
