import React from 'react';

const Navigation = ({ onNavigate }) => {
  // This handler calls onNavigate with the sectionId or falls back to local scrolling.
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Blur backdrop */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'rgba(0,0,0,0.3)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          zIndex: 999,
        }}
      />
      
      {/* Navigation content */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          padding: '20px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'transparent',
          zIndex: 1000,
        }}
      >
        <a
          href="/"
          className="hover-bright text-gradient"
          style={{
            fontSize: '24px',
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          17Diamonds
        </a>

        <div style={{ display: 'flex', gap: '30px' }}>
          {['HOME', 'RELEASES', 'ACHIEVEMENTS', 'ARTISTS', 'SOCIAL MEDIA', 'PLAYLISTS', 'ABOUT', 'DEMO DROP'].map((item, index) => {
            const sectionId = item.toLowerCase().replace(/ /g, '-');
            return (
              <a
                key={item}
                href="/"
                onClick={(e) => handleLinkClick(e, sectionId)}
                className="hover-bright neon-glow"
                data-aos="fade-down"
                data-aos-delay={index * 100}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  letterSpacing: '1px',
                  position: 'relative',
                  padding: '5px 0',
                  cursor: 'pointer'
                }}
              >
                {item}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
