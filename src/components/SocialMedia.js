import React from 'react';
import StarryBackground from './StarryBackground';

const socialMediaStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
  fontSize: 'clamp(24px, 4vw, 32px)',
  color: 'white',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '8px',
  margin: '10px 0',
}

const socialLinks = [
  {
    name: 'Spotify',
    color: '#1DB954',
    gradient: 'linear-gradient(45deg, #1DB954, #1ed760, #1DB954)',
    backgroundSize: '200% 200%',
    url: 'https://open.spotify.com/playlist/6CQAM7n5Obb62ozHv2i4WZ?si=9105943ade1e4804'
  },
  {
    name: 'Tik Tok',
    gradient: 'linear-gradient(45deg, #00f2ea, #ff0050, #00f2ea)',
    backgroundSize: '200% 200%',
    url: 'https://www.tiktok.com/@seventeendiamonds'
  },
  {
    name: 'Instagram',
    gradient: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888, #f09433)',
    backgroundSize: '300% 300%',
    url: 'https://www.instagram.com/seventeendiamonds17/'
  },
  {
    name: 'YouTube',
    gradient: 'linear-gradient(45deg, #FF0000, #FF2D2D, #FF0000)',
    backgroundSize: '200% 200%',
    url: 'https://www.youtube.com/@17Diamonds'
  },
];

const SocialMediaLink = ({ name, gradient, backgroundSize, url }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div
      data-aos="fade-up"
      onClick={handleClick}
      style={{
        ...socialMediaStyle,
        cursor: 'pointer',
        ':hover': {
          background: gradient,
          transform: 'translateX(10px)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
          animation: 'gradientAnimation 3s ease infinite'
        }
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = gradient;
        e.currentTarget.style.backgroundSize = backgroundSize;
        e.currentTarget.style.transform = 'translateX(10px)';
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        e.currentTarget.style.animation = 'gradientAnimation 3s ease infinite';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.transform = 'translateX(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.animation = 'none';
      }}
    >
      <span>{name}</span>
      <span 
        style={{
          fontSize: '28px',
          opacity: '0.8',
          transform: 'translateY(2px)',
          transition: 'all 0.3s ease',
        }}
      >
        ⟶
      </span>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <section id="social-media" style={{
      padding: '100px 20px',
      background: '#000000',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <StarryBackground />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h1 
          data-aos="fade-up"
          style={{
            fontSize: 'clamp(40px, 8vw, 80px)',
            marginBottom: '60px',
            textAlign: 'center'
          }}
        >
          Our social media
        </h1>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {socialLinks.map((link, index) => (
            <SocialMediaLink 
              key={link.name}
              name={link.name}
              gradient={link.gradient}
              backgroundSize={link.backgroundSize}
              url={link.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Pridėkite šį stilių į jūsų CSS failą
const style = document.createElement('style');
style.textContent = `
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
document.head.appendChild(style);

export default SocialMedia;