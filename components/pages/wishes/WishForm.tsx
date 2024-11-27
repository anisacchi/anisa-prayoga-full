'use client';

import { Button, Toast } from '@/components';
import { database } from '@/lib/firebase';
import { getGuest } from '@/lib/guest';
import { push, ref } from 'firebase/database';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

const WishForm = () => {
  const { guest } = useParams();
  const guestName = getGuest(guest.toString());

  const [wish, setWish] = useState<string>('');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<{
    status: 'success' | 'error';
    text: string;
  } | null>(null);

  const anonymousHandler = () => {
    setIsAnonymous(!isAnonymous);
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const wishesRef = ref(database, 'wishes');
      await push(wishesRef, {
        name: guestName?.name,
        wish,
        createdAt: Date.now(),
      });

      setToast({
        status: 'success',
        text: 'Ucapan berhasil terkirim. Terima kasih.',
      });
      setWish('');
    } catch (error) {
      console.error('Error submitting wish: ', error);
      setToast({
        status: 'error',
        text: 'Maaf, gagal mengirim ucapan. Kami akan sangat berterima kasih jika Anda mau mencobanya kembali.',
      });
    } finally {
      setLoading(false);
    }
  };

  const onClose = () => {
    setToast(null);
  };

  return (
    <>
      {toast && (
        <Toast status={toast.status} text={toast.text} onClose={onClose} />
      )}

      <div className='relative w-full mt-5'>
        <form onSubmit={submitHandler} className='w-full flex flex-col gap-2'>
          <div className='w-full flex flex-col gap-1'>
            <input
              id='name'
              name='name'
              type='text'
              value={guestName?.name}
              disabled={true}
              required
              placeholder='Nama'
              className='w-full px-4 py-2 rounded-lg border outline-none disabled:text-gray/90 disabled:bg-gray/10 disabled:border-maroon-dark/60 text-sm'
            />
          </div>

          <textarea
            id='wish'
            name='wish'
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            placeholder='Ucapan untuk kami...'
            rows={5}
            required
            className='w-full px-4 py-3 bg-white rounded-lg border border-maroon-light outline-none focus:border-maroon-dark transition-all duration-300 ease-in-out text-sm'
          />

          <Button type='submit' variant='primary' shape='rectangle'>
            {loading ? 'Sedang mengirim...' : 'Kirim'}
          </Button>
        </form>
      </div>
    </>
  );
};

export default WishForm;
