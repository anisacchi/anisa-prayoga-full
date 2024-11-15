'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WaggingProps } from '@/types/WaggingProps';

const Wagging: React.FC<WaggingProps> = ({
  children,
  type,
  duration = 2,
  amplitude = 10,
  infinity = true,
  origin = 'origin-center',
  className,
}) => {
  const animation = {
    wagging:
      type == 'slide'
        ? {
            x: [0, amplitude, -amplitude, 0],
            transition: {
              x: infinity
                ? {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: duration,
                    ease: 'easeInOut',
                  }
                : { duration: duration, ease: 'easeInOut' },
            },
          }
        : {
            // Rotation
            rotate: [0, amplitude, -amplitude, 0],
            transition: {
              rotate: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: duration,
                ease: 'linear',
              },
            },
          },
  };

  return (
    <motion.div
      animate='wagging'
      variants={animation}
      className={`${origin} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Wagging;
