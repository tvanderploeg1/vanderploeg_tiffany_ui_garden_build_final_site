import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Tiffany Vanderploeg/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders basic information section', () => {
  render(<App />);
  const basicInfoElement = screen.getByText(/Basic Information/i);
  expect(basicInfoElement).toBeInTheDocument();
});

test('renders work section', () => {
  render(<App />);
  const workElement = screen.getByText(/Component Library/i);
  expect(workElement).toBeInTheDocument();
});

test('renders skills section', () => {
  render(<App />);
  const skillsElement = screen.getByText(/Skills/i);
  expect(skillsElement).toBeInTheDocument();
});

test('renders resources section', () => {
  render(<App />);
  const resourcesElement = screen.getByText(/Resources/i);
  expect(resourcesElement).toBeInTheDocument();
});
