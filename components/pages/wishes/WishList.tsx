'use client';

import { Scale, Slide, Wagging } from '@/components/animations';
import { database } from '@/lib/firebase';
import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { format, formatDistanceToNowStrict } from 'date-fns';
import { id } from 'date-fns/locale';
import Image from 'next/image';
import { Icon } from '@/public/images';

const WishList = () => {
  const [wishes, setWishes] = useState<
    { name: string; wish: string; createdAt: number }[]
  >([]);
  const [currentTime, setCurrentTime] = useState(Date.now());

  // Ambil ucapan
  useEffect(() => {
    const wishesRef = ref(database, 'wishes');
    const unsubscribe = onValue(wishesRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const parsedData = Object.values(data) as {
          name: string;
          wish: string;
          createdAt: number;
        }[];

        const sortedData = parsedData.sort((a, b) => b.createdAt - a.createdAt);
        setWishes(sortedData);
      }
    });

    return () => unsubscribe();
  }, []);

  // Update waktu tiap 1 menit
  useEffect(() => {
    const update = setInterval(() => {
      setCurrentTime(Date.now());
    }, 60000);

    return () => clearInterval(update);
  }, []);

  const renderTime = (createdAt: number) => {
    const differenceInHours = (currentTime - createdAt) / (1000 * 60 * 60);
    if (differenceInHours >= 24) {
      return format(new Date(createdAt), 'dd MMM yyyy', { locale: id });
    }
    return formatDistanceToNowStrict(new Date(createdAt), {
      addSuffix: true,
      locale: id,
    });
  };

  const getColor = (index: number) => {
    const colors = [
      '#4b8f29',
      '#c95c8d',
      '#d6b014',
      '#357e98',
      '#b16f45',
      '#6b4e3f',
      '#aa6e39',
      '#8f5c6f',
      '#4a6f74',
      '#c98a29',
    ];
    return colors[index % colors.length];
  };
  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className='w-full h-[50vh] mt-5 px-4 flex flex-col gap-2 rounded-lg border border-maroon-dark/50 overflow-y-scroll custom-scrollbar'>
      {wishes.length === 0 ? (
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <Scale className='flex-col'>
            <Wagging amplitude={6} duration={5} origin='center'>
              <Image src={Icon} width={200} height={200} alt='Icon' />
            </Wagging>

            <p className='text-center text-sm text-gray/80'>
              Jadi orang pertama yang mengirimkan ucapan kepada kami.
            </p>
          </Scale>
        </div>
      ) : (
        wishes.map((wish, index) => (
          <Slide direction='down' key={`wish-${index}`}>
            <div className='w-full flex gap-2 py-4 border-b border-b-maroon-dark/10'>
              <div
                className='w-8 h-8 flex justify-center items-center rounded-full aspect-square shrink-0'
                style={{ backgroundColor: getColor(index) }}
              >
                <span className='font-medium text-white text-sm'>
                  {getInitial(wish.name)}
                </span>
              </div>

              <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                  <p className='text-sm font-semibold'>{wish.name}</p>

                  <span className='text-sm text-gray'>•</span>

                  <p className='text-sm text-gray font-light'>
                    {renderTime(wish.createdAt)}
                  </p>
                </div>
                <p className='text-sm'>{wish.wish}</p>
              </div>
            </div>
          </Slide>
        ))
      )}
    </div>
  );
};

export default WishList;
