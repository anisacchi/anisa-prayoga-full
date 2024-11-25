'use client';

import { Slide } from '@/components/animations';
import { Copy } from '@/components/icons';
import Button from '@/components/sharing/button/Button';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

interface BankCardProps {
  bankAccount: {
    bankName: string;
    accountHolder: string;
    accountNumber: string;
    logoSrc: StaticImageData;
  };
}

const BankCard: React.FC<BankCardProps> = ({ bankAccount }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
  };

  return (
    <Slide direction='right' once={false} threshold={1}>
      <div className='w-full flex flex-col p-5 rounded-lg mt-6 bg-white/90 shadow-md'>
        <Image
          src={bankAccount.logoSrc}
          width={413}
          height={117}
          alt={`${bankAccount.bankName} logo`}
          className='max-w-[300px] h-auto w-auto'
        />

        <div className='flex justify-between items-end'>
          <div className='flex flex-col mt-5'>
            <p className='text-sm'>{bankAccount.accountNumber}</p>
            <p className='text-sm font-semibold'>{bankAccount.accountHolder}</p>
          </div>

          <Button
            shape='rectangle'
            variant='primary'
            onClick={() => copyToClipboard(bankAccount.accountNumber)}
          >
            {copied ? (
              <span>Copied!</span>
            ) : (
              <>
                <Copy width={20} height={20} />
                <span>Copy</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </Slide>
  );
};

export default BankCard;
