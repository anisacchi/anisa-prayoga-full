'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { AnimationProps } from '@/types/Animation';

interface WaggingProps extends AnimationProps {
  amplitude: number;
  origin?:
    | 'center'
    | 'top'
    | 'top left'
    | 'top right'
    | 'right'
    | 'bottom'
    | 'bottom right'
    | 'bottom left'
    | 'left';
}

const Wagging: React.FC<WaggingProps> = ({
  key = null,
  children,
  amplitude,
  origin = 'center',
  duration = 2,
  once,
  className,
}) => {
  let uniqueKey = key;

  if (!key) {
    uniqueKey = Date.now().toString();
  }

  return (
    <motion.div
      key={uniqueKey}
      animate={{
        rotate: [0, amplitude, -amplitude, 0],
        transition: {
          repeat: once ? 0 : Infinity,
          repeatType: 'loop',
          duration: duration,
          ease: 'linear',
        },
      }}
      style={{
        transformOrigin: origin,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Wagging;
