import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledRadioButton = styled.label<RadioButtonProps>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  user-select: none;

  input[type='radio'] {
    margin-right: 8px;
  }

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#cccccc' : '#f8f9fa')};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 10px;
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledRadioButton
      disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="component-name"
    >
      <input type="radio" disabled={disabled} />
      {children}
    </StyledRadioButton>
  );
};

export default RadioButton;
