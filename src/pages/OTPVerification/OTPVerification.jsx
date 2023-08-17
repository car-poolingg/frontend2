import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getData } from '../../utils/api.storage';
import StorageConstants from '../../utils/constants.storage';
import "./OTPVerification.css"
import Header from "../../components/global/Header/Header"
import axiosInstance, { logAxiosResponse } from '../../utils/request';
import { storeData } from '../../utils/api.storage';

const VerificationInput = () => {

  const navigate = useNavigate()
  const params = useParams()
  const emailRaw = getData(StorageConstants.Email)
  const email = emailRaw.success ? emailRaw.data : params.email

  const [digits, setDigits] = useState(['', '', '', '']);
  const [activeSlot, setActiveSlot] = useState(0);

  const handleDigitClick = (digit) => {
    const updatedDigits = [...digits];
    if (activeSlot < updatedDigits.length) {
      updatedDigits[activeSlot] = digit;
      setDigits(updatedDigits);
      setActiveSlot(activeSlot + 1);
    }
  };

  const handleClearClick = () => {
    const updatedDigits = [...digits];
    if (activeSlot > 0) {
      updatedDigits[activeSlot - 1] = '';
      setActiveSlot(activeSlot - 1);
      setDigits(updatedDigits);
    }
  };

  const handleVerify = async (ev) => {
    ev.preventDefault()
    try {
      if (digits.some(value => !value))
        throw new Error("Fill the token please")
      if (!email)
        throw new Error("No email found, link broken!")
      // form valid, proceed
      const response = await axiosInstance.post(
        "/auth/password-token",
        {
          email,
          token: digits.join("")
        }
      )
      // verify successful, proceed
      alert(JSON.stringify(response.data.msg))
      storeData(StorageConstants.Email, email)
      navigate('/Profile')
    } catch (errorVerifying) {
      logAxiosResponse(errorVerifying)
    }
  }

  return (
    <div className='code'>
      {/* <div className='BlueContainer'>
            <div className='WhiteContainer'>
                <a href=""><img className='arrow-left' src="/Assets/arrow-left.svg" alt="arrow-left" /></a>
            </div>
        </div>  */}
      <Header />
      <div className='whitebox'>
        <div className='top'>
          <p className='verify'>Verify</p>
          <p className='sent'>We have sent an OTP  to your email address {email}</p>

          <div className="verification-container">
            <form onSubmit={handleVerify}>
              <div className="verification-input">
                {digits.map((digit, index) => (
                  <div key={index} className={`digit ${index === activeSlot ? 'active' : ''}`}>
                    {digit}
                    {index === activeSlot && <div className="cursor" />}
                  </div>
                ))}
              </div>
              <p className='resend'>Resend OTP?</p>
              <input className='SendBtn' type="submit" value="Confirm Code" />
            </form>
          </div>
        </div>
        <div className="keypad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'key', 0].map((digit) => (
            <button key={digit} onClick={digit === 'key' ? null : () => handleDigitClick(digit)}>
              {digit === 'key' ? '' : digit}
            </button>
          ))}
          <button onClick={handleClearClick}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default VerificationInput;
