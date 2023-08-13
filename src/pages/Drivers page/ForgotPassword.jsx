import React from 'react'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import "./DriversPage.css"


const ForgotPassword = () => {
  return (
    <div>
         <div className='NavTop'>
     <div className='iconEllipse'>
     <Icon icon="material-symbols:arrow-back" color="#0c3ead" height={"24px"} width={"24px"} />
     </div>
      </div>

      <div className='FormPage'>
        <h3 className='ForgottenPasswordText'><b>Forgotten Password</b></h3>
        <p className='ForgottenPasswordSubText'>Don't worry it occurs. Please enter the Phone number  linked with your account</p>
        <div className='PersonalForm'>
          <form action="">
          <div className='InputFields' style={{marginBottom : '0px'}}>
                <label className='LabelNames' for="DriversLicense">Enter your phone number</label>
                <input className='Fields' type="tel" name="PhoneNO" id="PhoneNO"/>
              </div>
              <input className='SignUpBtn' type="submit" value="Send Code" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword