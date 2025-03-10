import React, { useState, useEffect } from 'react';

const MaintenanceAlert = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Patikriname, ar perspėjimas buvo parodytas ir kada
    const lastShownTime = localStorage.getItem('maintenanceAlertShown');
    const currentTime = new Date().getTime();
    
    // Jei perspėjimas dar nebuvo parodytas arba praėjo daugiau nei 1 valanda
    if (!lastShownTime || (currentTime - parseInt(lastShownTime)) > 3600000) { // 3600000 ms = 1 valanda
      setIsVisible(true);
    }
  }, []);
  
  const handleClose = () => {
    // Išsaugome dabartinį laiką milliseconds formatu
    localStorage.setItem('maintenanceAlertShown', new Date().getTime().toString());
    setIsVisible(false);
  };
  
  if (!isVisible) return null;
  
  return (
    <div style={{
      position: 'fixed',
      top: '90px', // Po navigacijos juostos
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '600px',
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      color: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
      zIndex: 1000,
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      textAlign: 'center'
    }}>
      <p style={{ 
        margin: '0 0 15px 0',
        fontSize: '16px',
        lineHeight: '1.5'
      }}>   
        <strong>Hey!</strong> This website is under maintenance. If you notice any errors, problems or improvements, please let us know. We apologize for any inconvenience. </p>
      <button 
        onClick={handleClose}
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: 'none',
          color: 'white',
          padding: '8px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {e.target.style.background = 'rgba(255, 255, 255, 0.2)'}}
        onMouseOut={(e) => {e.target.style.background = 'rgba(255, 255, 255, 0.1)'}}
      >
        Close
      </button>
    </div>
  );
};

export default MaintenanceAlert; 