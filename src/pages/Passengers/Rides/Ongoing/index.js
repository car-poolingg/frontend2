import React from "react";
import Header from "../../../../components/global/Header/Header";
import DriverCard from "../../../../components/passengers/DriverCard";
import { Button } from "react-bootstrap";
import "./OngoingRides.css";
function OngoingRides() {
  return (
    <div className='ongoing-container'>
      <Header title={"Ongoing Rides"} menuType={true} />
      <DriverCard variant='ongoing' />
      <div className='btn-container px-3'>
        <Button variant='primary' className='btn-block '>
          Share Driver’s Information
        </Button>
      </div>
    </div>
  );
}

export default OngoingRides;
