import React from 'react';

const PlaylistSection = () => {
  const playlists = [
    {
      name: '2025 TECHNO TIK TOK',
      image: '/images/playlist1.jpg',
      link: 'https://spotify.com/playlist1'
    },
    {
      name: 'TECHNOGASM',
      image: '/images/playlist2.jpg',
      link: 'https://spotify.com/playlist2'
    }
  ];

  return (
    <section style={{
      padding: '120px 0',
      background: '#1a1a1a',
      color: 'white',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '40px'
        }}>
          <div>
            <p style={{
              fontSize: '18px',
              opacity: 0.8,
              maxWidth: '600px',
              marginBottom: '30px'
            }}>
              Join us in celebrating the power of music, and the artists who bring it to life.
            </p>
            <a href="#demos" className="hover-bright" style={{
              fontSize: '18px',
              color: 'white',
              textDecoration: 'underline'
            }}>
              Send your demos →
            </a>
          </div>
          
          <div>
            <h2 style={{
              fontSize: '48px',
              marginBottom: '40px'
            }}>
              Our Playlists
            </h2>
            <a 
              href="https://spotify.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-scale"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <img 
                src="/icons/spotify.svg" 
                alt="Spotify" 
                style={{
                  width: '50px',
                  height: '50px',
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </a>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {playlists.map((playlist, index) => (
            <a 
              key={index}
              href={playlist.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-scale"
              data-aos="fade-up"
              data-aos-delay={index * 300}
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none',
                color: 'white',
                backgroundColor: 'transparent',
                transition: 'all 0.5s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateX(20px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}>
                {playlist.image ? (
                  <img 
                    src={playlist.image}
                    alt={playlist.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'cover'
                    }}
                  />
                ) : (
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                )}
                <span style={{
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>
                  {playlist.name}
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{
                  fontSize: '18px'
                }}>
                  Go to playlist
                </span>
                <span style={{
                  fontSize: '24px'
                }}>
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaylistSection; 