import React from 'react'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import "./DriversPage.css"


const DriversProfile = () => {
  return (
    <div>
        
        <div className='NavTop'>
     <div className='iconEllipse'>
     <Icon icon="material-symbols:arrow-back" color="#0c3ead" height={"24px"} width={"24px"} />
     </div>
      <h6 className='DetailsNavTopText'>Driver's Profile</h6>
      </div>
    </div>
  )
}

export default DriversProfile