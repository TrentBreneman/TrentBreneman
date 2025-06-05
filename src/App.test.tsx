import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Trent Breneman title', () => { // Updated test description
  render(<App />);
  const titleElement = screen.getByText(/Trent Breneman/i); // Updated to look for your name
  expect(titleElement).toBeInTheDocument();
});