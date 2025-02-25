import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../lib/supabaseClient';

const AcceptedSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const tableHeaderStyle = {
    padding: '12px 15px',
    textAlign: 'left',
    borderBottom: '1px solid #333',
    color: '#4CAF50',
    fontWeight: 'bold'
  };

  const tableRowStyle = {
    borderBottom: '1px solid #222'
  };

  const tableCellStyle = {
    padding: '12px 15px',
    color: '#fff'
  };

  const linkStyle = {
    color: '#4CAF50',
    textDecoration: 'none'
  };

  const handleSendContract = async (submission) => {
    try {
      // Patikrinti ar jau išsiųsta
      const { data: existingEmail } = await supabase
        .from('sent_contracts')
        .select('*')
        .eq('submission_id', submission.id)
        .single();

      if (existingEmail) {
        alert('Contract has already been sent to this email!');
        return;
      }

      // Įrašyti į sent_contracts lentelę
      const { error: insertError } = await supabase
        .from('sent_contracts')
        .insert({
          submission_id: submission.id,
          email: submission.email,
          sent_by: user.email,
          sent_at: new Date().toISOString()
        });

      if (insertError) throw insertError;

      // Siųsti el. laišką per Edge Function
      const { error: emailError } = await supabase.functions.invoke('send-email', {
        body: {
          record: {
            to_email: submission.email,
            subject: '17Diamonds - Contract Form',
            data: {
              name: submission.name,
              form_link: 'YOUR_GOOGLE_FORM_LINK'
            }
          }
        }
      });

      if (emailError) throw emailError;
      
      alert('Contract sent successfully!');
      // Atnaujinti state, kad mygtukas taptų neaktyvus
      setSubmissions(submissions.map(s => 
        s.id === submission.id ? {...s, contract_sent: true} : s
      ));

    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send contract');
    }
  };

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
        .from('accepted_submissions')
        .select('*')
        .order('action_date', { ascending: false });

      if (error) throw error;
      setSubmissions(data);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', padding: '40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', color: 'white' }}>
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          marginBottom: '20px',
          justifyContent: 'center' 
        }}>
          <button 
            onClick={() => navigate('/admin')}
            style={{
              padding: '10px 20px',
              background: 'transparent',
              border: '1px solid white',
              borderRadius: '4px',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Back to Admin
          </button>
        </div>

        <h1 style={{ marginBottom: '10px', textAlign: 'center' }}>Accepted Submissions</h1>
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
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
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
                    <a href={submission.song_link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                      {submission.song_link}
                    </a>
                  </td>
                  <td style={{...tableCellStyle, maxWidth: '300px'}}>{submission.notes}</td>
                  <td style={tableCellStyle}>
                    <button
                      onClick={() => handleSendContract(submission)}
                      disabled={submission.contract_sent}
                      style={{
                        padding: '8px 16px',
                        background: submission.contract_sent ? '#666' : '#4CAF50',
                        border: 'none',
                        borderRadius: '4px',
                        color: 'white',
                        cursor: submission.contract_sent ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {submission.contract_sent ? 'Contract Sent' : 'Send Contract'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AcceptedSubmissions; 