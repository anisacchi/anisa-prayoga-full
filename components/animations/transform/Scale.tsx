'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { AnimationProps } from '@/types/Animation';
import clsx from 'clsx';

interface ScaleProps extends AnimationProps {
  threshold?: number;
}

const Scale: React.FC<ScaleProps> = ({
  key = null,
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
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
  };

  useEffect(() => {
    if (isInView) {
      control.start(animation.show);
    } else {
      control.start(animation.hidden);
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className='w-full flex justify-center items-center'
    >
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

export default Scale;
