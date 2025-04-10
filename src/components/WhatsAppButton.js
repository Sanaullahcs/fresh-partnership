import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  const phoneNumber = '+31623700433'; // Updated phone number (without spaces)

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '10px 15px',
        border: '2px solid #25D366',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        fontWeight: '500',
        fontSize: '16px',
        color: '#000',
        width: 'auto',
        fontFamily: `'Poppins', sans-serif`,
      }}
      onClick={() => window.open(`https://wa.me/${phoneNumber}`, '_blank')}
    >
      <span>Question? Send us a message!</span>
      <div
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '10px',
          position: 'relative',
          border: '3px solid #25D366',
          transform: 'translateX(10px)',
        }}
      >
        <WhatsAppIcon style={{ fontSize: '24px', color: 'white' }} />
      </div>
    </div>
  );
};

export default WhatsAppButton;
