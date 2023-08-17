import React, { useEffect, useState } from "react";
import Header from "../../../components/global/Header/Header";
import "./profile.css";
import SettingOption from "../../../components/global/SettingOption";
import { useNavigate } from "react-router-dom";
import { authAxiosInstance, logAxiosResponse } from "../../../utils/request";
import { logOut } from "../../../utils/user.utils";

function Profile() {
  const navigate = useNavigate();

  // can make custom hook here soon
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    createdAt: "",
    isVerified: {}
  })

  const fetchUser = async () => {
    try {
      const rawUserData = await authAxiosInstance("/user")
      setUserDetails(rawUserData.data.user)
    } catch (errorProfile) {
      logAxiosResponse(errorProfile)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className='profile-container'>
      <Header title={<h4>Profile</h4>} extend={true} />
      <div className='pt-5'>
        <div className='d-flex align-items-center flex-column  profile-modal bg-white shadow rounded-lg mx-3'>
          <img
            src='/Assets/editing.svg'
            className='edit-icon'
            alt='edit'
            onClick={() => navigate("/EditProfile")}
          />
          <div className='picture-container'>
            <img
              className='DisplayPicture'
              src='/Assets/Ellipse.svg'
              alt='DisplayPicture'
            />
          </div>
          <div className=''>
            <h4 className='mx-auto w-fit text-black name-text'>
              {userDetails.firstName} {userDetails.lastName}
            </h4>
            <span className='text-gray email-text'>
              {userDetails.email}
            </span>
          </div>
          <hr className='hr' />
          <SettingOption
            name='Verify Identity'
            leftIon={
              <img
                src='/Assets/identity-card.svg'
                alt='identity-card'
                className='mr-2'
              />
            }
            arrow={true}
          />
          <SettingOption
            name='Password'
            leftIon={
              <img
                src='/Assets/key.svg'
                alt='key'
                className='mr-2'
              />
            }
            arrow={true}
          />
          <SettingOption
            name='Support'
            leftIon={
              <img
                src='/Assets/star.svg'
                alt='star'
                className='mr-2'
              />
            }
            arrow={true}
          />
          <SettingOption
            name='Log Out'
            onClick={() => logOut(navigate)}
            leftIon={
              <img
                src='/Assets/logout.svg'
                alt='logout'
                className='mr-2'
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
