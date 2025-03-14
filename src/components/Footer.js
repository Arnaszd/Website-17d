import React from 'react';
import { Link } from 'react-router-dom';
import StarryBackground from './StarryBackground';

const fontFaceStyle = `
  @font-face {
    font-family: 'Akira Expanded';
    src: url('/fonts/akireaexpanded.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
`;

const Footer = () => {
  return (
    <footer style={{
      padding: '60px 20px',
      background: 'rgba(0,0,0,0.95)',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      position: 'relative'
    }}>
      <StarryBackground />
      <div style={{ 
        position: 'relative', 
        zIndex: 2,
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {/* Company Info */}
        <div data-aos="fade-up" data-aos-delay="0">
          <h3 style={{ 
            marginBottom: '25px', 
            fontSize: '28px',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #fff, rgba(255,255,255,0.7))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Akira Expanded'
          }}>17Diamonds</h3>
          
          <div style={{ 
            opacity: 0.8, 
            lineHeight: '1.8', 
            fontSize: '16px',
            marginBottom: '30px'
          }}>
            <p style={{ 
              fontSize: '14px',
              opacity: 0.9,
              fontStyle: 'italic'
            }}>Based in Lithuania</p>
          </div>

          {/* Social Icons */}
          <div style={{ 
            display: 'flex', 
            gap: '20px',
            justifyContent: 'center',
            marginBottom: '40px'
          }}>
            <a 
              href="https://open.spotify.com/playlist/6CQAM7n5Obb62ozHv2i4WZ?si=a7022d97f5f84ffd" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                opacity: 0.7,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                ':hover': { opacity: 1 }
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/seventeendiamonds17/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                opacity: 0.7,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                ':hover': { opacity: 1 }
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p style={{ 
            fontSize: '14px', 
            opacity: 0.6,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '20px'
          }}>
            © {new Date().getFullYear()} 17Diamonds. All rights reserved. 
            <br></br>info@seventeendiamonds.com
          </p>
          <Link 
            to="/admin" 
            style={{
              color: 'rgba(255, 255, 255, 0.4)',
              fontSize: '12px',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
            onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.4)'}
          >
            Admin Panel
            <br></br>
          </Link>
          <Link to="/privacy" style={{  color: 'rgba(255, 255, 255, 0.4)',
              fontSize: '12px',
              textDecoration: 'none',
              transition: 'color 0.3s ease' }}
              onMouseOver={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
              onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.4)'}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 