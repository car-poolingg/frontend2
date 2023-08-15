import React from "react";
import "../../bootstrap.min.css";
import "./SignUp.css";
import NavBar from "../../components/Nav/Nav";
import PasswordInput from "../../components/Password/Password";
// import RememberMeButton from '../../components/RemeberMe/RememberMe';

const SignUpPage = () => {
  return (
    <div className='SignUp-page'>
      <NavBar />
      <div className='flex'>
        <img
          className='CarImage'
          src='/Assets/car.png'
          alt='Car'
        />
      </div>
      <div className='FormPage'>
        <div>
          <p className='text'>
            Log <span className='text2'>in</span>
          </p>
        </div>
        <div class='google-button-container'>
          <button class='google-button'>
            <img
              src='/Assets/Google.svg'
              alt='Google Icon'
              className='google-icon'
            />
            <p className='googletext'>
              Use a Google Account
            </p>
          </button>
        </div>
        <div class='divider-container'>
          <span class='divider-line'></span>
          <span class='divider-text'>or</span>
          <span class='divider-line'></span>
        </div>
        <div className='RegistrationInputs'>
          <form action=''>
            <div className='InputFields'>
              <label for='email' className='labelemail'>
                First Name
              </label>
              <input
                className='email'
                type='email'
                id='email'
                name='email'
              />
            </div>
            <div className='InputFields'>
              <label for='email' className='labelemail'>
                Last Name
              </label>
              <input
                className='email'
                type='email'
                id='email'
                name='email'
              />
            </div>
            <div className='InputFields'>
              <label for='email' className='labelemail'>
                Email Address
              </label>
              <input
                className='email'
                type='email'
                id='email'
                name='email'
              />
            </div>
            {/* <div className='InputFields'>
                <label for="email" className='labelemail'>Email Address</label>
                    <input className='email' type="email" id="email" name="email" />
                </div> */}
            <div className='InputFields'>
              <label for='email' className='labelemail'>
                Phone Number
              </label>
              <input
                className='email'
                type='email'
                id='email'
                name='email'
              />
            </div>

            <div className='InputFields'>
              <label for='Password' className='labelpass'>
                Password
              </label>
              <PasswordInput />
            </div>

            <div className='InputFields'>
              <label for='Password' className='labelpass'>
                Confirm Password
              </label>
              <PasswordInput />
            </div>
            {/* <RememberMeButton/> */}
            <input
              className='LoginBtn'
              type='submit'
              value='Sign Up'
            />
          </form>
          <div className='text4'>
            <div className='checkrem'>
              <input type='checkbox' className='check' />
              <span className='remember'>
                I agree to the{" "}
                <span className='Terms'>
                  Terms & Conditions
                </span>
              </span>
            </div>
            {/* <a href='' className='forgotten'>Forgotten Password?</a> */}
          </div>
          <div className='PrivacyFooter'>
            {/* <p>By signing up, you accept our <br /> <span><a href="TermsOfService">Terms of Service and Privacy Policy</a></span></p> */}
            <p className='account'>
              Already a user?{" "}
              <span>
                <a href='' className='signup'>
                  Log in
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
