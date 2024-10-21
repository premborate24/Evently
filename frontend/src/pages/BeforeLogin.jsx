import React from 'react';
import imagess from '../assets/image/Rectangle.png';
import './BeforeLogin.css'; // Import external CSS for styles
import logo from '../assets/image/blacklogo.jpg';
import user from '../assets/image/user.png';
import vendor from '../assets/image/vendor.png';
import AuthForm from '../components/Login';
import { useNavigate } from 'react-router-dom';

const BeforeLogin = () => {
  const navigate = useNavigate();
  const handleVendorLogin = () => {
    navigate("/VendorLogin"); // Navigate to VendorLogin when button clicked
  };
  return (
    <div className="log_container">
      <div className="main_container" style={{ backgroundImage: `url(${imagess})` }}>
        <img src={logo} alt="Logo" />
        <div className="white_container">
          <div className="login-section">
            <div className="login-box">
              <img src={user} alt="User Login" className="login-image" />
              <h2>Login as a User!</h2>
              <button className="login-button" onClick={() => navigate('/login')}>Login Now</button>
            </div>
            <div className="vertical-line"></div>
            <div className="login-box">
              <img src={vendor} alt="Vendor Login" className="login-image" />
              <h2>Login as a Vendor!</h2>
              <button className="login-button" onClick={handleVendorLogin}>Login Now</button> {/* Added navigation for vendor login */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeLogin;
