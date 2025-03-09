import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
// Importuokite visus reikalingus komponentus, kaip buvo originaliame faile
import AdminStats from './AdminStats';
import AdminSubmissions from './AdminSubmissions';
import AdminReleases from './AdminReleases';
import AdminArtists from './AdminArtists';
import AdminPlaylists from './AdminPlaylists';
import AdminAchievements from './AdminAchievements';
import AdminSettings from './AdminSettings';
import AdminSocials from './AdminSocials';
import ProtectedRoute from '../../components/ProtectedRoute';

const AdminPanel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  // Pridedame state šoninės juostos atidarymui/uždarymui
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Autentifikacijos logika lieka nepakeista
  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error('Error getting session:', error.message);
        navigate('/admin/login');
        return;
      }
      
      setSession(data.session);
      setLoading(false);
      
      if (!data.session) {
        navigate('/admin/login');
      }
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        if (event === 'SIGNED_OUT') {
          navigate('/admin/login');
        }
      }
    );

    return () => {
      if (authListener && authListener.unsubscribe) {
        authListener.unsubscribe();
      }
    };
  }, [navigate]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error.message);
    } else {
      navigate('/admin/login');
    }
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: '#0f0f0f',
        color: 'white'
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column',
        minHeight: '100vh',
        background: '#0f0f0f',
        color: 'white'
      }}
      className="admin-panel-container"
    >
      {/* Mobilusis antraštė */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '15px 20px',
          background: '#1a1a1a',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}
        className="mobile-header"
      >
        <h1 style={{ 
          fontSize: '20px',
          fontWeight: 'bold',
          margin: 0
        }}>
          17Diamonds Admin
        </h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer'
          }}
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Šoninė juosta */}
      <div 
        style={{ 
          width: '250px',
          background: '#1a1a1a',
          padding: '30px 0',
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          top: '56px',
          bottom: 0,
          left: sidebarOpen ? '0' : '-250px',
          transition: 'left 0.3s ease',
          zIndex: 1000,
          overflowY: 'auto'
        }}
        className="sidebar"
      >
        <div 
          style={{ 
            padding: '0 20px 30px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '20px',
            display: 'none'
          }}
          className="desktop-header"
        >
          <h1 style={{ 
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '5px'
          }}>
            17Diamonds
          </h1>
          <p style={{ 
            fontSize: '14px',
            color: 'rgba(255,255,255,0.6)'
          }}>
            Admin Panel
          </p>
        </div>

        <nav style={{ flex: 1 }}>
          {[
            { path: '/admin', label: 'Dashboard', exact: true },
            { path: '/admin/submissions', label: 'Submissions' },
            { path: '/admin/releases', label: 'Releases' },
            { path: '/admin/artists', label: 'Artists' },
            { path: '/admin/playlists', label: 'Playlists' },
            { path: '/admin/achievements', label: 'Achievements' },
            { path: '/admin/socials', label: 'Social Media' },
            { path: '/admin/settings', label: 'Settings' },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              style={{ 
                display: 'block',
                padding: '12px 20px',
                color: location.pathname === item.path ? 'white' : 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                background: location.pathname === item.path ? 'rgba(255,255,255,0.1)' : 'transparent',
                borderLeft: location.pathname === item.path ? '3px solid white' : '3px solid transparent',
                fontSize: '14px',
                transition: 'all 0.2s ease'
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{ 
          padding: '20px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          marginTop: 'auto'
        }}>
          <button
            onClick={handleSignOut}
            style={{ 
              width: '100%',
              padding: '10px',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '4px',
              color: 'white',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'background 0.2s ease'
            }}
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Tamsi permatoma užsklanda, kai meniu atidaryta */}
      {sidebarOpen && (
        <div 
          style={{
            position: 'fixed',
            top: '56px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 999
          }}
          onClick={() => setSidebarOpen(false)}
          className="sidebar-overlay"
        />
      )}

      {/* Pagrindinis turinys */}
      <div 
        style={{ 
          flex: 1, 
          padding: '20px', 
          marginTop: '56px',
          marginLeft: 0
        }}
        className="main-content"
      >
        <Routes>
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <AdminStats />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/submissions" 
            element={
              <ProtectedRoute>
                <AdminSubmissions />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/releases" 
            element={
              <ProtectedRoute>
                <AdminReleases />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/artists" 
            element={
              <ProtectedRoute>
                <AdminArtists />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/playlists" 
            element={
              <ProtectedRoute>
                <AdminPlaylists />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/achievements" 
            element={
              <ProtectedRoute>
                <AdminAchievements />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/socials" 
            element={
              <ProtectedRoute>
                <AdminSocials />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <ProtectedRoute>
                <AdminSettings />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPanel; 