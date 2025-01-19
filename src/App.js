// App.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ArtistSlider from './components/ArtistSlider';
import PlaylistSection from './components/PlaylistSection';
import Footer from './components/Footer';
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
      backgroundColor: '#1a1a1a',
      color: 'white',
      minHeight: '100vh',
    }}>
      <Navigation data-aos="fade-down" data-aos-duration="1000" />
      <Hero />
      <Stats />
      <ArtistSlider />
      <PlaylistSection />
      <Footer />
    </div>
  );
}

export default App;
