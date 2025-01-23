import React from 'react';
import StarryBackground from './StarryBackground';

const AboutUs = () => {
  return (
    <section id="about" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '120px 0',
      background: '#000000',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <StarryBackground />
      <div style={{ 
        position: 'relative', 
        zIndex: 2,
        maxWidth: '1200px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 
          data-aos="fade-up"
          style={{
            fontSize: 'clamp(40px, 8vw, 80px)',
            margin: '0 0 40px 0',
            lineHeight: '1.1'
          }}
        >
          About Us
        </h1>
        
        <p 
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            fontSize: 'clamp(18px, 2vw, 24px)',
            maxWidth: '800px',
            margin: '0 auto',
            opacity: '0.9',
            lineHeight: '1.8'
          }}
        >
          Hey! We are two <span className="flicker-text">friends</span> from Lithuania, who share a similar mindset and <span className="flicker-text">passion</span> for music. Our goal is to help <span className="flicker-text">artists</span> to get their music out there and to make it more <span className="flicker-text">accessible</span> to the public. We are a team of <span className="flicker-text">two</span>, who are passionate about music and we are always looking for new and exciting projects to work on. We are always open to new <span className="flicker-text">collaborations</span> and releases. We treat every artist with the same level of{' '}
          <span className="flicker-text">respect</span> and <span className="flicker-text">dedication</span>, providing them with all of the necessary <span className="flicker-text">resources</span> needed for releasing tracks. From cover <span className="flicker-text">vocals</span> to <span className="flicker-text">mechanical licenses</span>.
        </p>
      </div>
    </section>
  );
};

export default AboutUs; 