import React, { useState, useEffect } from 'react';

const Navigation = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Tikriname ekrano dydį ir nustatome mobilaus režimo būseną
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Patikriname iš karto
    checkIsMobile();
    
    // Pridedame event listener ekrano dydžio pasikeitimams
    window.addEventListener('resize', checkIsMobile);
    
    // Išvalome event listener
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Nuorodos paspaudimo apdorojimas
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

  // Navigacijos elementų sąrašas
  const navItems = ['HOME', 'RELEASES', 'ACHIEVEMENTS', 'ARTISTS', 'SOCIAL MEDIA', 'PLAYLISTS', 'ABOUT', 'DEMO DROP'];

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
        {/* Logotipas */}
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

        {/* Desktopo navigacija - rodoma tik desktopo režime */}
        {!isMobile && (
          <div 
            style={{ 
              display: 'flex',
              gap: '30px' 
            }}
          >
            {navItems.map((item, index) => {
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
        )}

        {/* Hamburger mygtukas - rodomas tik mobiliajame režime */}
        {isMobile && (
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '5px',
              zIndex: 1001
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        )}

        {/* Mobilusis meniu - pilno ekrano */}
        {isMobile && (
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
          >
            {navItems.map((item, index) => {
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
                    borderBottom: index < navItems.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none'
                  }}
                >
                  {item}
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
