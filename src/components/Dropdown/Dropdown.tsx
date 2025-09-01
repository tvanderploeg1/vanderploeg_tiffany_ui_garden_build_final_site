import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledDropdown = styled.select<DropdownProps>`
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 150px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  disabled = false,
  backgroundColor,
  options = ['Option 1', 'Option 2', 'Option 3'],
}) => {
  return (
    <StyledDropdown
      disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="component-name"
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledDropdown>
  );
};

export default Dropdown;
