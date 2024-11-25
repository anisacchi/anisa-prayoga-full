import React from 'react';
import { Scale } from '@/components/animations';
import { Wave } from '@/public/images';
import Image from 'next/image';

const Quotes = () => {
  return (
    <>
      <div className='relative flex flex-col justify-center bg-maroon-dark pt-1 pb-[50px] px-5 gap-5'>
        <div className='absolute z-10 -top-[72px] left-0 right-0 w-full h-[74px] bg-maroon-dark' />
        <Scale once={false} className='mb-4'>
          <p className='text-white text-sm text-center'>
            &quot;Dan nikahkanlah orang-orang yang sendirian di antara kamu, dan
            orang-orang yang layak (berkawin) dari hamba-hamba sahayamu yang
            lelaki dan hamba-hamba sahayamu yang perempuan. jika mereka miskin,
            Allah akan memampukan mereka dengan kurnia-Nya. dan Allah Maha Luas
            (pemberian-Nya) lagi Maha Mengetahui.&quot;
          </p>
        </Scale>

        <Scale delay={0.2} once={false} className='mb-4'>
          <p className='text-white font-caveat text-center'>(QS. An-Nur: 32)</p>
        </Scale>

        <Image
          src={Wave}
          alt='Wave'
          width={300}
          height={45}
          className='absolute -bottom-[60px] left-0 w-full h-auto object-cover'
        />
      </div>
    </>
  );
};

export default Quotes;
