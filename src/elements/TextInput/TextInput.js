import React from 'react';
import './TextInput.scss';

const TextInput = ({ placeholder = '' }) => {
  return (
    <div className="TextInput">
      <input type="text" required />
      <label>{placeholder}</label>
    </div>
  );
};

export default TextInput;
