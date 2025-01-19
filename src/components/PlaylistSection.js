import React from 'react';
import StarryBackground from './StarryBackground';

const PlaylistSection = () => {
  const playlists = [
    { 
      name: '2025 TIKTOK TECHNO', 
      image: '/images/playlist1.jpg',
      url: 'https://open.spotify.com/playlist/2yIlZELYEw4UmYUwoXVI2n?si=a1fcf3dbaa024db6'
    },
    { 
      name: 'Technogasm', 
      image: '/images/playlist2.jpg',
      url: 'https://open.spotify.com/playlist/15PnocaouNCY9NQWQOrXtu?si=cc6c96d908ba4b22'
    }
  ];

  return (
    <section style={{
      padding: '100px 20px',
      background: '#000000',
      position: 'relative',
      overflow: 'visible'
    }}>
      <StarryBackground />
      <div style={{ 
        position: 'relative', 
        zIndex: 2,
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '60px'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 
            style={{
              fontSize: 'clamp(40px, 8vw, 80px)',
              margin: 0
            }}
          >
            Our Playlists
          </h2>
          <a 
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '50px',
              height: '50px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img 
              src="/icons/spotify.svg" 
              alt="Spotify"
              style={{
                width: '25px',
                height: '25px',
                filter: 'brightness(0) invert(1)'
              }}
            />
          </a>
        </div>

        {/* Playlists */}
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '30px'
        }}>
          {playlists.map((playlist) => (
            <div
              key={playlist.name}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 0',
                borderBottom: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: '20px'
              }}>
                <img 
                  src={playlist.image} 
                  alt={playlist.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '5px'
                  }}
                />
                <span style={{ fontSize: '24px' }}>{playlist.name}</span>
              </div>
              
              <a
                href="#"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  const arrow = e.currentTarget.querySelector('.arrow');
                  if (arrow) arrow.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  const arrow = e.currentTarget.querySelector('.arrow');
                  if (arrow) arrow.style.transform = 'translateX(0)';
                }}
              >
                Go to playlist 
                <span 
                  className="arrow"
                  style={{
                    display: 'inline-block',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaylistSection; 