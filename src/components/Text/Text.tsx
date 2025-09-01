import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.div<TextProps>`
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#ffffff'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Text: React.FC<TextProps> = ({
  children,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledText
      disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="component-name"
    >
      {children}
    </StyledText>
  );
};

export default Text;
