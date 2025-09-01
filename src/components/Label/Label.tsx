import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.div<LabelProps>`
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Label: React.FC<LabelProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledLabel
      disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="component-name"
    >
      {children}
    </StyledLabel>
  );
};

export default Label;
