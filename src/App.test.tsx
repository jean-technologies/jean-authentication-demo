import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Jean Memory Demo', () => {
  render(<App />);
  const titleElement = screen.getByText(/Jean Memory Demo/i);
  expect(titleElement).toBeInTheDocument();
});
