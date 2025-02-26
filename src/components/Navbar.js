import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../lib/supabaseClient';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
    setIsOpen(false);
  };

  const navStyles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(0, 0, 0, 0.9)',
      backdropFilter: 'blur(10px)',
      padding: '1rem',
      zIndex: 1000,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    menuButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '0.5rem',
      '@media (max-width: 768px)': {
        display: 'block',
      },
    },
    nav: {
      '@media (max-width: 768px)': {
        display: isOpen ? 'flex' : 'none',
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(10px)',
        flexDirection: 'column',
        padding: '1rem',
      },
    },
    navList: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        gap: '1rem',
      },
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'color 0.3s ease',
      ':hover': {
        color: '#4CAF50',
      },
    },
    button: {
      padding: '0.5rem 1rem',
      background: '#4CAF50',
      border: 'none',
      borderRadius: '4px',
      color: 'white',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s ease',
      ':hover': {
        backgroundColor: '#45a049',
      },
    },
  };

  return (
    <header style={navStyles.navbar}>
      <div style={navStyles.container}>
        <Link to="/" style={navStyles.logo}>
          17 DIAMONDS
        </Link>

        <button 
          style={{
            ...navStyles.menuButton,
            display: window.innerWidth <= 768 ? 'block' : 'none'
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <nav style={{
          ...navStyles.nav,
          display: window.innerWidth > 768 ? 'block' : (isOpen ? 'block' : 'none')
        }}>
          <ul style={navStyles.navList}>
            <li>
              <Link 
                to="/admin" 
                style={navStyles.navLink}
                onClick={() => setIsOpen(false)}
              >
                Admin Panel
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/accepted" 
                style={navStyles.navLink}
                onClick={() => setIsOpen(false)}
              >
                Accepted
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/rejected" 
                style={navStyles.navLink}
                onClick={() => setIsOpen(false)}
              >
                Rejected
              </Link>
            </li>
            <li>
              <button 
                onClick={handleLogout}
                style={navStyles.button}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 