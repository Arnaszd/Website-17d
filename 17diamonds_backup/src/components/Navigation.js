import React from 'react';

const Navigation = () => {
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

        <div style={{
          display: 'flex',
          gap: '30px',
        }}>
          {['HOME', 'WEEKLY RELEASES', 'PLAYLISTS', 'ARTISTS', 'BOOKING', 'EVENTS', 'ABOUT', 'DEMO DROP'].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
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
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;