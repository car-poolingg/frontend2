import React from 'react'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import "./DriversPage.css";
import FileChooser from '../../components/Upload/uploadfile';

const IdentityVerification = () => {
  return (
    <div>
        <div className='NavTop'>
        <div className='iconEllipse'>
        <Icon icon="material-symbols:arrow-back" color="#0c3ead" height={"24px"} width={"24px"} />
        </div>
        <h6 className='DetailsNavTopText'>Verify your identity</h6>
    </div>
        
        <div className='DriversDetails'>
          <p className='IdentityText'>For easy verification, make sure that the information
          you provided when signing up corresponds with 
          the documents you wish to submit for verification.</p>
          <p className='IdentityText'>If you don't, you can <span style={{color: '#0C3EAD'}}><a href="EditProfile.jsx">Edit Profile</a></span> here.</p>


          <div className='DocumentUpload'>
        <h4 className='DocumentText'>Driver's License</h4>
        <p className='DocumentSubText'>Kindly provide the expiration details of your license and upload the a clear snapshot of it</p>
        {/* <button className='Uploadbutton'>+Upload file</button> */}
        <FileChooser/>

        <hr />

    </div>
    <div className='DocumentUpload'>
        <h4 className='DocumentText'>Proof of Address</h4>
        <p className='DocumentSubText'>Bank Statement or Utility Bill</p>
        {/* <button className='Uploadbutton'>+Upload file</button> */}
        <FileChooser/>

        <hr />

    </div>
    <div className='DocumentUpload'>
        <h4 className='DocumentText'>Take a Selfie</h4>
        <p className='DocumentSubText'>Take a picture with your ID Card</p>
        {/* <button className='Uploadbutton'>+Upload file</button> */}
        <FileChooser/>

        <hr style={{backgroundColor: 'black'}} />

</div>
<input className='SignUpBtn' type="submit" value="Submit Document" />
</div>
    </div>
  )
}

export default IdentityVerification