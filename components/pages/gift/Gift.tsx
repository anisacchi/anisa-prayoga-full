import { Scale, Typing, Wagging } from '@/components/animations';
import { BRI, BSI, Bunga2 } from '@/public/images';
import Image from 'next/image';
import React from 'react';
import BankCard from './BankCard';

const Gift = () => {
  const bankAccounts = [
    {
      bankName: 'Bank BSI',
      accountHolder: 'Anisa Permatasari',
      accountNumber: '7280160339',
      logoSrc: BSI,
    },
    {
      bankName: 'Bank BRI',
      accountHolder: 'Prayoga Febriandika',
      accountNumber: '185701001299505',
      logoSrc: BRI,
    },
  ];

  return (
    <div className='relative flex flex-col justify-center items-center pt-[42px] pb-5 px-5'>
      <Wagging
        duration={6}
        amplitude={6}
        origin='top right'
        className='absolute z-20 -top-6 -right-6 w-[100px] h-[100px]'
      >
        <Image
          src={Bunga2}
          alt='Bunga'
          width={100}
          height={100}
          className='scale-y-[-1] rotate-12'
        />
      </Wagging>

      <Typing
        text='Love Gift'
        className='!text-3xl !font-great-vibes !text-white'
        once={false}
      />

      <Scale threshold={1} className='mt-4 px-4' once={false}>
        <p className='text-xs text-white/90 text-center'>
          Kehadiran dan doa Saudara/i sudah lebih dari cukup bagi kami. Namun,
          bila ada yang ingin berbagi kasih dalam bentuk hadiah, dapat melalui
          tautan di bawah ini. Terima kasih banyak 🤗❤
        </p>
      </Scale>

      {bankAccounts.map((bankAccount, index) => (
        <BankCard bankAccount={bankAccount} key={`bank-account-${index}`} />
      ))}
    </div>
  );
};

export default Gift;
