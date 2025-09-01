import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
  test('renders the component and is visible', () => {
    render(<Card>Test</Card>);
    const element = screen.getByTestId('component-name');
    expect(element).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Card disabled>Test</Card>);
    const element = screen.getByTestId('component-name');
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});
