import React from 'react'
import { Icon } from '@iconify/react';
import { FaStar } from 'react-icons/fa';
import "../../bootstrap.min.css"
// import './Styles.scss';
import "./DriversPage.css"
import RateDriver from '../../components/Rating/RateDriver';

const RatePassenger = () => {
  return (
    <div>
         <div className='NavTop'>
     <div className='iconEllipse'>
     <Icon icon="quill:hamburger" color="#0c3ead" height={"24px"} width={"24px"} />
     </div>
      <h6 className='DetailsNavTopText'>Rate Passenger</h6>
      </div>
      <div className='DriversPassengerPage'>
        <RateDriver />


        <input className='SignUpBtn' type="submit" value="Submit" style={{marginTop: '80%'}}/>
      </div>

    </div>
  )
}

export default RatePassenger