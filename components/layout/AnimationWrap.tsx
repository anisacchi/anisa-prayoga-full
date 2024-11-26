'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

interface AnimationWrapProps {
  children: React.ReactNode;
}

const AnimationWrap: React.FC<AnimationWrapProps> = ({ children }) => {
  const pathName = usePathname();
  const [keyId, setKeyId] = useState<string>(pathName);

  useEffect(() => {
    setKeyId(pathName);
  }, [pathName]);

  return (
    <>
      <AnimatePresence mode='wait'>
        <motion.div
          key={`${keyId}-top`}
          initial={{ top: 0 }}
          animate={{ top: '-110vh' }}
          exit={{ top: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.9,
            ease: 'easeInOut',
          }}
          className='absolute h-[110vh] w-full bg-batik bg-center bg-repeat bg-contain z-50'
        />
      </AnimatePresence>

      <AnimatePresence mode='wait'>
        <motion.div
          key={`${keyId}-bottom`}
          initial={{ top: 0 }}
          animate={{ top: '-110vh' }}
          exit={{ top: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.9,
            ease: 'easeInOut',
          }}
          className='absolute h-[110vh] w-full bg-maroon-light z-40'
        />
      </AnimatePresence>

      <motion.div
        key={`${keyId}-inner`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.2,
          ease: 'linear',
        }}
        className='relative w-full max-w-md h-full overflow-x-hidden hide-scrollbar'
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimationWrap;
