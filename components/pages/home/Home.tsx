import React from 'react';
import { Hero } from '@/components';
import { Scale } from '@/components/animations';
import { BottomFrame, TopFrame } from '@/components/layout';
import Countdown from './Countdown';
import SaveTheDate from './SaveTheDate';

const Home = () => {
  return (
    <div className='relative h-dvh pb-[70px]'>
      <TopFrame />

      <div className='w-full h-full p-5 flex flex-col justify-center items-center gap-2'>
        <Scale delay={1}>
          <Hero />
        </Scale>

        <Scale delay={1.1} className='flex-col gap-2'>
          <p className='text-sm'>The Wedding of</p>
          <h1 className='text-4xl font-great-vibes'>
            Anisa <span className='text-lg mx-2'>&</span> Prayoga
          </h1>
        </Scale>

        <Countdown weddingDate='2024-12-28T08:00:00' />

        <Scale delay={1} once={false} className=''>
          <p className='text-sm'>Saturday, 28 Desember 2024</p>
        </Scale>

        <Scale delay={1.1} once={false}>
          <SaveTheDate />
        </Scale>
      </div>

      <div className='absolute bottom-[70px] w-full'>
        <BottomFrame />
      </div>
    </div>
  );
};

export default Home;
