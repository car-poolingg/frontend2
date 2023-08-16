import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@iconify/react';
import './Password.css';

const PasswordInput = ({
  value,
  name,
  onChange
}) => {
    const [showPassword, setShowPassword] = useState(false);
  
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
  
    return (
      <div className="password-container">
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          name={name}
        //   placeholder="Enter password"
          className="password-input"
        />
        <span className="password-toggle" onClick={handleTogglePassword}>
          {showPassword ? <Icon icon="ph:eye" width="20" height="20" /> : <Icon icon="ph:eye-slash" width="20" height="20" />}
        </span>
      </div>
    );
  };

  
export default PasswordInput;