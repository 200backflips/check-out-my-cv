import React from 'react';
import './Button.scss';

const Button = ({ buttonText = '', linkTo = '#' }) => {
  return (
    <a href={linkTo} className="Button">
      {buttonText}
    </a>
  );
};

export default Button;
