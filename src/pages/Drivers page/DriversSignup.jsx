import React from 'react'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import "./DriversPage.css"

const DriversLogin = () => {
  return (
    <div>
      <div className='NavTop'>
     <div className='iconEllipse'>
     <Icon icon="material-symbols:arrow-back" color="#0c3ead" height={"24px"} width={"24px"} />
     </div>
      <h6 className='NavTopText' style={{marginBottom: "0px"}}>Drive with Tag</h6>
      </div>

      
      <div className='FormPage'>
        <h2 className='Hello'>Hello!</h2>
        <p className='SignUpText'>Sign up as a driver below</p>

        <div className='RegistrationInputs'>
            <form action="">
              <div className='InputFields'>
              <label className='LabelNames' for="phone">Phone Number</label>
              <input className='Fields' type="tel" name="phone" id="phone" placeholder="+234" />
              </div>
              <div className='InputFields'>
              <label className='LabelNames' for="email">E-mail</label>
                <input className='Fields' type="email" id="email" name="email" />
              </div>
              <div className='InputFields'>
                <label className='LabelNames' for="City">City</label>
                <input className='Fields' type="text" name="City" id="City" />
              </div>
              <div className='InputFields'>
                <label className='LabelNames' for="Password">Password</label>
                <input className='Fields' type="password" name="Password" id="Password" />
              </div>
              <div className='InputFields'>
                <label className='LabelNames' for="ConfirmPassword">Confirm Password</label>
                <input className='Fields' type="password" name="ConfirmPassword" id="ConfirmPassword" />
              </div>

              <input className='SignUpBtn' type="submit" value="Sign Up" />

              <div className='PrivacyFooter'>
                <p>By signing up, you accept our <br /> <span><a href="TermsOfService">Terms of Service and Privacy Policy</a></span></p>
              </div>
            </form>
  

        </div>
      </div>
      </div>
  )
}

export default DriversLogin