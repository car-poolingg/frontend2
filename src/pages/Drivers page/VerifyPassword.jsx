import React from 'react'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import "./DriversPage.css"

const VerifyPassword = () => {
  return (
    <div>
        <div className='NavTop'>
     <div className='iconEllipse'>
     <Icon icon="material-symbols:arrow-back" color="#0c3ead" height={"24px"} width={"24px"} />
     </div>
      </div>

      <div className='FormPage'>
      <h3 className='ForgottenPasswordText'><b>Verify</b></h3>
        <p className='ForgottenPasswordSubText'>Verification code has been sent to your number</p>
        <div className='VerificationCode'>
            <input className='VerifySlots' type="number" name="FN" id="FN" placeholder='5' />
            <input className='VerifySlots' type="number" name="SN" id="SN" placeholder='8' />
            <input className='VerifySlots' type="number" name="TN" id="TN" placeholder='3' />
            <input className='VerifySlots' type="number" name="FTN" id="FTN" placeholder='' />
            
        </div>
        <div>
            <p className='OTP'>Resend OTP?</p>
            <input className='SignUpBtn' type="submit" value="Confirm Code" style={{marginTop: '3%'}} />
        </div>
      </div>

    </div>
  )
}

export default VerifyPassword