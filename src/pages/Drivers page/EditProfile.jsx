import React from 'react'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import "./DriversPage.css"


const EditProfile = () => {
  return (
    <div>
        <div className='NavTop'>
     <div className='iconEllipse'>
     <Icon icon="material-symbols:arrow-back" color="#0c3ead" height={"24px"} width={"24px"} />
     </div>
      <h6 className='NavTopText' style={{marginBottom: "0px"}}>Edit Profile</h6>
      </div>

      <div className='FormPage'>
            <img src="public\Ellipse 18.svg" alt="Profile Picture" />
      </div>


    </div>
  )
}

export default EditProfile