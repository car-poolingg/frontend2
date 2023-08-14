import React from 'react'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import "./DriversPage.css"

const License = () => {
  return (
    <div>
       <div className='NavTop'>
     <div className='iconEllipse'>
     <Icon icon="material-symbols:arrow-back" color="#0c3ead" height={"24px"} width={"24px"} />
     </div>
      <h6 className='DetailsNavTopText' style={{marginBottom: "0px"}}>Personal information and vehicle details</h6>
      </div>

      <div className='DriversDetails'>
        <p className='LicenseText'>Your national ID and license details will be keep private. </p>
        <div className='PersonalForm'>
          <form action="">
          <div className='InputFields' style={{marginBottom : '0px'}}>
                <label className='LabelNames' for="DriversLicense">Driver License or JTB Form Number</label>
                <input className='Fields' type="text" name="DriversLicense" id="DriversLicense" placeholder='AB235235'/>
              </div>
              <p className='LicenseText'>License number on your Driver’s documents </p>
              <input className='SignUpBtn' type="submit" value="Next" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default License