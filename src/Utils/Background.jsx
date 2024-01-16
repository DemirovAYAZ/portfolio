import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const twinkling = keyframes`
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
`;

const Star = styled.div.attrs((props) => ({
  style: {
    width: `${props.size}px`,
    height: `${props.size}px`,
  },
}))`
  position: absolute;
  background-color: white;
  border-radius: 50%;
  animation: ${twinkling} ${(props) => props.animationDuration || 1}s infinite;
  opacity: 0.8;
`;

const BackgroundContainer = styled.div`
  background-color: #1B1231;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const generateRandomStars = (numStars) => {
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    const size = Math.random() * 2;
    const positionX = Math.random() * 100;
    const positionY = Math.random() * 100;

    stars.push({
      size,
      positionX,
      positionY,
    });
  }

  return stars;
};

const Background = ({ numStars, animationDuration }) => {
  useEffect(() => {
    const stars = generateRandomStars(numStars);

    stars.forEach((star, index) => {
      const starElement = document.getElementById(`star-${index}`);

      if (starElement) {
        starElement.style.left = `${star.positionX}%`;
        starElement.style.top = `${star.positionY}%`;
      }
    });
  }, [numStars]);

  return (
    <BackgroundContainer>
      {Array.from({ length: numStars }, (_, index) => (
        <Star key={index} id={`star-${index}`} size={Math.random() * 2} animationDuration={animationDuration} />
      ))}
    </BackgroundContainer>
  );
};

export default Background;
