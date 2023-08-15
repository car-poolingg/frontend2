import React from "react";
import { Route, Routes } from "react-router-dom";
import AvailableDrivers from "../AvailableDrivers";
import Profile from "../Profile";

function PassengerHome() {
  return (
    <Routes>
      <Route
        path='availableDrivers'
        element={<AvailableDrivers />}
      />
      <Route path='profile' element={<Profile />} />
    </Routes>
  );
}

export default PassengerHome;
