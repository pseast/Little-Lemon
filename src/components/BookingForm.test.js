import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm.js';

test('Renders the "Choose date" label in the BookingForm', () => {
    const mockAvailableTimes = ['17:00', '18:00'];
    const mockDispatch = jest.fn(); // Creates a mock function for the test.

    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    
    const labelElement = screen.getByText("Choose date");
    
    expect(labelElement).toBeInTheDocument();
});
