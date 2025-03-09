import React, { useState, useEffect } from 'react';
import supabase from '../lib/supabaseClient';
import ReCAPTCHA from "react-google-recaptcha";

const DemoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    songName: '',
    songLink: '',
    instagram: '',
    notes: '',
    privacy: false
  });
  const [status, setStatus] = useState({ message: '', isError: false });
  const [captchaToken, setCaptchaToken] = useState(null);

  useEffect(() => {
    localStorage.clear();
    sessionStorage.clear();
    
    document.cookie.split(";").forEach(function(c) { 
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!captchaToken) {
        setStatus({
          message: 'Please use the captcha to prove you are human.',
          isError: true
        });
        return;
      }

      const { error: submitError } = await supabase
        .from('form_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          song_name: formData.songName,
          song_link: formData.songLink,
          instagram: formData.instagram || '',
          notes: formData.notes || ''
        });

      if (submitError) throw submitError;

      setFormData({
        name: '',
        email: '',
        songName: '',
        songLink: '',
        instagram: '',
        notes: '',
        privacy: false
      });
      
      e.target.reset();
      setCaptchaToken(null);
      
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
      
      setStatus({ message: 'Form submitted successfully!', isError: false });
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

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
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
      <form 
        onSubmit={handleSubmit} 
        style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
        autoComplete="off"
        spellCheck="false"
        data-form-type="other"
      >
        <style>
          {`
            input:-webkit-autofill,
            input:-webkit-autofill:hover,
            input:-webkit-autofill:focus,
            input:-webkit-autofill:active {
              -webkit-box-shadow: 0 0 0 30px black inset !important;
              -webkit-text-fill-color: white !important;
              transition: background-color 5000s ease-in-out 0s;
            }
          `}
        </style>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
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
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
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
          autoComplete="new-password"
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
          autoComplete="new-password"
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
          name="instagram"
          value={formData.instagram}
          onChange={handleChange}
          placeholder="Your Instagram"
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

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <ReCAPTCHA
            sitekey="6LeC-u4qAAAAAEyjaojIdb8jQWlrixJvRn08phl8"
            onChange={handleCaptchaChange}
            theme="dark"
          />
        </div>

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