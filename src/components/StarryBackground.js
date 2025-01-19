import React, { useEffect, useRef } from 'react';
import '../styles/StarryBackground.css';

const StarryBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const starCount = 150;

    container.innerHTML = '';

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      const size = 1 + Math.random() * 2;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      const duration = 1 + Math.random() * 3;
      star.style.setProperty('--twinkle-duration', `${duration}s`);
      star.style.setProperty('--star-opacity', '1');
      star.style.animationDelay = `${Math.random() * 3}s`;
      
      container.appendChild(star);
    }
  }, []);

  return <div ref={containerRef} className="starry-background" />;
};

export default StarryBackground; 