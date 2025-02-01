import React, { useState } from 'react';
import supabase from '../lib/supabaseClient';

const DemoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    songName: '',
    songLink: '',
    notes: '',
    privacy: false
  });
  const [status, setStatus] = useState({ message: '', isError: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Get user's IP address
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const { ip } = await ipResponse.json();
      
      // Check submission count for today
      const today = new Date().toISOString().split('T')[0];
      const { data: submissions } = await supabase
        .from('form_submissions_log')
        .select('submission_count')
        .eq('ip_address', ip)
        .eq('submission_date', today)
        .single();

      if (submissions && submissions.submission_count >= 3) {
        setStatus({
          message: 'Daily submission limit (3) reached. Please try again tomorrow.',
          isError: true
        });
        return;
      }

      // Insert or update submission log
      const { error: logError } = await supabase
        .from('form_submissions_log')
        .upsert({
          ip_address: ip,
          submission_date: today,
          submission_count: submissions ? submissions.submission_count + 1 : 1
        }, {
          onConflict: 'ip_address,submission_date'
        });

      if (logError) throw logError;

      // Insert form submission
      const { error: submitError } = await supabase
        .from('form_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          song_name: formData.songName,
          song_link: formData.songLink,
          notes: formData.notes
        });

      if (submitError) throw submitError;

      setStatus({ message: 'Form submitted successfully!', isError: false });
      setFormData({
        name: '',
        email: '',
        songName: '',
        songLink: '',
        notes: '',
        privacy: false
      });
    } catch (error) {
      console.error('Error:', error);
      setStatus({ 
        message: 'Error submitting form. Please try again.', 
        isError: true 
      });
    }
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  return (
    <div id="demo-drop" style={{
      width: '100%',
      maxWidth: '800px',
      margin: '100px auto',
      padding: '40px',
      color: 'white',
      position: 'relative',
      zIndex: 2,
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '10px',
      background: 'rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)'
    }}>
      {/* Logo/Icon */}
      <div style={{
        width: '50px',
        height: '50px',
        margin: '0 auto 30px auto',
      }}>
        <img src="/images/logo.png" alt="Icon" style={{ width: '100%' }} />
      </div>

      {/* Title */}
      <h2 style={{
        fontSize: '32px',
        textAlign: 'center',
        marginBottom: '10px'
      }}>
        Send your demo and
      </h2>
      <p style={{
        fontSize: '20px',
        textAlign: 'center',
        marginBottom: '50px',
        opacity: '0.7'
      }}>
        be a part of our journey
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px'
      }}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            padding: '15px 0',
            color: 'white',
            fontSize: '16px'
          }}
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            padding: '15px 0',
            color: 'white',
            fontSize: '16px'
          }}
        />

        <input
          type="text"
          name="songName"
          value={formData.songName}
          onChange={handleChange}
          placeholder="Name of song"
          required
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            padding: '15px 0',
            color: 'white',
            fontSize: '16px'
          }}
        />

        <input
          type="text"
          name="songLink"
          value={formData.songLink}
          onChange={handleChange}
          placeholder="Song link (Soundcloud, Dropbox, etc)"
          required
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            padding: '15px 0',
            color: 'white',
            fontSize: '16px'
          }}
        />

        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Additional notes"
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            padding: '15px 0',
            color: 'white',
            fontSize: '16px',
            minHeight: '100px',
            resize: 'vertical'
          }}
        />
        <button
          type="submit"
          style={{
            background: 'white',
            color: 'black',
            border: 'none',
            padding: '15px 30px',
            fontSize: '18px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Submit
        </button>

        {status.message && (
          <p style={{
            textAlign: 'center',
            color: status.isError ? '#ff0000' : '#4CAF50',
            marginTop: '20px'
          }}>
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default DemoForm; 