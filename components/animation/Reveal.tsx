'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { RevealProps } from '@/types/RevealProps';

const Reveal: React.FC<RevealProps> = ({
  children,
  type = 'scale',
  direction = 'down',
  delay = 0,
  once = true,
  threshold = 0.3,
  styles,
}) => {
  const ref = useRef(null);
  const control = useAnimation();
  const isInView = useInView(ref, { once: once, amount: threshold });

  const animation = {
    hidden:
      type === 'scale'
        ? { scale: 0, opacity: 0 }
        : direction === 'up'
        ? { y: '100%', opacity: 0 }
        : direction === 'down'
        ? { y: '-100%', opacity: 0 }
        : direction === 'left'
        ? { x: '100%', opacity: 0 }
        : { x: '-100%', opacity: 0 },
    visible:
      type === 'scale'
        ? { scale: [0, 1], opacity: 1 }
        : { x: 0, y: 0, opacity: 1 },
  };

  useEffect(() => {
    if (isInView) {
      control.start(animation.visible);
    } else {
      control.start(animation.hidden);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={control}
      exit='hidden'
      variants={animation}
			transition={{
				duration: 2,
				delay: delay,
				type: 'spring',
				mass: 2,
				stiffness: 40,
			}}
			className={`w-full flex justify-center items-center ${styles}`}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
