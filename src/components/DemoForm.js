import React from 'react';

const DemoForm = () => {
  return (
    <div id="demo-form" style={{
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
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px'
      }}>
        <input
          type="text"
          placeholder="Your Name"
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
          placeholder="Your Email"
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
          placeholder="Name of song"
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
          placeholder="Song link (Soundcloud, Dropbox, etc)"
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

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <input
            type="checkbox"
            id="privacy"
            style={{
              width: '20px',
              height: '20px'
            }}
          />
          <label htmlFor="privacy">
            I agree to the <a href="/privacy" style={{ color: 'white' }}>Privacy Policy</a>
          </label>
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
      </form>
    </div>
  );
};

export default DemoForm; 