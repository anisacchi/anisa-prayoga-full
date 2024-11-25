'use client';

import { Scale } from '@/components/animations';
import React, { useEffect, useState } from 'react';

interface CountdownProps {
  weddingDate: string; // YYYY-MM-DDTHH:mm:ss
}

const Countdown: React.FC<CountdownProps> = ({ weddingDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(weddingDate) - +new Date();

    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <div className='w-full p-4 flex gap-2 justify-around'>
      <Scale delay={0.1} once={false}>
        <div className='w-full p-3 aspect-square flex flex-col justify-center items-center gap-1 border border-maroon-dark rounded-lg'>
          <span className='text-maroon-dark font-great-vibes text-lg'>
            {timeLeft.days}
          </span>
					<span className='text-[10px] text-maroon-dark'>Days</span>
        </div>
      </Scale>
			
			<Scale delay={0.2} once={false}>
        <div className='w-full p-3 aspect-square flex flex-col justify-center items-center gap-1 border border-maroon-dark rounded-lg'>
          <span className='text-maroon-dark font-great-vibes text-lg'>
            {timeLeft.hours}
          </span>
					<span className='text-[10px] text-maroon-dark'>Hours</span>
        </div>
      </Scale>

			<Scale delay={0.15} once={false}>
        <div className='w-full p-3 aspect-square flex flex-col justify-center items-center gap-1 border border-maroon-dark rounded-lg'>
          <span className='text-maroon-dark font-great-vibes text-lg'>
            {timeLeft.minutes}
          </span>
					<span className='text-[10px] text-maroon-dark'>Minutes</span>
        </div>
      </Scale>

			<Scale delay={0.25} once={false}>
        <div className='w-full p-3 aspect-square flex flex-col justify-center items-center gap-1 border border-maroon-dark rounded-lg'>
          <span className='text-maroon-dark font-great-vibes text-lg'>
            {timeLeft.seconds}
          </span>
					<span className='text-[10px] text-maroon-dark'>Seconds</span>
        </div>
      </Scale>
    </div>
  );
};

export default Countdown;
