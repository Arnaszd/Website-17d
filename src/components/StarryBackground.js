import React from 'react';
import styled, { keyframes } from 'styled-components';

const twinkle = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  z-index: 1;
`;

const Star = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: ${twinkle} ${props => props.duration}s infinite;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  animation-delay: ${props => props.delay}s;
`;

const StarryBackground = () => {
  // Sukuriame 100 žvaigždžių su skirtingomis pozicijomis ir animacijos laikais
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: 2 + Math.random() * 3,
    delay: Math.random() * 3
  }));

  return (
    <Background>
      {stars.map(star => (
        <Star
          key={star.id}
          top={star.top}
          left={star.left}
          duration={star.duration}
          delay={star.delay}
        />
      ))}
    </Background>
  );
};

export default StarryBackground; 