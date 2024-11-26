'use client';

import React from 'react';
import { notFound, useRouter } from 'next/navigation';
import { useMusic } from '@/context/MusicContext';
import { getGuest } from '@/lib/guest';
import { Button, Hero } from '@/components';
import { Scale, Typing } from '@/components/animations';
import { Envelope } from '@/components/icons';
import { BottomFrame, TopFrame } from '@/components/layout';

interface GuestProps {
  params: {
    guest: string;
  };
}

const GuestPage: React.FC<GuestProps> = ({ params }) => {
  const guest = getGuest(params.guest);
  const router = useRouter();
  const { handlePlayMusic } = useMusic();

  const openInvitationHandler = () => {
    handlePlayMusic();
    router.push(`${guest?.url}/details`);
  };

  if (!guest) {
    notFound();
  }

  return (
    <div className='relative w-full h-dvh'>
      <TopFrame />

      <div className='w-full h-dvh p-6 flex flex-col justify-center items-center text-center'>
        <Scale delay={1.2}>
          <p className='font-light mb-8'>Wedding Invitation</p>
        </Scale>

        <Scale delay={1.1}>
          <Hero />
        </Scale>

        <Scale delay={1}>
          <h1 className='text-4xl my-3 font-great-vibes'>
            Anisa <span className='text-lg mx-2'>&</span> Prayoga
          </h1>
        </Scale>

        <Scale delay={0.9} className='flex flex-col gap-1'>
          <p className='text-sm'>With great joy, we invite</p>

          <div className='w-2/3 border-b-2 border-maroon-dark'>
            <Typing text={guest.name} />
          </div>

          <p className='text-sm'>to celebrate this special moment with us 😊</p>
        </Scale>

        <Scale delay={0.6} className='mt-8'>
          <Button
            variant='primary'
            shape='rectangle'
            onClick={openInvitationHandler}
          >
            <Envelope width={20} height={20} />
            <span className='text-sm'>Open Invitation</span>
          </Button>
        </Scale>
      </div>

      <BottomFrame />
    </div>
  );
};

export default GuestPage;
