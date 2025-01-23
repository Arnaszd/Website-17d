import React from 'react';
import StarryBackground from './StarryBackground';

const SocialMediaSection = () => {
  const socialLinks = [
    { 
      name: 'Lithuania HQ', 
      image: '/images/lithuania-hq.png',
      link: 'https://spotify.playlist.com/lithuania-hq'
    },
    { 
      name: 'Car Music 2024', 
      image: '/images/car-music.png',
      link: 'https://spotify.playlist.com/car-music'
    },
    { 
      name: 'Motivation Music 2024', 
      image: '/images/motivation-music.png',
      link: 'https://spotify.playlist.com/motivation'
    },
    { 
      name: 'Rave Techno Music', 
      image: '/images/rave-techno.png',
      link: 'https://spotify.playlist.com/rave-techno'
    }
  ];

  return (
    <section id="socials" style={{
      padding: '120px 0',
      background: '#000000',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <StarryBackground />
      <div style={{ 
        position: 'relative', 
        zIndex: 2,
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '60px'
        }}>
          <div>
            <h2 
              data-aos="fade-up"
              style={{
                fontSize: 'clamp(40px, 8vw, 80px)',
                marginBottom: '20px'
              }}
            >
              Our Social Media
            </h2>
            <p 
              data-aos="fade-up"
              data-aos-delay="100"
              style={{
                fontSize: '18px',
                opacity: 0.7,
                maxWidth: '400px'
              }}
            >
              Join us in celebrating the power of music, and the artists who bring it to life.
            </p>
            <a 
              href="/demo"
              data-aos="fade-up"
              data-aos-delay="200"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: 'white',
                textDecoration: 'none',
                fontSize: '18px',
                marginTop: '20px',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
            >
              Send your demos <span style={{ marginLeft: '10px' }}>→</span>
            </a>
          </div>

          <a 
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '60px',
              height: '60px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img 
              src="/icons/spotify.svg" 
              alt="Spotify"
              style={{
                width: '30px',
                height: '30px',
                filter: 'brightness(0) invert(1)'
              }}
            />
          </a>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          {socialLinks.map((item, index) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '40px 0',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                textDecoration: 'none',
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <img 
                  src={item.image} 
                  alt={item.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '5px',
                    objectFit: 'cover'
                  }}
                />
                <span style={{ fontSize: '24px' }}>{item.name}</span>
              </div>
              <span style={{ fontSize: '24px' }}>Go to playlist →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection; 