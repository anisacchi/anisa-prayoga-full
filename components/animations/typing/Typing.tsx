'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface TypingProps {
	text: string;
	delay?: number;
	duration?: number;
	once?: boolean;
  threshold?: number;
	className?: string
}

const Typing: React.FC<TypingProps> = ({
  delay = 0.05,
  duration = 0.1,
  once = true,
  threshold = 0.3,
	className,
  text,
}) => {
	const ref = useRef(null);

	return (
		<p ref={ref} aria-hidden>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial='hidden'
          whileInView='show'
          viewport={{ once: once, amount: threshold }}
          variants={{
            hidden: {
              opacity: 0,
            },
            show: {
              opacity: 1,
              transition: {
                delay: index * delay,
                duration: duration,
                type: 'spring',
                stiffness: 100,
                mass: 0.3,
              },
            },
          }}
					className={clsx('font-caveat text-lg', className)}
        >
          {char}
        </motion.span>
      ))}
    </p>
	)
}

export default Typing