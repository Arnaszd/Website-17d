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
  { name: 'Spotify', color: '#1DB954' },
  { name: 'Tik Tok', color: '#ff0050' },
  { name: 'Instagram', color: '#E4405F' },
  { name: 'YouTube', color: '#FF0000' },
];

const SocialMediaLink = ({ name, color }) => {
  return (
    <div
      data-aos="fade-up"
      style={{
        ...socialMediaStyle,
        ':hover': {
          backgroundColor: color,
          transform: 'translateX(10px)',
          boxShadow: `0 10px 20px ${color}40`,
        }
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = color;
        e.currentTarget.style.transform = 'translateX(10px)';
        e.currentTarget.style.boxShadow = `0 10px 20px ${color}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.transform = 'translateX(0)';
        e.currentTarget.style.boxShadow = 'none';
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
    <section style={{
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
              color={link.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;