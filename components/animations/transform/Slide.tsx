'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import clsx from 'clsx';
import { AnimationProps } from '@/types/Animation';

interface SlideProps extends AnimationProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
}

const Slide: React.FC<SlideProps> = ({
  direction = 'down',
  delay = 0,
  duration = 2,
  once = true,
  threshold = 0.3,
  className,
  children,
}) => {
  const ref = useRef(null);
  const control = useAnimation();
  const isInView = useInView(ref, { once: once, amount: threshold });

  const animation = {
    hidden:
      direction === 'down'
        ? { y: '-100%', opacity: 0 }
        : direction === 'up'
        ? { y: '100%', opacity: 0 }
        : direction === 'left'
        ? { x: '100%', opacity: 0 }
        : { x: '-100%', opacity: 0 },
    show: { x: 0, y: 0, opacity: 1 },
  };

  useEffect(() => {
    if (isInView) {
      control.start(animation.show);
    } else {
      control.start(animation.hidden);
    }
  });
  return (
    <div ref={ref} className='w-full flex justify-center items-center'>
      <motion.div
        initial='hidden'
        animate={control}
        exit='hidden'
        variants={animation}
        transition={{
          duration: duration,
          delay: delay,
          type: 'spring',
        }}
        className={clsx(className, 'w-full flex justify-center items-center')}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Slide;
