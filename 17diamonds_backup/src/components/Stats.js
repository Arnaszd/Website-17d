import React from 'react';

const StatCard = ({ title, value, icons, imageGrid }) => {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '20px',
      padding: '40px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '30px'
    }}>
      {icons && (
        <div style={{
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap'
        }}>
          {icons.map((icon, index) => (
            <div
              key={index}
              style={{
                width: '42px',
                height: '42px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px'
              }}
            >
              <img
                src={`/icons/${icon}.svg`}
                alt={icon}
                style={{
                  width: '22px',
                  height: '22px',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.9
                }}
              />
            </div>
          ))}
        </div>
      )}
      
      {imageGrid && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px'
        }}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                paddingBottom: '100%',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg 
                  width="50%" 
                  height="50%" 
                  viewBox="0 0 24 24" 
                  fill="rgba(255,255,255,0.5)"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      )}

      <div>
        <div style={{
          color: '#808080',
          fontSize: '14px',
          marginBottom: '10px',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          {title}
        </div>
        <div style={{
          fontSize: '48px',
          fontWeight: 'bold',
          letterSpacing: '-1px'
        }}>
          {value}
        </div>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section style={{
      padding: '120px 0',
      background: 'transparent'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h2 
          data-aos="fade-up"
          data-aos-duration="1200"
          style={{
            fontSize: '48px',
            maxWidth: '900px',
            margin: '0 auto 80px',
            textAlign: 'center',
            lineHeight: 1.2
          }}
        >
          It's a space that fosters artistic development, 
          welcomes music lovers to explore new sounds, 
          and balances both tradition and bold ideas with equal appreciation
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px'
        }}>
          <div data-aos="zoom-in-up" data-aos-delay="200">
            <StatCard
              title="All-time streams"
              value="2.5M"
              icons={['spotify', 'youtube', 'itunes', 'soundcloud']}
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="400">
            <StatCard
              title="Streaming Monthly"
              value="600K+"
              icons={['spotify', 'youtube', 'itunes', 'soundcloud']}
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="600">
            <StatCard
              title="Talented artists"
              value="15+"
              imageGrid={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 