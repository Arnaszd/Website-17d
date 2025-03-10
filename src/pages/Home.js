import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ArtistSlider from '../components/ArtistSlider';
import PlaylistSection from '../components/PlaylistSection';
import StatsMap from '../components/StatsMap';
import SocialMedia from '../components/SocialMedia';
import AboutUs from '../components/AboutUs';
import DemoForm from '../components/DemoForm';
import Footer from '../components/Footer';
import StarryBackground from '../components/StarryBackground';
import MaintenanceAlert from '../components/MaintenanceAlert';
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
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
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
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
        <MaintenanceAlert />
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
};

export default Home; 