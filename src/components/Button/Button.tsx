import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#007bff'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.disabled ? '#666666' : '#ffffff')};
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#cccccc' : '#0056b3')};
  }

  &:active {
    transform: ${(props) => (props.disabled ? 'none' : 'translateY(1px)')};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
  }
`;

const Button: React.FC<ButtonProps> = ({
  children = 'Button',
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="component-name"
    >
      {children}
    </StyledButton>
  );
};

export default Button;
