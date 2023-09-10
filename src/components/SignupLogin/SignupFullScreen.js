import React from 'react';
import { Icon } from '../../Icons';
import SignupForm from './Signup'; // Import the SignupForm component
import { useNavigate } from 'react-router-dom';

function LoginFullScreen() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1000,
  };

  const modalStyle = {
    color: 'black',
    background: '#fff',
    padding: '20px', 
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    overflowY: 'auto', 
    maxHeight: '100vh',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '30px',
    right: '30px',
    cursor: 'pointer',
    fontSize: '16px',
    color: 'black',
  };

  return (
    <div style={modalOverlayStyle} className="modal-overlay">
      <div style={modalStyle} className="modal">
        <button style={closeButtonStyle} className="close-button" onClick={handleGoBack}>
          <Icon name="cross" size={20} />
        </button>
        <SignupForm  />
      </div>
    </div>
  );
}

export default LoginFullScreen;
