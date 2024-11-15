import { WelcomeScreen } from '@/components';
import { getGuest } from '@/lib/guest';
import { notFound } from 'next/navigation';

interface guestProps {
  params: {
    guest: string;
  };
}

const GuestPage = ({ params }: guestProps) => {
  const guest = getGuest(params.guest);

  if (!guest) {
    notFound();
  }

  return (
    <div className='w-full h-dvh flex flex-col justify-center items-center'>
      <WelcomeScreen guest={guest.name} />
    </div>
  );
};

export default GuestPage;
