import React from 'react';
import './Button.scss';

const Button = ({ buttonText = '', onClick = () => null }) => {
  return (
    <div className="Button" onClick={onClick}>
      {buttonText}
    </div>
  );
};

export default Button;
