import React from 'react'
import { Icon } from '@iconify/react';
import { FaStar } from 'react-icons/fa';
import "../../bootstrap.min.css"
// import './Styles.scss';
import "./DriversPage.css"
import RatePasseng from '../../components/Rating/RatePasseng';

const RatingDriver = () => {
  return (
    <div>
         <div className='NavTop'>
     <div className='iconEllipse'>
     <Icon icon="quill:hamburger" color="#0c3ead" height={"24px"} width={"24px"} />
     </div>
      <h6 className='DetailsNavTopText'>Rate Driver</h6>
      </div>
      <div className='DriversPassengerPage'>
        <RatePasseng />


        <input className='SignUpBtn' type="submit" value="Submit" style={{marginTop: '80%'}}/>
      </div>

    </div>
  )
}

export default RatingDriver