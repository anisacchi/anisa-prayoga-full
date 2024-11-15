'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BungaCornerBottomLeft, BungaCornerBottomRight } from '@/public/images';
import Image from 'next/image';

const BottomWelcomeScreen = () => {
  return (
    <>
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 2, type: 'spring' }}
        className='absolute flex justify-start items-end bottom-0 left-0 z-10 w-1/2 h-[150px]'
      >
        <Image
          src={BungaCornerBottomLeft}
          alt='Bunga'
          width={150}
          height={150}
          className='w-auto h-auto max-w-[150px] max-h-[150px]'
        />
      </motion.div>

      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 2, type: 'spring' }}
        className='absolute flex justify-end items-end bottom-0 right-0 z-10 w-1/2 h-[150px]'
      >
        <Image
          src={BungaCornerBottomRight}
          alt='Bunga'
          width={150}
          height={150}
          className='w-auto h-auto max-w-[150px] max-h-[150px]'
        />
      </motion.div>
    </>
  );
};

export default BottomWelcomeScreen;
