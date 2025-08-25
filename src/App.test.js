import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('Renders the main page with the restaurant name', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const titleElements = screen.getAllByText(/Little Lemon/i);
  expect(titleElements.length).toBeGreaterThan(0);
});
