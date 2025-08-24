import React, { useState } from 'react';

export default function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: 'UPDATE_TIMES', payload: newDate });
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px', margin: '2rem auto' }}>
      <label htmlFor="res-date">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date}
        onChange={handleDateChange} // Use the new handler
      />
      
      <label htmlFor="res-time">Choose time</label>
      <select 
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {/* Map over the availableTimes prop to create options */}
        {availableTimes.map(timeOption => 
          <option key={timeOption}>{timeOption}</option>
        )}
      </select>
      
      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        placeholder="1" 
        min="1" 
        max="10" 
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      
      <label htmlFor="occasion">Occasion</label>
      <select 
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}