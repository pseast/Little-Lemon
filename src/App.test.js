import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the main page with the restaurant name', () => {
  render(<App />);
  // We're looking for all instances of "Little Lemon"
  const titleElements = screen.getAllByText(/Little Lemon/i);
  // The test will pass if at least one element with this text is found
  expect(titleElements.length).toBeGreaterThan(0);
});
