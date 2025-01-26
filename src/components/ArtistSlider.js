import React, { useState } from 'react';
import StarryBackground from './StarryBackground';
import { Link } from 'react-router-dom';

const ArtistSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const artists = [
    {
      name: 'Discole',
      image: '/images/discole.png',
      socials: {
        spotify: 'https://open.spotify.com/artist/6VVsZ70zgwx9zx44BKLZle?si=A6yuuBFTS5e9VdDFiF0R-w',
        instagram: 'https://www.instagram.com/discole.music/'
      }
    },
    {
      name: 'Artist2',
      image: '',
      socials: {
        spotify: 'https://spotify.com/artist',
        instagram: 'https://instagram.com/artist'
      }
    },
    {
      name: 'Artist3',
      image: '',
      socials: {
        spotify: 'https://spotify.com/artist',
        instagram: 'https://instagram.com/artist'
      }
    },
    // Galima pridėti daugiau artistų
  ];

  const handlePrev = () => {
    setCurrentSlide(prev => prev === 0 ? 2 : prev - 1);
  };

  const handleNext = () => {
    setCurrentSlide(prev => prev === 2 ? 0 : prev + 1);
  };

  return (
    <section id="artists" style={{
      padding: '120px 0',
      background: '#000000',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <StarryBackground />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div 
          data-aos="fade-up"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 20px'
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '64px',
              fontWeight: 'bold'
            }}>
              Our Artists
            </h2>
            <Link to="/artists" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'white',
              textDecoration: 'none',
              fontSize: '18px'
            }}>
              View all artists
              <span style={{ fontSize: '24px' }}>→</span>
            </Link>
          </div>

          <div style={{
            position: 'relative',
            overflow: 'hidden',
            height: '600px'
          }}>
            <div style={{
              display: 'flex',
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.5s ease',
              height: '100%'
            }}>
              {artists.map((artist, index) => (
                <div
                  key={index}
                  style={{
                    minWidth: '100%',
                    height: '100%',
                    position: 'relative',
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  {artist.image ? (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative'
                      }}
                    >
                      <div
                        data-aos="fade"
                        data-aos-duration="1500"
                        style={{
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          background: `url(${artist.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          filter: 'blur(5px)',
                          transform: 'scale(1.1)',
                          opacity: 0.3
                        }}
                      />
                      <img 
                        data-aos="zoom-in"
                        data-aos-duration="1200"
                        src={artist.image}
                        alt={artist.name}
                        style={{
                          width: '1000px',
                          height: '1000px',
                          objectFit: 'cover',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          zIndex: 1
                        }}
                      />
                    </div>
                  ) : (
                    <svg 
                      width="200" 
                      height="200" 
                      viewBox="0 0 24 24" 
                      fill="rgba(255,255,255,0.5)"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  )}
                  <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '40px',
                    zIndex: 2
                  }}>
                    <div style={{
                      display: 'flex',
                      gap: '10px',
                      marginBottom: '20px'
                    }}>
                      <a 
                        href={artist.socials.spotify} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="spotify-icon"
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <img src="/icons/spotify.svg" alt="Spotify" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                      </a>
                      <a 
                        href={artist.socials.instagram} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram-icon"
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <img src="/icons/instagram.svg" alt="Instagram" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                      </a>
                    </div>
                    <h3 style={{
                      fontSize: '48px',
                      fontWeight: 'bold',
                      margin: 0
                    }}>
                      {artist.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handlePrev}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                color: 'white',
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              ←
            </button>
            <button
              onClick={handleNext}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                color: 'white',
                transition: 'background 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSlider; 