import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StarryBackground from './StarryBackground';

const ArtistSlider = () => {
  const navigate = useNavigate();
  const [artists, setArtists] = useState([
    {
      name: 'Dallax',
      image: '/images/dallax.jpg',
      socials: {
        spotify: 'https://open.spotify.com/artist/2PedVvzZH5HdHSk9P0iDXY?si=h5oxNZbiRKeeWwl1HpDjCA',
        instagram: 'https://www.instagram.com/imdallax/'
      }
    },
    {
      name: 'Cepaque',
      image: '/images/cepaque.jpg',
      socials: {
        spotify: 'https://spotify.com',
        instagram: 'https://instagram.com'
      }
    },
    {
      name: 'cedriK',
      image: '/images/cedriK.jpg',
      socials: {
        spotify: 'https://open.spotify.com/artist/6bIAt8seFCzSCA0LtjCwXg?si=lTiPYpDWTtOoakqP4UqeeA',
        instagram: 'https://www.instagram.com/cedrik.music/'
      }
    },
    
  ]);

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
              They have trusted us
            </h2>
            <button
              onClick={() => navigate('/artists')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'white',
                background: 'none',
                border: 'none',
                fontSize: '18px',
                cursor: 'pointer'
              }}
            >
              View all artists
              <span style={{ fontSize: '24px' }}>→</span>
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            padding: '0 20px'
          }}>
            {artists.map((artist, index) => (
              <div 
                key={index}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                  cursor: 'default'
                }}
              >
                <div style={{
                  width: '100%',
                  paddingTop: '100%',
                  position: 'relative',
                  background: '#1a1a1a'
                }}>
                  {artist.image && (
                    <img 
                      loading="lazy"
                      src={artist.image}
                      alt={artist.name}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  )}
                </div>
                <div style={{ 
                  padding: '15px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <h2 style={{ 
                    fontSize: '20px',
                    textAlign: 'center',
                    fontWeight: '500'
                  }}>
                    {artist.name}
                  </h2>
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'center'
                  }}>
                    {Object.entries(artist.socials).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: '35px',
                          height: '35px',
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background 0.3s ease'
                        }}
                      >
                        <img 
                          loading="lazy"
                          src={`/icons/${platform}.svg`}
                          alt={platform}
                          style={{
                            width: '18px',
                            height: '18px',
                            filter: 'brightness(0) invert(1)'
                          }}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSlider; 