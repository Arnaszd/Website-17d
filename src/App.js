// App.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ArtistSlider from './components/ArtistSlider';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import StarryBackground from './components/StarryBackground';
import PlaylistSection from './components/PlaylistSection';
import './styles.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
      easing: 'ease-out-cubic',
      mirror: false
    });
  }, []);

  return (
    <div style={{
      backgroundColor: '#000000',
      color: 'white',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <StarryBackground />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navigation data-aos="fade-down" data-aos-duration="1000" />
        <Hero />
        <Stats />
        <ArtistSlider />
        <SocialMedia />
        <PlaylistSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
