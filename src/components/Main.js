import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import BookingForm from './BookingForm';

// This reducer function now only needs to handle the UPDATE_TIMES action,
// as the initial state is handled by initializeTimes.
export const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    // Check if the fetchAPI function is available before calling it
    if (typeof window.fetchAPI === 'function') {
      return window.fetchAPI(new Date(action.payload));
    }
  }
  return state; // Return current state if no action matches
};

// This function now correctly fetches the initial times for today's date.
export const initializeTimes = () => {
  // Check if the fetchAPI function is available
  if (typeof window.fetchAPI === 'function') {
    return window.fetchAPI(new Date());
  }
  return []; // Return an empty array as a fallback
};

export default function Main() {
  // The useReducer hook now correctly gets the initial times from initializeTimes
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    // Check if the submitAPI function is available
    if (typeof window.submitAPI === 'function' && window.submitAPI(formData)) {
      navigate('/confirmed-booking');
    }
  };

  // The useEffect hook is no longer needed here for initialization.

  return (
    <main>
      <Hero />
      <div className="px-8 md:px-16 lg:px-32 max-w-screen-xl mx-auto">
        <Specials />
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
        <Testimonials />
        <About />
      </div>
    </main>
  );
}
