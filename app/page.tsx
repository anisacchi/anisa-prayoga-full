import { Hero } from '@/components';

export default function Home() {
  return (
    <div className='w-full h-screen p-6 flex flex-col justify-center items-center text-center'>
      <p className='font-light mb-8'>Wedding Invitation</p>

      <Hero />

      <h1 className='text-4xl my-3 font-greatVibes'>
        Anisa<span className='text-lg mx-2'>&</span>Prayoga
      </h1>

      <p className='text-sm mt-4'>
        Enter <span className='text-maroon-dark'>your invitation link</span> to
        view the details 🤗
      </p>
    </div>
  );
}
