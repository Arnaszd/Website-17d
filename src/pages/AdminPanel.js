import React, { useEffect, useState } from 'react';
import supabase from '../lib/supabaseClient';

const AdminPanel = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubmissions();
  }, []);

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

  return (
    <div style={{
      padding: '40px',
      maxWidth: '1200px',
      margin: '0 auto',
      color: 'white'
    }}>
      <h1 style={{ marginBottom: '30px' }}>Admin Panel</h1>
      
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
                  <td style={tableCellStyle}>{submission.song_name}</td>
                  <td style={tableCellStyle}>
                    <a href={submission.song_link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style={{ color: '#4CAF50' }}>
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