import React from 'react';
import StarryBackground from './StarryBackground';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#000000',
      color: 'white',
      padding: '80px 0 20px',
      borderTop: '2px solid rgba(255,255,255,0.1)',
      position: 'relative',
      overflow: 'hidden',
      marginTop: '60px',
      boxShadow: 'inset 0 2px 20px rgba(255,255,255,0.05)'
    }}>
      <StarryBackground />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '80px',
            marginBottom: '80px',
            width: '100%',
            justifyItems: 'center',
            textAlign: 'center',
            padding: '20px',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)'
          }}>
            {/* Company Info */}
            <div data-aos="fade-up" data-aos-delay="0">
              <h3 style={{ 
                marginBottom: '25px', 
                fontSize: '28px',
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #fff, rgba(255,255,255,0.7))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>17Diamonds</h3>
              <div style={{ opacity: 0.8, lineHeight: '1.8', fontSize: '16px' }}>
                <p style={{ marginBottom: '8px' }}>Home of techno.</p>
                <p style={{ 
                  fontSize: '14px',
                  opacity: 0.9,
                  fontStyle: 'italic'
                }}>Based in Lithuania</p>
              </div>
              <div style={{ 
                display: 'flex', 
                gap: '20px',
                marginTop: '25px',
                justifyContent: 'center'
              }}>
                <a 
                  href="https://spotify.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    opacity: 0.7,
                    transition: 'opacity 0.3s ease',
                    ':hover': { opacity: 1 }
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    opacity: 0.7,
                    transition: 'opacity 0.3s ease',
                    ':hover': { opacity: 1 }
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h4 style={{ 
                marginBottom: '25px', 
                fontSize: '20px',
                fontWeight: 'bold',
                letterSpacing: '1px'
              }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Home', 'Weekly Releases', 'Playlists', 'Artists', 'Events'].map((item) => (
                  <li key={item} style={{ marginBottom: '12px' }}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="hover-bright"
                      style={{ 
                        color: 'white', 
                        textDecoration: 'none',
                        opacity: 0.8,
                        fontSize: '16px',
                        transition: 'opacity 0.3s ease'
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 style={{ 
                marginBottom: '25px', 
                fontSize: '20px',
                fontWeight: 'bold',
                letterSpacing: '1px'
              }}>Contact Us</h4>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                opacity: 0.8
              }}>
                <li style={{ marginBottom: '12px', fontSize: '16px' }}>Email: info@17diamonds.com</li>
                <li style={{ marginBottom: '12px', fontSize: '16px' }}>Instagram: @seventeendiamonds17</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '20px',
              width: '100%',
              textAlign: 'center'
            }}
          >
            <p style={{ opacity: 0.6, fontSize: '14px' }}>
              © 2024 17Diamonds. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 