import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableHeader from './TableHeader';

describe('TableHeader Component', () => {
  test('renders the component and is visible', () => {
    render(<TableHeader>Test</TableHeader>);
    const element = screen.getByTestId('component-name');
    expect(element).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<TableHeader disabled>Test</TableHeader>);
    const element = screen.getByTestId('component-name');
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});
