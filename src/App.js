// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import StarryBackground from './components/StarryBackground';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ArtistSlider from './components/ArtistSlider';
import SocialMedia from './components/SocialMedia';
import PlaylistSection from './components/PlaylistSection';
import AboutUs from './components/AboutUs';
import DemoForm from './components/DemoForm';
import Artists from './pages/Artists';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/artists" element={<Artists />} />
        <Route path="/" element={
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
        } />
      </Routes>
    </Router>
  );
}

export default App;
