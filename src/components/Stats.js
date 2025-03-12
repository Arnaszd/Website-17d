import React from 'react';
import StarryBackground from './StarryBackground';

const StatCard = ({ title, value, type }) => {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '20px',
      padding: '40px 30px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      position: 'relative',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      cursor: 'default',
      ':hover': {
        transform: 'translateY(-5px)'
      }
    }}>
      {/* Viršutinė dalis su ikonomis */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        <h3 style={{
          fontSize: '14px',
          opacity: 0.7,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          margin: 0
        }}>
          {title}
        </h3>

        {type === 'streams' && (
          <div style={{
            display: 'flex',
            gap: '12px'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" opacity="0.7">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" opacity="0.7">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" opacity="0.7">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.66c-.864 0-1.68-.178-2.427-.506l2.764-3.384c.19-.233.154-.574-.08-.764-.232-.19-.573-.154-.763.08l-2.765 3.385c-.606-.416-1.13-.94-1.547-1.546l3.384-2.765c.234-.19.27-.532.08-.764-.19-.233-.531-.27-.764-.08L6.498 16.05c-.327-.746-.506-1.562-.506-2.427 0-3.376 2.747-6.123 6.123-6.123s6.123 2.747 6.123 6.123S15.376 19.66 12 19.66z"/>
            </svg>
          </div>
        )}
      </div>

      {/* Skaičius */}
      <div style={{
        fontSize: 'clamp(36px, 5vw, 48px)',
        fontWeight: 'bold',
        position: 'relative',
        zIndex: 2
      }}>
        {value}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section id="achievements" style={{
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
        <h2 
          data-aos="fade-up"
          style={{
            fontSize: 'clamp(32px, 6vw, 64px)',
            textAlign: 'center',
            marginBottom: '60px',
            fontWeight: 'bold'
          }}
        >
          Our Achievements
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          padding: '0 15px'
        }}>
          <div data-aos="zoom-in-up" data-aos-delay="200">
            <StatCard
              title="ALL-TIME STREAMS"
              value="3M+"
              type="streams"
            />
          </div>
          
          <div data-aos="zoom-in-up" data-aos-delay="400">
            <StatCard
              title="STREAMING MONTHLY"
              value="600K+"
              type="monthly"
            />
          </div>
          
          <div data-aos="zoom-in-up" data-aos-delay="600">
            <StatCard
              title="RELEASES"
              value="40+"
              type="releases"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 