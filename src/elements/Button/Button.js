import React from 'react';
import './Button.scss';

const Button = ({
  buttonText = '',
  linkTo = '#',
  openInNewTab = false,
  icon = null,
}) => {
  return (
    <a
      href={linkTo}
      className="Button"
      target={openInNewTab ? '_blank' : undefined}
      rel="noreferrer noopener"
    >
      {icon}
      {buttonText}
    </a>
  );
};

export default Button;
