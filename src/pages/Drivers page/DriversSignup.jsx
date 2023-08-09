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
            <form action="">
              <div className='InputFields'>
              <label for="phone">Phone Number</label>
              <input type="tel" name="phone" id="phone" placeholder="+234" />
              </div>
              <div className='InputFields'>
              <label for="email">E-mail</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className='InputFields'>
                <label for="City">City</label>
                <input type="text" name="City" id="City" />
              </div>
              <div className='InputFields'>
                <label for="Password">Password</label>
                <input type="password" name="Password" id="Password" />
              </div>
              <div className='InputFields'>
                <label for="ConfirmPassword">Confirm Password</label>
                <input type="password" name="ConfirmPassword" id="ConfirmPassword" />
              </div>

              <input type="submit" value="Sign Up" />
            </form>
  

        </div>
      </div>
      </div>
  )
}

export default DriversLogin