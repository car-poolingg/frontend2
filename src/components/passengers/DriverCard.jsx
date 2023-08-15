import React from "react";
import "../../bootstrap.min.css";
import "./DriverCard.css";
import { Icon } from "@iconify/react";
import { Button } from "react-bootstrap";
function DriverCard({
  name = "Tony Stark",
  picture = "/Assets/RatingPicture.svg",
  passengers = "4",
  rating = 4.4,
  pending = false,
  location = "Campus Gate",
  variant,
}) {
  return (
    <div className=' my-5 py-2 mx-2 bg-white drivers-card '>
      <div className='d-flex my-4 mx-3  driver-card-container'>
        <img
          src={picture}
          width={"50px"}
          height={"50px"}
          alt='profile-pic'
        />
        <div>
          <h6
            className=''
            style={{
              width: "170px",
            }}>
            {name}
          </h6>
          <p className='text-sm text-muted d-flex align-items-center '>
            <span>{rating}</span>
            <img
              src='/Assets/rating-star.svg'
              alt='rating-star'
            />{" "}
          </p>
        </div>
        {variant == "ongoing" ? (
          <div className='actions d-flex align-items-center '>
            <span className='red'>x</span>
            <span className='blue'>✓</span>
          </div>
        ) : (
          <div>
            {pending ? (
              <div className='p-2 status'>
                <span>Pending</span>
              </div>
            ) : (
              <Button
                variant='primary'
                className='status-btn'>
                Request
              </Button>
            )}
          </div>
        )}
      </div>
      <div className='d-flex align-items-center justify-content-between px-3'>
        {variant !== "ongoing" && (
          <>
            {" "}
            <Icon
              icon={"material-symbols:directions-car"}
              color='#161616'
              height={"24px"}
              width={"24px"}
              className='mb-auto'
            />
            <div>
              <span className='text-md ml-2'>
                {" "}
                Toyota Camry
              </span>
              <br />
              <span
                className='font-size-14 ml-2'
                style={{
                  fontSize: "13px",
                  color: "gray",
                  marginRight: "9px",
                }}>
                {passengers} passengers
              </span>
            </div>
          </>
        )}

        <div
          className=''
          // style={{
          //   marginLeft: "80px",
          // }}
        >
          <Icon
            icon={"material-symbols:location-on-rounded"}
            color='#161616'
            height={"21px"}
            width={"21px"}
            className='mb-auto'
          />
          <span
            className=''
            style={{
              fontWeight: "normal",
              marginLeft: "5px",
            }}>
            {location}
          </span>
        </div>
        {variant === "ongoing" && (
          <div className='d-flex align-items-center'>
            <img src='/Assets/money-2.svg' alt='money' />
            <span className='ml-2'>#500</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default DriverCard;
