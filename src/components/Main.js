import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

export default function Main() {
  return (
    <main>
      <Hero />
      <div className="px-8 md:px-16 lg:px-32">
        <Specials />
        <Testimonials />
        <About />
      </div>
    </main>
  );
}