import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Artists.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import StarryBackground from '../components/StarryBackground';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Artists = () => {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);

  const artists = [
    {
      name: 'Dallax',
      image: '/images/dallax.jpg',
      socials: {
        spotify: 'https://open.spotify.com/artist/6VVsZ70zgwx9zx44BKLZle?si=A6yuuBFTS5e9VdDFiF0R-w',
        instagram: 'https://www.instagram.com/discole.music/'
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
    {
      name: 'Venicious',
      image: '/images/Venicious.jpg',
      socials: {
        spotify: 'https://open.spotify.com/artist/0wSwtiiD40xTqpKKWoSiPr?si=Q3mbuo7uRfuEGN_0P65DOw',
        instagram: 'https://www.instagram.com/veniciousmusic/'
      }
    },
  ];

  // Instead of preloading heavy homepage modules, navigate immediately.
  const handleNavigation = (sectionId) => {
    setIsNavigating(true);
    navigate('/', { state: { scrollTo: sectionId } });
    // Optionally, clear the navigation indicator after a brief delay
    setTimeout(() => setIsNavigating(false), 300);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="artists-page">
      <div className="content-wrapper">
        <Navigation onNavigate={handleNavigation} />
        <StarryBackground />

        {isNavigating && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: '#000000',
              zIndex: 9999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white'
            }}
          >
            Navigating...
          </div>
        )}

        <main
          style={{
            flex: '1 0 auto',
            padding: '20px',
            position: 'relative',
            zIndex: 2,
            marginTop: '80px'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '40px' }}>
              Our Artists
            </h1>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                padding: '0 20px'
              }}
            >
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
                  <div
                    style={{
                      width: '100%',
                      paddingTop: '100%',
                      position: 'relative',
                      background: '#1a1a1a'
                    }}
                  >
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
                  <div
                    style={{
                      padding: '15px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <h2
                      style={{
                        fontSize: '20px',
                        textAlign: 'center',
                        fontWeight: '500'
                      }}
                    >
                      {artist.name}
                    </h2>
                    <div
                      style={{
                        display: 'flex',
                        gap: '12px',
                        justifyContent: 'center'
                      }}
                    >
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
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Artists;
