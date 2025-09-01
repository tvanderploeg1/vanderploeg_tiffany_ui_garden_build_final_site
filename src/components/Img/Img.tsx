import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<ImgProps>`
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || 'transparent'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  max-width: 200px;
  height: auto;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  @media (max-width: 768px) {
    max-width: 150px;
  }
`;

const Img: React.FC<ImgProps> = ({
  disabled = false,
  backgroundColor,
  src = 'https://via.placeholder.com/200x150',
  alt = 'Image',
}) => {
  return (
    <StyledImg
      disabled={disabled}
      backgroundColor={backgroundColor}
      src={src}
      alt={alt}
      data-testid="component-name"
    />
  );
};

export default Img;
