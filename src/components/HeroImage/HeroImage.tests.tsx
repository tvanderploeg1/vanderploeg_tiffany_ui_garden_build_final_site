import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  test('renders the component and is visible', () => {
    render(<HeroImage>Test</HeroImage>);
    const element = screen.getByTestId('component-name');
    expect(element).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<HeroImage disabled>Test</HeroImage>);
    const element = screen.getByTestId('component-name');
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});
