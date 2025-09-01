import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div<HeroImageProps>`
  position: relative;
  width: 100%;
  height: 300px;
  background-color: ${(props) =>
    props.disabled ? '#cccccc' : props.backgroundColor || '#f0f0f0'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const HeroImg = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const HeroText = styled.div<{ disabled?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => (props.disabled ? '#666' : 'white')};
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 15px;
  }
`;

const HeroImage: React.FC<HeroImageProps> = ({
  children = 'Hero Title',
  disabled = false,
  backgroundColor,
  src = 'https://via.placeholder.com/800x300?text=Hero+Image',
  alt = 'Hero Image',
}) => {
  return (
    <HeroContainer
      disabled={disabled}
      backgroundColor={backgroundColor}
      data-testid="component-name"
    >
      <HeroImg src={src} alt={alt} disabled={disabled} />
      <HeroText disabled={disabled}>{children}</HeroText>
    </HeroContainer>
  );
};

export default HeroImage;
