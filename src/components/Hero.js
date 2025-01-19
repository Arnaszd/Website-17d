import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StarryBackground from './StarryBackground';

const Hero = () => {
  // Inicializuoti AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '120px 20px',
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
              fontSize: 'clamp(40px, 8vw, 120px)',
              margin: '0 0 40px 0',
              lineHeight: '1.1'
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
              maxWidth: '1000px',
              margin: '0 auto',
              opacity: '0.9',
              lineHeight: '1.5'
            }}
          >
            It's a space that <span className="flicker-text">fosters</span> artistic <span className="flicker-text">development</span>, welcomes music <span className="flicker-text">lovers</span> to explore new sounds, and balances both tradition and <span className="flicker-text">bold</span> ideas with <span className="flicker-text">equal</span> appreciation
          </p>
        </div>
      </section>

      <section 
        style={{
          padding: '100px 20px',
          background: '#000000',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <StarryBackground />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 
            data-aos="fade-up"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              marginBottom: '60px'
            }}
          >
            Latest Releases
          </h2>
          
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            {/* Release Cards */}
            <div 
              data-aos="fade-up"
              data-aos-delay="100"
              style={{
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                ':hover': {
                  transform: 'translateY(-10px)'
                }
              }}
            >
              <img 
                src="/images/OutOfMyHead.jpg" 
                alt="Supermassive Black Hole by Seeko"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ fontSize: '24px', marginBottom: '5px' }}>Samarth goel</h3>
              <p style={{ opacity: '0.7' }}>Out Of My Head</p>
            </div>

            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              style={{
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                ':hover': {
                  transform: 'translateY(-10px)'
                }
              }}
            >
              <img 
                src="/images/illusion.png" 
                alt="Illusion by El Fuego"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ fontSize: '24px', marginBottom: '5px' }}>Illusion</h3>
              <p style={{ opacity: '0.7' }}>El Fuego Mus!c</p>
            </div>
            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              style={{
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                ':hover': {
                  transform: 'translateY(-10px)'
                }
              }}
            >
              <img 
                src="/images/Saxobeat.jpg" 
                alt="Mr Saxobeat by Marco Carbotti"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ fontSize: '24px', marginBottom: '5px' }}>Mr. Saxobeat</h3>
              <p style={{ opacity: '0.7' }}>Marco Carbotti</p>
            </div>
            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              style={{
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                ':hover': {
                  transform: 'translateY(-10px)'
                }
              }}
            >
              <img 
                src="/images/Zeus.png" 
                alt="Zeus by Venicious"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ fontSize: '24px', marginBottom: '5px' }}>Zeus</h3>
              <p style={{ opacity: '0.7' }}>Venicious</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero; 