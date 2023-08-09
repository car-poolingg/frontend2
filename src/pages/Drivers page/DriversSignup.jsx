import React from 'react'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
import "./DriversSignup.css"

const DriversLogin = () => {
  return (
    <div>
      <div className='NavTop'>
     <div className='iconEllipse'>
     <Icon icon="material-symbols:arrow-back" color="#0c3ead" />
     </div>
      <h6 className='NavTopText'>Drive with Tag</h6>
      </div>

      
      <div className='FormPage'>
        <h2>Hello!</h2>
        <p>Sign up as a driver below</p>

        <div className='RegistrationInputs'>
          <p>Phone number</p>
          <input type="number" name="PhoneNumber" id="PhoneNO" />

        </div>
      </div>
      </div>
  )
}

export default DriversLogin