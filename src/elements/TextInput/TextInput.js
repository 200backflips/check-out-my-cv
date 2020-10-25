import React from 'react';
import './TextInput.scss';

const TextInput = ({ placeholder = '' }) => {
  return (
    <div className="TextInput">
      <span className="TextInput__floating-label">{placeholder}</span>
      <input type="text" />
    </div>
  );
};

export default TextInput;
