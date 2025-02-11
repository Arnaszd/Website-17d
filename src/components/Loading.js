import React from 'react';

const Loading = ({ page }) => {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      fontSize: '18px',
      zIndex: 1000
    }}>
      Loading {page}...
    </div>
  );
};

export default Loading; 