'use client';

import { Bingkai } from '@/public/images';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const images = [
    '/images/gallery-1.webp',
    '/images/gallery-2.webp',
    '/images/gallery-3.webp',
    '/images/gallery-4.webp',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='relative w-full'>
      <div className='w-full px-10 bg-white'>
        <div className='relative flex justify-center items-center p-[6.6%]'>
          <Image
            src={Bingkai}
            width={500}
            height={500}
            alt='Bingkai'
            className='absolute top-0 left-0 bottom-0 right-0 z-10'
          />

          <Image
            src={images[currentIndex]}
            width={500}
            height={500}
            alt='Prewedding'
            className='w-full h-auto'
          />

          <button
            className='absolute cursor-pointer top-1/2 -translate-y-1/2 z-20 text-maroon-dark/80 hover:text-maroon-dark left-3 text-4xl'
            onClick={goToPrevious}
          >
            &#10094;
          </button>
          <button
            className='absolute cursor-pointer top-1/2 -translate-y-1/2 opacity-80 z-20 text-maroon-dark/80 hover:text-maroon-dark right-3 text-4xl'
            onClick={goToNext}
          >
            &#10095;
          </button>
        </div>

        <div className='w-full flex justify-center items-center mt-3'>
          <div className='flex justify-center gap-3'>
            {images.map((image, index) => (
              <Image
                key={`thumbnail-${index}`}
                src={image}
								width={80}
								height={80}
                alt={`Thumbnail prewedding ${index}`}
                className={`w-20 h-16 object-cover rounded-md cursor-pointer transition-all ease-in-out duration-300 shadow-md hover:opacity-100 ${
                  index == currentIndex
                    ? 'opacity-100 border-2 border-maroon-dark'
                    : 'opacity-60 border-0'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
