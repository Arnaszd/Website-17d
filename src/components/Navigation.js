import React, { useState } from 'react';

const Navigation = ({ onNavigate }) => {
  // Pridedame state meniu atidarymui/uždarymui
  const [menuOpen, setMenuOpen] = useState(false);

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
    // Uždarome meniu po paspaudimo
    setMenuOpen(false);
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
          padding: '20px',
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

        {/* Hamburger mygtukas mobiliesiems */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'block',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '5px',
            zIndex: 1001
          }}
          className="mobile-menu-button"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Desktopo navigacija - paslėpta mobiliajame režime */}
        <div 
          style={{ 
            display: 'none',
            gap: '30px'
          }}
          className="desktop-menu"
        >
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

        {/* Mobilusis meniu - pilno ekrano */}
        <div 
          style={{
            position: 'fixed',
            top: menuOpen ? '0' : '-100%',
            left: 0,
            right: 0,
            height: '100vh',
            background: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'top 0.3s ease',
            zIndex: 1000,
            padding: '20px'
          }}
          className="mobile-menu"
        >
          {['HOME', 'RELEASES', 'ACHIEVEMENTS', 'ARTISTS', 'SOCIAL MEDIA', 'PLAYLISTS', 'ABOUT', 'DEMO DROP'].map((item, index) => {
            const sectionId = item.toLowerCase().replace(/ /g, '-');
            return (
              <a
                key={item}
                href="/"
                onClick={(e) => handleLinkClick(e, sectionId)}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '18px',
                  letterSpacing: '1px',
                  padding: '15px 0',
                  cursor: 'pointer',
                  textAlign: 'center',
                  width: '100%',
                  borderBottom: index < 7 ? '1px solid rgba(255,255,255,0.1)' : 'none'
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
