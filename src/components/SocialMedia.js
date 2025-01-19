import React from 'react';

const SocialMedia = () => {
  const platforms = [
    { name: 'Spotify', link: 'https://spotify.com' },
    { name: 'Apple Music', link: 'https://music.apple.com' },
    { name: 'Tik Tok', link: 'https://tiktok.com' },
    { name: 'Instagram', link: 'https://instagram.com' },
    { name: 'Amazon Music', link: 'https://music.amazon.com' },
    { name: 'YouTube', link: 'https://youtube.com' }
  ];

  return (
    <section style={{
      padding: '120px 20px',
      background: '#1a1a1a',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <h2 
          data-aos="fade-up"
          style={{
            fontSize: 'clamp(40px, 6vw, 80px)',
            marginBottom: '80px',
            textAlign: 'center'
          }}
        >
          Our social media
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px'
        }}>
          {platforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                color: 'white',
                textDecoration: 'none',
                fontSize: '32px'
              }}
              className="hover-bright"
            >
              <span>{platform.name}</span>
              <span style={{
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid white',
                borderRadius: '50%',
                padding: '4px'
              }}>
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia; 