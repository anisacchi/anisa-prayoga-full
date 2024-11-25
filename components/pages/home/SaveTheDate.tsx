import React from 'react';
import { Button } from '@/components';
import { Calendar } from '@/components/icons';
import Link from 'next/link';

const SaveTheDate = () => {
  const title = 'Wedding of Anisa %26 Prayoga';
  const dates = '20241228T010000Z/20241228T083000Z';
  const details = 'Join us for the wedding celebration';
  const location =
    'Jl. Veteran No.17, Ketawanggede, Kec. Lowokwaru, Kota Malang';

  return (
    <Link
      href={`https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`}
      target='_blank'
      rel='noopener noreferrer'
      className='z-20'
    >
      <Button variant='primary' shape='rectangle' classname='z-50'>
        <Calendar width={20} height={20} className='fill-white' />
        <span>Save the Date</span>
      </Button>
    </Link>
  );
};

export default SaveTheDate;
