import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bride, Groom, Salam } from '@/public/images';
import { Button } from '@/components';
import { Scale, Slide } from '@/components/animations';
import { Instagram } from '@/components/icons';

const Couple = () => {
  return (
    <div className='py-12 px-5 w-full flex flex-col gap-4 justify-center items-center'>
      <Scale>
        <Image
          src={Salam}
          alt='Salam'
          width={460}
          height={260}
          className='w-[60%]'
        />
      </Scale>

      <Scale delay={0.1}>
        <p className='text-sm italic text-green'>
          Assalamualaikum Warahmatullahi Wabarakatuh
        </p>
      </Scale>

      <Scale delay={0.15}>
        <p className='text-sm text-center'>
          Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta&#39;ala, Insya
          Allah kami akan menyelenggarakan acara pernikahan:
        </p>
      </Scale>

      <div className='w-full flex flex-col justify-center items-center'>
        <Slide direction='right'>
          <Image
            src={Bride}
            alt='Bride'
            width={360}
            height={360}
            className='w-[70%] mb-2'
          />
        </Slide>

        <Slide direction='right' delay={0.1}>
          <p className='text-4xl font-great-vibes mb-2'>Anisa Permatasari</p>
        </Slide>

        <Slide direction='right' delay={0.15}>
          <p className='text-sm'>Putri kedua dari</p>
        </Slide>

        <Slide direction='right' delay={0.2}>
          <p className='text-sm'>Bapak Hartono & Ibu Sri Iswatiningsih</p>
        </Slide>

        <Slide direction='right' delay={0.25}>
          <Link
            href='https://instagram.com/anisa.__.chi'
            rel='noreferrer noopener'
            target='_blank'
            className='mt-2'
          >
            <Button shape='circle' variant='primary'>
              <Instagram
                width={20}
                height={20}
                className='text-white fill-none'
              />
            </Button>
          </Link>
        </Slide>
      </div>

			<Scale className='my-2'>
				<span className='font-great-vibes text-2xl'>&</span>
			</Scale>

			<div className='w-full flex flex-col justify-center items-center'>
        <Slide direction='left'>
          <Image
            src={Groom}
            alt='Groom'
            width={360}
            height={360}
            className='w-[70%] mb-2'
          />
        </Slide>

        <Slide direction='left' delay={0.1}>
          <p className='text-4xl font-great-vibes mb-2'>Prayoga Febriandika</p>
        </Slide>

        <Slide direction='left' delay={0.15}>
          <p className='text-sm'>Putra kedua dari</p>
        </Slide>

        <Slide direction='left' delay={0.2}>
          <p className='text-sm'>Bapak Ketut Hari Handoko & Ibu Eni Rokhayati</p>
        </Slide>

        <Slide direction='left' delay={0.25}>
          <Link
            href='https://instagram.com/pfebriandikaa'
            rel='noreferrer noopener'
            target='_blank'
            className='mt-2'
          >
            <Button shape='circle' variant='primary'>
              <Instagram
                width={20}
                height={20}
                className='text-white fill-none'
              />
            </Button>
          </Link>
        </Slide>
      </div>
    </div>
  );
};

export default Couple;
