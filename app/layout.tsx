import type { Metadata } from 'next';
import { Caveat, Delius, Great_Vibes } from 'next/font/google';
import './globals.css';
import { AnimationWrap } from '@/components/layout';
import { MusicProvider } from '@/context/MusicContext';
import { MusicPlayer } from '@/components';

const caveat = Caveat({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat',
});

const delius = Delius({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-delius',
});

const greatVibes = Great_Vibes({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-great-vibes',
});

export const metadata: Metadata = {
  title: 'Anisa & Prayoga',
  description: 'Undangan pernikahan Anisa dan Prayoga tanggal 28 Desember 2024',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${caveat.variable} ${delius.variable} ${greatVibes.variable} antialiased`}
      >
        <main className='relative h-screen w-full max-w-md overflow-y-scroll overflow-x-hidden rounded-lg bg-white shadow-lg hide-scrollbar'>
          <MusicProvider>
            <AnimationWrap>
              <MusicPlayer />
              {children}
            </AnimationWrap>
          </MusicProvider>
        </main>
      </body>
    </html>
  );
}
