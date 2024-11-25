import { Hero } from '@/components';
import { Scale } from '@/components/animations';
import { BottomFrame, TopFrame } from '@/components/layout';

export default function HomePage() {
  return (
    <div className='relative w-full h-dvh'>
      <TopFrame />

      <div className='h-dvh flex flex-col justify-center items-center text-center'>
        <Scale delay={0.5} className='flex-col'>
          <p className='font-light mb-8'>Wedding Invitation</p>

          <Hero />

          <h1 className='text-4xl my-3 font-great-vibes'>
            Anisa <span className='text-lg mx-2'>&</span> Prayoga
          </h1>

          <p className='text-sm'>
            Enter <span className='text-maroon-dark'>your invitation link</span>{' '}
            to view the details 🤗
          </p>
        </Scale>
      </div>

      <BottomFrame />
    </div>
  );
}
