import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App without crashing', async () => {
  render(<App />);
  const elements = await screen.findAllByText(/Trent Breneman/i);
  expect(elements.length).toBeGreaterThan(0);
});
