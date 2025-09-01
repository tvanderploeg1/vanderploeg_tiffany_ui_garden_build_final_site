import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableCell from './TableCell';

describe('TableCell Component', () => {
  test('renders the component and is visible', () => {
    render(<TableCell>Test</TableCell>);
    const element = screen.getByTestId('component-name');
    expect(element).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<TableCell disabled>Test</TableCell>);
    const element = screen.getByTestId('component-name');
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});
