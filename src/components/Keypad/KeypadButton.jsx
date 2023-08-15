import React from 'react';
import './Keypad.css'

const KeypadButton = ({ value, onClick }) => {
  return (
    <button onClick={() => onClick(value)}>{value}</button>
  );
};

export default KeypadButton;
