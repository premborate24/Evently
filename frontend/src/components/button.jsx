import React from 'react';
import './Button.css';

const Button = ({ text, onClick, customStyle }) => {
  return (
    <button className="custom-button" onClick={onClick} style={customStyle}>
      {text}
    </button>
  );
};

export default Button;
