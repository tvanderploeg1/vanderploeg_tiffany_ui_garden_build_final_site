import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableFooter from './TableFooter';

describe('TableFooter Component', () => {
  test('renders the component and is visible', () => {
    render(<TableFooter>Test</TableFooter>);
    const element = screen.getByTestId('component-name');
    expect(element).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<TableFooter disabled>Test</TableFooter>);
    const element = screen.getByTestId('component-name');
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});
