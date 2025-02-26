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
      // 1. Patikriname ar kontraktas jau išsiųstas
      const { data: existingContract } = await supabase
        .from('sent_contracts')
        .select('*')
        .eq('submission_id', submission.id)
        .single();

      if (existingContract) {
        alert('Kontraktas jau buvo išsiųstas šiam demo!');
        return;
      }

      // 2. Siunčiame el. laišką per Edge Function
      const { data: emailResult, error: emailError } = await supabase.functions
        .invoke('send-contract', {
          body: {
            record: {
              to_email: submission.email,
              data: {
                name: submission.name,
                form_link: 'https://forms.gle/your-form-link' // Pakeiskite į savo Google Forms nuorodą
              }
            }
          }
        });

      if (emailError) throw emailError;

      // 3. Įrašome į sent_contracts lentelę
      const { error: contractError } = await supabase
        .from('sent_contracts')
        .insert({
          submission_id: submission.id,
          email: submission.email,
          sent_by: user.email,
          sent_at: new Date().toISOString()
        });

      if (contractError) throw contractError;

      // 4. Atnaujiname UI
      setSubmissions(submissions.map(s => 
        s.id === submission.id ? {...s, contract_sent: true} : s
      ));

      alert('Kontraktas sėkmingai išsiųstas!');

    } catch (error) {
      console.error('Klaida siunčiant kontraktą:', error);
      alert('Klaida siunčiant kontraktą. Bandykite dar kartą.');
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
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission) => (
                <>
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
                  </tr>
                  <tr style={{ background: 'rgba(0,0,0,0.2)' }}>
                    <td colSpan="7" style={{ padding: '10px', textAlign: 'center' }}>
                      <button
                        onClick={() => handleSendContract(submission)}
                        disabled={submission.contract_sent}
                        style={{
                          padding: '8px 24px',
                          background: submission.contract_sent ? '#666' : '#FFD700',
                          border: 'none',
                          borderRadius: '4px',
                          color: submission.contract_sent ? 'white' : 'black',
                          cursor: submission.contract_sent ? 'not-allowed' : 'pointer',
                          fontWeight: 'bold',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {submission.contract_sent ? 'Contract Sent ✓' : 'Send Contract'}
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AcceptedSubmissions; 