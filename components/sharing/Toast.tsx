'use client';

import { Icon } from '@/public/images';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ToastProps {
  status: 'success' | 'error';
  text: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ status, text, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ x: 0, y: '-100%', opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1, type: 'spring' }}
      className='sticky top-1 z-50'
    >
      <div
        className={`px-2 py-4 w-64 flex items-center gap-2 rounded-lg border-2 shadow-md ${
          status === 'success'
            ? 'bg-[#d4edda] border-green text-green'
            : 'bg-[#f8d7da] border-maroon-dark text-maroon-dark'
        }`}
      >
        <Image src={Icon} width={40} height={40} alt='Icon' />

        <p className='text-sm mr-auto'>{text}</p>

        <button type='button' onClick={onClose}>
          <span className='pl-2 border-l border-black/20'>✖</span>
        </button>
      </div>

      <motion.span
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ delay: 1, duration: 5, ease: 'linear' }}
        className={`absolute bottom-0 left-0 w-full h-2 origin-left ${
          status === 'success' ? 'bg-green' : 'bg-maroon-dark'
        }`}
      />
    </motion.div>
  );
};

export default Toast;
