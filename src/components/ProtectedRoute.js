import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../lib/supabaseClient';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error:', error);
      navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
<<<<<<< HEAD
    return <div style={{ color: 'white', padding: '20px' }}>Kraunama...</div>;
=======
    return <div style={{ color: 'white', padding: '20px' }}>Loading...</div>;
>>>>>>> 56d635fce656dde943b914f3508a42b4887e1621
  }

  return children;
};

export default ProtectedRoute; 