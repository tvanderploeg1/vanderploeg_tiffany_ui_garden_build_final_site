import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('renders navigation', () => {
  render(<App />);
  const homeLink = screen.getByText('Home');
  expect(homeLink).toBeInTheDocument();
});

test('renders app container', () => {
  render(<App />);
  const elements = screen.getAllByText(/Tiffany/i);
  expect(elements.length).toBeGreaterThan(0);
});
