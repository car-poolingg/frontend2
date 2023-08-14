import React from 'react'
import './NewPassword.css'
import PasswordInput from "../../components/Password/Password"

const Newpass = () => {
  return (
    <div className='NewPassword'>
        <div className='BlueContainer'>
            <div className='WhiteContainer'>
                <a href=""><img className='arrow-left' src="/Assets/arrow-left.svg" alt="arrow-left" /></a>
            </div>
            <p className='New'>New Password</p>
        </div>

        <div className='Whitebox'>
            <p className='text'>New Password</p>
            <p className='text2'>Please enter your new password</p>

        <div>
        <form action="">
            <div className='InputFields'>
                <label for="email" className='labelpass'>Password</label>
                    <PasswordInput/>
            </div>
            <div className='InputFields'>
                <label for="email" className='labelpass2'>Confirm Password</label>
                    <PasswordInput/>
            </div>
                <input className='SendBtn' type="submit" value="Confirm Password"/>
        </form>
        </div>
        {/* <div className='bottomtext'>
            <p className='text3'><span className='browntext'>Remember Password?</span> <span className='bluetext'><a href="">Log in</a></span></p>
        </div> */}
        </div>        

    </div>
  )
}

export default Newpass