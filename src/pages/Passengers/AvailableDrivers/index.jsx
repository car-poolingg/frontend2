import React, { useEffect, useState } from "react";
import "../../../bootstrap.min.css";
import Header from "../../../components/global/Header/Header";
import DriverCard from "../../../components/passengers/DriverCard";
import "./AvailableDrivers.css";
import { getData } from "../../../utils/api.storage";
import StorageConstants from "../../../utils/constants.storage";
import { useNavigate } from "react-router-dom";


function AvailableDrivers() {
  const navigate = useNavigate()

  const [availableRides, setAvailableRides] = useState([])
  useEffect(() => {
    const rawAvailableRides = getData(StorageConstants.AvailableRides)
    if (!rawAvailableRides.success) {
      alert("No rides found")
      navigate("/passengers")
    }
    setAvailableRides(rawAvailableRides.data)
  }, [])

  return (
    <div className='main-bg'>
      <Header title='Available Drivers' />
      <DriverCard pending />
      {
        availableRides.map((availableRide, index) => {
          return <DriverCard
            key={index}
            {...availableRide}
            pending={availableRide.pending ?? true}
          />
        })
      }
    </div>
  );
}

export default AvailableDrivers;
