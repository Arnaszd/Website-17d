// App.js
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ArtistSlider from './components/ArtistSlider';
import SocialMedia from './components/SocialMedia';
import PlaylistSection from './components/PlaylistSection';
import Footer from './components/Footer';
import StarryBackground from './components/StarryBackground';
import DemoForm from './components/DemoForm';
import AboutUs from './components/AboutUs';
import './styles.css';

function App() {
  return (
    <div style={{
      backgroundColor: '#000000',
      color: 'white',
      position: 'relative'
    }}>
      <StarryBackground />
      <div style={{ 
        position: 'relative', 
        zIndex: 2,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Navigation />
        <main style={{ flex: 1 }}>
          <Hero />
          <Stats />
          <ArtistSlider />
          <SocialMedia />
          <PlaylistSection />
          <AboutUs />
          <DemoForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
