import React from 'react';
import './Buttons.scss';

export const Button = ({
  title = '',
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
      {title}
    </a>
  );
};

export const SubmitButton = ({ title = '', icon = null }) => {
  return (
    <button type="submit" className="Button">
      {icon}
      {title}
    </button>
  );
};
