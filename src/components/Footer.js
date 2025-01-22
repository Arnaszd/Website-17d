import React from 'react';
import StarryBackground from './StarryBackground';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#000000',
      color: 'white',
      padding: '60px 0 20px',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <StarryBackground />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 20px',
        }}>
          {/* Main Footer Content */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}>
            {/* Company Info */}
            <div data-aos="fade-up" data-aos-delay="0">
              <h3 style={{ marginBottom: '20px', fontSize: '24px' }}>17Diamonds</h3>
              <p style={{ opacity: 0.7, lineHeight: '1.6' }}>
                Home of techno.
              </p>
              <div style={{ 
                display: 'flex', 
                gap: '15px',
                marginTop: '20px' 
              }}>
                <a 
                  href="https://spotify.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover-bright"
                >
                  <img src="/spotify-icon.png" alt="Spotify" style={{ width: '24px' }} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover-bright"
                >
                  <img src="/instagram-icon.png" alt="Instagram" style={{ width: '24px' }} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h4 style={{ marginBottom: '20px', fontSize: '18px' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Home', 'Weekly Releases', 'Playlists', 'Artists', 'Events'].map((item) => (
                  <li key={item} style={{ marginBottom: '10px' }}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="hover-bright"
                      style={{ 
                        color: 'white', 
                        textDecoration: 'none',
                        opacity: 0.7
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
              <h4 style={{ marginBottom: '20px', fontSize: '18px' }}>Contact Us</h4>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                opacity: 0.7
              }}>
                <li style={{ marginBottom: '10px' }}>Email: info@17diamonds.com</li>
                <li style={{ marginBottom: '10px' }}>Phone: +1 234 567 890</li>
                <li>Address: Music Street 123, Soundville, MS 12345</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h4 style={{ marginBottom: '20px', fontSize: '18px' }}>Newsletter</h4>
              <p style={{ opacity: 0.7, marginBottom: '15px' }}>
                Subscribe to get updates about new releases and events
              </p>
              <form style={{ display: 'flex', gap: '10px' }}>
                <input 
                  type="email" 
                  placeholder="Your email"
                  style={{
                    padding: '10px',
                    borderRadius: '4px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    background: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    flex: 1
                  }}
                />
                <button 
                  type="submit"
                  className="hover-bright"
                  style={{
                    padding: '10px 20px',
                    borderRadius: '4px',
                    border: 'none',
                    background: 'white',
                    color: 'black',
                    cursor: 'pointer'
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px'
            }}
          >
            <p style={{ opacity: 0.7 }}>
              © 2024 17Diamonds. All rights reserved.
            </p>
            <div style={{
              display: 'flex',
              gap: '20px'
            }}>
              <a 
                href="#privacy"
                className="hover-bright"
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  opacity: 0.7
                }}
              >
                Privacy Policy
              </a>
              <a 
                href="#terms"
                className="hover-bright"
                style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  opacity: 0.7
                }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 