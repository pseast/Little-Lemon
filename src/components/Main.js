import React, { useReducer } from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import BookingForm from './BookingForm';

export const updateTimes = (state, action) => {
  // This is placeholder logic. In a real app, you would update the
  // available times based on the date in action.payload.
  return state;
};

export const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <Hero />
      <div className="px-8 md:px-16 lg:px-32 max-w-screen-xl mx-auto">
        <Specials />
        {/* FIX: Ensure this is capitalized as <BookingForm /> */}
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
        />
        <Testimonials />
        <About />
      </div>
    </main>
  );
}
