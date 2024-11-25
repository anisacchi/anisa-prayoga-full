import {
  Closing,
  Couple,
  Event,
  Gallery,
  Home,
  Map,
  Navigation,
  Quotes,
  Story,
  Wishes,
} from '@/components/pages';
import React from 'react';

export default function DetailsPage() {
  return (
    <>
      <Navigation />

      <section id='home' data-index='0'>
        <Home />
        <Quotes />
      </section>

      <section id='couple' data-index='1'>
        <Couple />
      </section>

      <section
        id='schedule'
        data-index='2'
        className='bg-maroon-dark bg-batik-transparent bg-cover bg-repeat bg-top rounded-lg pb-16'
      >
        <Event />
        <Map />
      </section>

      <section id='moments' data-index='3' className='mb-5'>
        <Story />
        <Gallery />
      </section>

      <section id='wishes' data-index='4'>
        <Wishes />
        <Closing />
      </section>
    </>
  );
}
