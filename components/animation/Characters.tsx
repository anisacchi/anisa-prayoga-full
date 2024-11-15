'use client';

import { CharactersProps } from '@/types/CharactersProps';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Characters: React.FC<CharactersProps> = ({
  text,
  className,
  once = true,
}) => {
  const ref = useRef(null);

  return (
    <motion.p ref={ref} aria-hidden>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial='hidden'
          whileInView={'visible'}
          viewport={{ once: once }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: index * 0.05,
                duration: 0.1,
                type: 'spring',
                stiffness: 100,
                mass: 0.3,
              },
            },
          }}
          className={className}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default Characters;
