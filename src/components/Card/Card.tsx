import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<CardProps>`
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 300px;

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 14px;
  }
`;

const Card: React.FC<CardProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledCard
      disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="component-name"
    >
      {children}
    </StyledCard>
  );
};

export default Card;
