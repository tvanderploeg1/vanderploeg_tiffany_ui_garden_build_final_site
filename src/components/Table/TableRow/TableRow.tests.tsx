import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableRow from './TableRow';

describe('TableRow Component', () => {
  test('renders the component and is visible', () => {
    render(<TableRow>Test</TableRow>);
    const element = screen.getByTestId('component-name');
    expect(element).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<TableRow disabled>Test</TableRow>);
    const element = screen.getByTestId('component-name');
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});
