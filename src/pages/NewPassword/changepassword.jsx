import React, { useState } from 'react';
import './NewPassword.css';
import PasswordInput from '../../components/Password/Password';
import Header from '../../components/global/Header/Header';

const Changepass = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
    setError('');
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setError('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
    } else if (oldPassword === newPassword) {
      setError('New password cannot be the same as the old password');
    } else {
      // Passwords match and old password is different - perform further actions (e.g., submit form)
      setError('');
    }
  };

  return (
    <div className='NewPassword'>
      <Header title={'Change Password'} />

      <div className='Whitebox'>
        <p className='text'>New Password</p>
        <p className='text2'>Please enter your new password</p>

        <div>
          <form onSubmit={handleSubmit}>
            <div className='InputFields'>
              <label htmlFor='oldPassword' className='labelpass'>
                Old Password
              </label>
              <PasswordInput value={oldPassword} onChange={handleOldPasswordChange} />
            </div>
            <div className='InputFields'>
              <label htmlFor='newPassword' className='labelpass3'>
                New Password
              </label>
              <PasswordInput value={newPassword} onChange={handleNewPasswordChange} />
            </div>
            <div className='InputFields'>
              <label htmlFor='confirmPassword' className='labelpass2'>
                Confirm Password
              </label>
              <PasswordInput value={confirmPassword} onChange={handleConfirmPasswordChange} />
            </div>
            {error && <div className='error-message'>{error}</div>}
            <input type='submit' className='SendBtn' value='Confirm Password' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Changepass;
