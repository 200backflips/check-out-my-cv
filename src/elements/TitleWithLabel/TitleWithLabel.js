import React from 'react';
import './TitleWithLabel.scss';

const TitleWithLabel = ({ title, value }) => {
  return (
    <div className="TitleWithLabel">
      <span>{title}</span>
      <p>{value}</p>
    </div>
  );
};

export default TitleWithLabel;
