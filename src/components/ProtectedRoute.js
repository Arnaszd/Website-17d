import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import supabase from '../lib/supabaseClient';

const ProtectedRoute = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
    } catch (error) {
      console.error('Error checking auth:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div style={{ color: 'white', padding: '20px' }}>Kraunama...</div>;
  }

  if (!session) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute; 