import React from 'react';
import './Button.scss';

const Button = ({ buttonText = '', linkTo = '#', color = '#62929a' }) => {
  return (
    <a href={linkTo} className="Button" style={{ backgroundColor: color }}>
      {buttonText}
    </a>
  );
};

export default Button;
