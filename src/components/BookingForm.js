import React, { useState, useEffect } from 'react';

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // State to track if the form is valid
  const [isFormValid, setIsFormValid] = useState(false);

  // Effect to validate the form whenever a field changes
  useEffect(() => {
    const validateForm = () => {
      // Basic validation: check if date is selected and guests are at least 1
      const isDateValid = date !== "";
      const isGuestsValid = guests >= 1;
      setIsFormValid(isDateValid && isGuestsValid);
    };
    validateForm();
  }, [date, guests]);


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
    if (isFormValid) {
        const formData = { date, time, guests, occasion };
        submitForm(formData);
    }
  };

  const inputStyles =
    "w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4CE14]";
  const disabledSubmitStyles = "bg-gray-400 text-gray-600 cursor-not-allowed";
  const enabledSubmitStyles = "bg-[#F4CE14] text-[#495E57] hover:bg-yellow-400 cursor-pointer";

  return (
    <section className="py-12">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-[#495E57] text-center mb-8">
          Book a Table
        </h2>
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
              required // HTML5 validation
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
              required // HTML5 validation
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
              min="1" // HTML5 validation
              max="10" // HTML5 validation
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className={inputStyles}
              required // HTML5 validation
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
              required // HTML5 validation
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>

          <input
            type="submit"
            value="Make Your Reservation"
            className={`font-bold py-3 px-6 rounded-lg transition duration-300 ${isFormValid ? enabledSubmitStyles : disabledSubmitStyles}`}
            disabled={!isFormValid} // Disable button based on form validity
          />
        </form>
      </div>
    </section>
  );
}