import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../lib/supabaseClient';

const AdminPanel = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/login');
    } else {
      setUser(session.user);
      fetchSubmissions();
    }
  };

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('form_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <div style={{
        padding: '40px',
        maxWidth: '1200px',
        margin: '0 auto',
        color: 'white'
      }}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <button 
            onClick={() => navigate('/')}
            style={{
              padding: '10px 20px',
              background: 'transparent',
              border: '1px solid white',
              borderRadius: '4px',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Back to Home
          </button>
          <button 
            onClick={handleLogout}
            style={{
              padding: '10px 20px',
              background: '#ff4444',
              border: 'none',
              borderRadius: '4px',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Log out
          </button>
        </div>
        <h1 style={{ marginBottom: '10px' }}>Admin Panel</h1>
        {user && (
          <h2 style={{ 
            marginBottom: '30px', 
            color: '#4CAF50',
            fontSize: '18px',
            fontWeight: 'normal'
          }}>
            Hello, {user.email}
          </h2>
        )}
        
        {loading ? (
          <p>Loading submissions...</p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              background: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>Date</th>
                  <th style={tableHeaderStyle}>Name</th>
                  <th style={tableHeaderStyle}>Email</th>
                  <th style={tableHeaderStyle}>Instagram</th>
                  <th style={tableHeaderStyle}>Song Name</th>
                  <th style={tableHeaderStyle}>Song Link</th>
                  <th style={tableHeaderStyle}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission) => (
                  <tr key={submission.id} style={tableRowStyle}>
                    <td style={tableCellStyle}>
                      {new Date(submission.created_at).toLocaleDateString()}
                    </td>
                    <td style={tableCellStyle}>{submission.name}</td>
                    <td style={tableCellStyle}>{submission.email}</td>
                    <td style={tableCellStyle}>{submission.instagram}</td>
                    <td style={tableCellStyle}>{submission.song_name}</td>
                    <td style={tableCellStyle}>
                      <a 
                        href={submission.song_link.startsWith('http') ? submission.song_link : `https://${submission.song_link}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#4CAF50' }}
                      >
                        {submission.song_link}
                      </a>
                    </td>
                    <td style={tableCellStyle}>{submission.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

const tableHeaderStyle = {
  padding: '15px',
  textAlign: 'left',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  background: 'rgba(0, 0, 0, 0.5)'
};

const tableRowStyle = {
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
};

const tableCellStyle = {
  padding: '15px',
  maxWidth: '200px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};

export default AdminPanel; 