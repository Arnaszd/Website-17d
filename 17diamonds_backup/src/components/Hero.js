import React from 'react';

const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '120px 20px',
      background: '#1a1a1a',
      position: 'relative',
      textAlign: 'center'
    }}>
      <h1 
        data-aos="fade-up"
        style={{
          fontSize: 'clamp(40px, 8vw, 120px)',
          margin: '0 0 40px 0',
          lineHeight: '1.1',
          maxWidth: '1200px'
        }}
      >
        HOME OF<br />
        TALENTED ARTISTS
      </h1>
      
      <p 
        data-aos="fade-up"
        data-aos-delay="200"
        style={{
          fontSize: 'clamp(20px, 3vw, 32px)',
          maxWidth: '900px',
          margin: '0',
          opacity: '0.9',
          lineHeight: '1.5'
        }}
      >
        It's a space that <span className="flicker-text">fosters</span> artistic <span className="flicker-text">development</span>, welcomes music <span className="flicker-text">lovers</span> to explore new sounds, and balances both tradition and <span className="flicker-text">bold</span> ideas with <span className="flicker-text">equal</span> appreciation
      </p>
    </section>
  );
};

export default Hero; 