import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  test('renders the component and is visible', () => {
    render(<Dropdown>Test</Dropdown>);
    const element = screen.getByTestId('component-name');
    expect(element).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Dropdown disabled>Test</Dropdown>);
    const element = screen.getByTestId('component-name');
    expect(element).toHaveStyle('background-color: #cccccc');
  });
});
