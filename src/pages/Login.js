import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../lib/supabaseClient';
import Navigation from '../components/Navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      navigate('/admin');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      navigate('/admin');
    } catch (error) {
      setError('Neteisingi prisijungimo duomenys');
      console.error('Error:', error.message);
    }
  };

  return (
    <div style={{ 
      backgroundColor: '#000000', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px'
      }}>
        <Navigation />
      </div>
      
      <div style={{
        width: '100%',
        maxWidth: '400px',
        background: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '8px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '40px',
        margin: '0 20px'
      }}>
        <h1 style={{ 
          color: 'white',
          fontSize: '24px',
          marginBottom: '30px',
          textAlign: 'center',
          fontWeight: '500'
        }}>
          Admin Prisijungimas
        </h1>
        
        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          {error && (
            <div style={{
              color: '#ff4444',
              fontSize: '14px',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              {error}
            </div>
          )}

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="El. paštas"
            style={{
              width: '100%',
              padding: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              color: 'white',
              fontSize: '15px',
              marginBottom: '15px',
              boxSizing: 'border-box'
            }}
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Slaptažodis"
            style={{
              width: '100%',
              padding: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              color: 'white',
              fontSize: '15px',
              marginBottom: '20px',
              boxSizing: 'border-box'
            }}
          />

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              background: 'white',
              border: 'none',
              borderRadius: '4px',
              color: 'black',
              fontSize: '15px',
              fontWeight: '500',
              cursor: 'pointer',
              marginBottom: '10px'
            }}
          >
            Prisijungti
          </button>

          <button
            type="button"
            onClick={() => navigate('/')}
            style={{
              width: '100%',
              padding: '12px',
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              color: 'white',
              fontSize: '15px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Grįžti į pagrindinį
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 