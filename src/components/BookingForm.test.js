import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm.js';

// Mock functions to pass as props
const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

describe('BookingForm', () => {
  test('Renders the "Choose date" label in the BookingForm', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
  });

  // New tests for HTML5 validation attributes
  test('HTML5 validation attributes are present for the date input', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toBeRequired();
  });

  test('HTML5 validation attributes are present for the time select', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    const timeSelect = screen.getByLabelText("Choose time");
    expect(timeSelect).toHaveAttribute('id', 'res-time');
    expect(timeSelect).toBeRequired();
  });

  test('HTML5 validation attributes are present for the guests input', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toBeRequired();
  });

  // New tests for form validation logic
  test('Submit button is disabled when the form is invalid', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    const submitButton = screen.getByText("Make Your Reservation");
    expect(submitButton).toBeDisabled();
  });

  test('Submit button is enabled when the form is valid', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    const dateInput = screen.getByLabelText("Choose date");
    const guestsInput = screen.getByLabelText("Number of guests");
    const submitButton = screen.getByText("Make Your Reservation");

    // Simulate valid input
    fireEvent.change(dateInput, { target: { value: '2025-01-01' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });

    expect(submitButton).toBeEnabled();
  });

  test('Form submission is handled correctly when form is valid', () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    const dateInput = screen.getByLabelText("Choose date");
    const guestsInput = screen.getByLabelText("Number of guests");
    const submitButton = screen.getByText("Make Your Reservation");

    // Simulate valid input
    fireEvent.change(dateInput, { target: { value: '2025-01-01' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });

    // Submit the form
    fireEvent.click(submitButton);

    // Check if the submitForm function was called
    expect(mockSubmitForm).toHaveBeenCalled();
  });
});