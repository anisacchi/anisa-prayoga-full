import React from 'react';
import Image from 'next/image';
import { Bunga2, ClosingPhoto } from '@/public/images';
import { Scale, Wagging } from '@/components/animations';

const Closing = () => {
  return (
    <div className='relative p-10 flex flex-col justify-center items-center'>
      <Scale threshold={0.8}>
        <Image
          src={ClosingPhoto}
          alt='Bride & Groom'
          width={200}
          height={700}
        />
      </Scale>

      <Scale threshold={0.8}>
        <p className='mb-5 text-sm text-center'>
          Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i sekalian, kami
          mengucapkan terima kasih.
        </p>
      </Scale>

      <Scale threshold={0.8} delay={0.1}>
        <p className='mb-10 text-sm italic text-center'>Wassalamualaikum Wr. Wb.</p>
      </Scale>

      <Scale threshold={0.8} delay={0.2}>
        <p className='mb-2 text-sm text-center'>Kami yang berbahagia</p>
      </Scale>

      <Scale threshold={0.8} delay={0.3}>
        <p className='font-great-vibes text-3xl text-center'>
          Anisa <span className='text-sm'>&</span> Prayoga
        </p>
      </Scale>

      <Wagging
        amplitude={6}
        duration={7}
        origin='bottom right'
        className='absolute z-10 -bottom-4 left-0 w-[120px] h-[120px]'
      >
        <Image
          src={Bunga2}
          alt='Bunga'
          width={120}
          height={120}
          className='rotate-[20deg]'
        />
      </Wagging>

      <Wagging
        amplitude={7}
        duration={6}
        origin='bottom left'
        className='absolute z-10 -bottom-4 right-0 w-[120px] h-[120px]'
      >
        <Image
          src={Bunga2}
          alt='Bunga'
          width={120}
          height={120}
          className='scale-x-[-1] -rotate-[20deg]'
        />
      </Wagging>
    </div>
  );
};

export default Closing;
