'use client';

import { Scale, Typing } from '@/components/animations';
import { WaveTop } from '@/public/images';
import Image from 'next/image';
import React from 'react';
import WishForm from './WishForm';
import WishList from './WishList';

const Wishes = () => {
  return (
    <div className='relative flex flex-col justify-center items-center pt-[42px] pb-5 px-5'>
      <Image
        src={WaveTop}
        alt='Wave'
        width={800}
        height={170}
        className='absolute -top-20 right-0 w-full h-[84px] object-fill'
      />

      <Typing
        text='Words of Wishes'
        once={false}
        className='!text-3xl !font-great-vibes !text-maroon-dark'
      />
      <Scale threshold={0.9} className='mt-4 px-4' once={false}>
        <p className='text-xs text-maroon-light text-center'>
          Kami sangat menghargai setiap kata dari Saudara/i. Silahkan tinggalkan
          pesan dan harapannya di sini, dan jadilah bagian dari kenangan indah
          kami 🤗❤
        </p>
      </Scale>

			<WishForm />
			<WishList />
    </div>
  );
};

export default Wishes;
