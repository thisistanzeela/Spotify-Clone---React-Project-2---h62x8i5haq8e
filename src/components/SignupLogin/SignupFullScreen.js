import React from 'react';
import { Icon } from '../../Icons';
import Singup from './Signup';
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
    width: '100%',
    height: '100%',
    background: '#fff',
    color: 'black',
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
        <Singup />
      </div>
    </div>
  );
}

export default LoginFullScreen;
