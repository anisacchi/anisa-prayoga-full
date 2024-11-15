import type { Metadata } from 'next';
import { Delius, Caveat, Great_Vibes } from 'next/font/google';
import './globals.css';

const delius = Delius({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-delius',
});

const caveat = Caveat({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-caveat',
});

const greatVibes = Great_Vibes({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-great-vibes',
});

export const metadata: Metadata = {
  title: 'Anisa & Prayoga',
  description:
    'Undangan pernikahan Anisa dan Prayoga tanggal 28 Desember 2024.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='id'>
      <body
        className={`${delius.variable} ${caveat.variable} ${greatVibes.variable} h-screen flex justify-center antialiased`}
      >
        <main className='relative h-screen w-full max-w-md overflow-y-scroll overflow-x-hidden rounded-lg bg-white shadow-lg'>
          {children}
        </main>
      </body>
    </html>
  );
}
