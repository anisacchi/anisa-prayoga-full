import React from 'react';
import { Slide, Typing, Wagging } from '@/components/animations';
import Image from 'next/image';
import { Bunga2 } from '@/public/images';
import { PointOnMap } from '../icons';

const Event = () => {
  return (
    <div className='relative flex flex-col rounded-t-lg'>
      <Wagging
        amplitude={6}
        duration={6}
        origin='top right'
        className='absolute -top-8 -right-4 w-[120px] h-[240px] z-20'
      >
        <Image
          src={Bunga2}
          alt='Bunga'
          width={120}
          height={240}
          className='scale-y-[-1]'
        />
      </Wagging>

      <div className='flex justify-center items-center mt-8 py-4'>
        <Typing
          text='Our Special Day'
          once={false}
          className='!font-great-vibes !text-3xl text-white'
        />
      </div>

      <div className='relative w-full p-5'>
        {/* Akad */}
        <Slide direction='right' once={false} threshold={0.5}>
          <div className='w-full my-5 p-5 rounded-lg flex flex-col justify-center items-center text-white bg-maroon-dark/80 shadow-lg'>
            <h2 className='font-caveat text-2xl mb-4'>Akad Nikah</h2>

            <p className='text-sm font-semibold'>Sabtu, 28 Desember 2024</p>

            <p className='text-sm font-light'>Pukul 08.00 WIB</p>

            <div className='flex flex-col justify-center items-center mt-2'>
              <div className='flex justify-center items-center gap-2'>
                <PointOnMap width={20} height={20} className='text-white' />
                <p className='text-sm font-light'>
                  SMK Negeri 2 Malang (Gedung Aula)
                </p>
              </div>
              <p className='text-xs font-light text-center'>
                Jl. Veteran No.17, Ketawanggede, Kec. Lowokwaru, Kota Malang
              </p>
            </div>
          </div>
        </Slide>

        {/* Resepsi */}
        <Slide direction='right' once={false} threshold={0.5}>
          <div className='w-full my-5 p-5 rounded-lg flex flex-col justify-center items-center text-white bg-maroon-dark/80 shadow-lg'>
            <h2 className='font-caveat text-2xl mb-4'>Resepsi</h2>

            <div className='flex justify-center items-center'>
              <span className='px-5 text-sm font-light'>Sabtu</span>

              <div className='px-5 flex flex-col justify-center items-center border-x-2 border-maroon-light'>
                <span className='text-3xl font-great-vibes font-semibold'>
                  28
                </span>

                <span className='text-xs font-light'>Desember</span>
              </div>

              <span className='px-5 text-xs font-light'>2024</span>
            </div>

            <p className='text-sm font-light mt-1'>Pukul 12.30 - 15.30 WIB</p>

            <div className='flex flex-col justify-center items-center mt-2'>
              <div className='flex justify-center items-center gap-2'>
                <PointOnMap width={20} height={20} className='text-white' />
                <p className='text-sm font-light'>
                  SMK Negeri 2 Malang (Gedung Aula)
                </p>
              </div>
              <p className='text-xs font-light text-center'>
                Jl. Veteran No.17, Ketawanggede, Kec. Lowokwaru, Kota Malang
              </p>
            </div>
          </div>
        </Slide>
      </div>

			<Wagging
        amplitude={6}
        duration={6}
        origin='top left'
        className='absolute top-1/2 -left-8 w-[120px] h-[240px] z-20'
      >
        <Image
          src={Bunga2}
          alt='Bunga'
          width={120}
          height={240}
          className='scale-x-[-1] rotate-90'
        />
      </Wagging>
    </div>
  );
};

export default Event;
