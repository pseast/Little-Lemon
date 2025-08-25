import React, { useState } from 'react';

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    if (typeof window.fetchAPI === 'function') {
      dispatch({ type: 'UPDATE_TIMES', payload: newDate });
    } else {
      console.warn("⚠️ Tried to update times but fetchAPI not loaded yet");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  const inputStyles =
    "w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4CE14]";

  return (
    <section className="py-12">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-[#495E57] text-center mb-8">
          Book a Table
        </h2>
        {/* Add the onSubmit handler to the form */}
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="res-date" className="block font-bold text-gray-700 mb-2">
              Choose date
            </label>
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={handleDateChange}
              className={inputStyles}
            />
          </div>
          <div>
            <label htmlFor="res-time" className="block font-bold text-gray-700 mb-2">
              Choose time
            </label>
            <select
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={inputStyles}
              disabled={availableTimes.length === 0}
            >
              {availableTimes.length > 0 ? (
                availableTimes.map((timeOption) => (
                  <option key={timeOption}>{timeOption}</option>
                ))
              ) : (
                <option>Loading times...</option>
              )}
            </select>
          </div>
          <div>
            <label htmlFor="guests" className="block font-bold text-gray-700 mb-2">
              Number of guests
            </label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className={inputStyles}
            />
          </div>
          <div>
            <label htmlFor="occasion" className="block font-bold text-gray-700 mb-2">
              Occasion
            </label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className={inputStyles}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <input
            type="submit"
            value="Make Your Reservation"
            className="bg-[#F4CE14] text-[#495E57] font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300 cursor-pointer"
          />
        </form>
      </div>
    </section>
  );
}
