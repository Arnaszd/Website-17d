import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import StarryBackground from '../components/StarryBackground';

const Privacy = () => {
  const navigate = useNavigate();
  
  const handleNavigation = useCallback((sectionId) => {
    navigate('/', { state: { scrollTo: sectionId } });
  }, [navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      const highestId = window.setTimeout(() => {}, 0);
      for (let i = highestId; i >= 0; i--) {
        window.clearTimeout(i);
      }
    };
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
        <Navigation onNavigate={handleNavigation} />
        
        <main style={{ 
          flex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '120px 20px 60px',
          lineHeight: '1.8',
          position: 'relative',
          zIndex: 3
        }}>
          <h1 style={{ 
            fontSize: '36px', 
            marginBottom: '30px', 
            textAlign: 'center',
            fontWeight: 'bold'
          }}>Privacy Policy</h1>
          
          
          <p style={{ marginBottom: '20px' }}>
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>1. Introduction</h2>
            <p>
              Welcome to 17Diamonds ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>
          
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>2. Information We Collect</h2>
            <p style={{ marginBottom: '15px' }}>We may collect the following types of information:</p>
            
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>2.1 Personal Information</h3>
            <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <li>Name</li>
              <li>Email address</li>
              <li>Social media handles (e.g., Instagram)</li>
              <li>Information provided through our demo submission form</li>
            </ul>
            
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>2.2 Non-Personal Information</h3>
            <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <li>Browser type</li>
              <li>Device information</li>
              <li>IP address</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
            </ul>
          </section>
          
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>3. How We Use Your Information</h2>
            <p style={{ marginBottom: '15px' }}>We may use the information we collect for various purposes, including to:</p>
            <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <li>Process demo submissions</li>
              <li>Respond to your inquiries</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraudulent activity</li>
              <li>Understand how users interact with our website</li>
            </ul>
          </section>
          
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>4. Cookies and Local Storage</h2>
            <p style={{ marginBottom: '15px' }}>
              We use cookies and local storage to improve user experience and analyze website traffic. 
              This information helps us understand and save your preferences for future visits.
            </p>
            <p style={{ marginBottom: '15px' }}>
              Specifically, we use local storage to:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <li>Remember if you've seen certain notifications</li>
              <li>Save your preferences for site functionality</li>
              <li>Improve website performance</li>
            </ul>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. 
              If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
          </section>
          
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>5. Third-Party Services</h2>
            <p style={{ marginBottom: '15px' }}>
              Our website may use third-party services that collect information about you. These may include:
            </p>
            <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <li>Google Analytics for website traffic analysis</li>
              <li>Social media platforms for content sharing</li>
              <li>Spotify embeds for music playback</li>
            </ul>
            <p>
              These third parties have their own privacy policies addressing how they use such information.
            </p>
          </section>
          
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>6. Data Security</h2>
            <p>
              We have implemented measures to secure your personal information from accidental loss and unauthorized access, use, alteration, and disclosure. 
              However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>
          
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>7. Your Rights</h2>
            <p style={{ marginBottom: '15px' }}>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
            <ul style={{ marginLeft: '20px', marginBottom: '15px' }}>
              <li>The right to access personal information we hold about you</li>
              <li>The right to request correction of your personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to withdraw consent</li>
              <li>The right to data portability</li>
              <li>The right to lodge a complaint with a supervisory authority</li>
            </ul>
          </section>
          
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>8. Children's Privacy</h2>
            <p>
              Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. 
              If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>
          
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>9. Changes to Our Privacy Policy</h2>
            <p>
              We may update our privacy policy from time to time. Any changes will be posted on this page with an updated revision date. 
              We encourage you to review this privacy policy periodically for any changes.
            </p>
          </section>
          
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>10. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p style={{ marginTop: '15px' }}>
              Email: info@17diamonds.com
            </p>
          </section>
          
          <div style={{
            marginTop: '50px',
            textAlign: 'center',
            padding: '20px',
            borderTop: '1px solid rgba(255,255,255,0.1)'
          }}>
            <p>© 2025 17Diamonds. All rights reserved.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Privacy; 