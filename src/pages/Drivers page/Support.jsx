import React from 'react'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import "./DriversPage.css"

const Support = () => {
  return (
    <div>
                   <div className='NavTop'>
     <div className='iconEllipse'>
     <Icon icon="material-symbols:arrow-back" color="#0c3ead" height={"24px"} width={"24px"} />
     </div>
      <h6 className='DetailsNavTopText'>Current Rides</h6>
      </div>
      <div className='DriversDetails'>
      <div className='SupportContact'>
      <Icon icon="ph:phone-call" color="rgba(0, 0, 0, 0.51)" width={"25px"} height={"25"} />
      <p className='SupportText'>Call us</p>
      </div>
      <div className='SupportContact'>
      <Icon icon="material-symbols:chat-outline" color="rgba(0, 0, 0, 0.51)" width={"25"} height={"25"} />
      <p className='SupportText'>Chat with us</p>
      </div>
      <div className='SupportContact'>
      <Icon icon="mingcute:mail-send-line" color="rgba(0, 0, 0, 0.51)" width={"25"} height={"25"} />
      <p className='SupportText'>Send us an email</p>
      </div>
      </div>

      
    </div>
  )
}

export default Support