// import React from 'react';
// import Login from './Login';

// const modalOverlayStyle = {
//   position: 'fixed',
//   top: 40,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   zIndex: 1000,  
// };

// const modalStyle = {
//     background: "#1C1C1C",
//   padding: '20px',
//   borderRadius: '5px',
//   boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
//   position: 'relative',
// };

// const closeButtonStyle = {
//   position: 'absolute',
//   top: '30px',
//   right: '10px',
//   background: 'none',
//   border: 'none',
//   cursor: 'pointer',
//   fontSize: '16px',
//   color: '#333',
// };

// function LoginFullScreen() {
//   return (
//     <div style={modalOverlayStyle} className="modal-overlay">
//       <div style={modalStyle} className="modal">
//         <button style={closeButtonStyle} className="close-button">
//           <span style={{marginTop:"120px",marginRight:"50px", color :"white"}}>Close</span>
//         </button>
//         <Login />
//       </div>
//     </div>
//   );
// }

// export default LoginFullScreen;


import React from 'react';
import {Icon} from '../../Icons'
import Login from './Login';
import { useNavigate } from 'react-router-dom';

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1000,
};

const modalStyle = {
  background: '#1C1C1C',
  // padding: '20px',
  // borderRadius: '5px',
  // boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  position: 'relative',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '30px',
  right: '30px',
  cursor: 'pointer',
  fontSize: '16px',
  color: '#fff',
};

function LoginFullScreen() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div style={modalOverlayStyle} className="modal-overlay">
      <div style={modalStyle} className="modal">
        <button style={closeButtonStyle} className="close-button" onClick={handleGoBack}>
        <Icon name="cross" size={20} />
        </button>
        <Login />
      </div>
    </div>
  );
}

export default LoginFullScreen;


















