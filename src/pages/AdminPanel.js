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

  const handleAction = async (submission, action) => {
    try {
      console.log('Processing submission:', submission);
      console.log('Action:', action);

      // First, insert into appropriate table
      const { error: moveError } = await supabase
        .from(action === 'accept' ? 'accepted_submissions' : 'rejected_submissions')
        .insert({
          name: submission.name,
          email: submission.email,
          song_name: submission.song_name,
          song_link: submission.song_link,
          notes: submission.notes,
          instagram: submission.instagram,
          action_date: new Date().toISOString(),
          actioned_by: user.email
        });

      if (moveError) {
        console.error('Move Error:', moveError);
        throw moveError;
      }

      // Then delete from main submissions
      const { error: deleteError } = await supabase
        .from('form_submissions')
        .delete()
        .eq('id', submission.id);

      if (deleteError) {
        console.error('Delete Error:', deleteError);
        throw deleteError;
      }

      // Update local state
      setSubmissions(submissions.filter(s => s.id !== submission.id));
      console.log('Action completed successfully');
      
    } catch (error) {
      console.error('Error processing submission:', error);
      alert('Error processing submission: ' + error.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <div style={{
        padding: '40px',
        maxWidth: '1400px',
        margin: '0 auto',
        color: 'white'
      }}>
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          marginBottom: '20px',
          justifyContent: 'center' 
        }}>
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
            onClick={() => navigate('/admin/accepted')}
            style={{
              padding: '10px 20px',
              background: '#4CAF50',
              border: 'none',
              borderRadius: '4px',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            View Accepted
          </button>

          <button 
            onClick={() => navigate('/admin/rejected')}
            style={{
              padding: '10px 20px',
              background: '#ff4444',
              border: 'none',
              borderRadius: '4px',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            View Rejected
          </button>

          <button 
            onClick={handleLogout}
            style={{
              padding: '10px 20px',
              background: 'transparent',
              border: '1px solid #ff4444',
              borderRadius: '4px',
              color: '#ff4444',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>

        <h1 style={{ marginBottom: '10px', textAlign: 'center' }}>Pending Submissions</h1>
        {user && (
          <h2 style={{ 
            marginBottom: '30px', 
            color: '#4CAF50',
            fontSize: '18px',
            fontWeight: 'normal',
            textAlign: 'center'
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
                  <th style={tableHeaderStyle}>Actions</th>
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
                    <td style={{...tableCellStyle, maxWidth: '250px'}}>
                      <a 
                        href={submission.song_link.startsWith('http') ? submission.song_link : `https://${submission.song_link}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={linkStyle}
                      >
                        {submission.song_link}
                      </a>
                    </td>
                    <td style={{...tableCellStyle, maxWidth: '300px'}}>{submission.notes}</td>
                    <td style={tableCellStyle}>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button
                          onClick={() => handleAction(submission, 'accept')}
                          style={{
                            padding: '5px 10px',
                            background: '#4CAF50',
                            border: 'none',
                            borderRadius: '4px',
                            color: 'white',
                            cursor: 'pointer'
                          }}
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleAction(submission, 'reject')}
                          style={{
                            padding: '5px 10px',
                            background: '#ff4444',
                            border: 'none',
                            borderRadius: '4px',
                            color: 'white',
                            cursor: 'pointer'
                          }}
                        >
                          Reject
                        </button>
                      </div>
                    </td>
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
  background: 'rgba(0, 0, 0, 0.5)',
  whiteSpace: 'nowrap'
};

const tableRowStyle = {
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.05)'
  }
};

const tableCellStyle = {
  padding: '15px',
  maxWidth: '200px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'normal',
  wordBreak: 'break-word',
  verticalAlign: 'top',
  lineHeight: '1.4'
};

const linkStyle = {
  color: '#4CAF50',
  textDecoration: 'none',
  wordBreak: 'break-all',
  '&:hover': {
    textDecoration: 'underline'
  }
};

export default AdminPanel; 