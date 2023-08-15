import React from "react";
import { Route, Routes } from "react-router-dom";
import AvailableDrivers from "../AvailableDrivers";
import Profile from "../Profile";
import Notifications from "../Notifications";

function PassengerHome() {
  return (
    <Routes>
      <Route
        path='availableDrivers'
        element={<AvailableDrivers />}
      />
      <Route path='profile' element={<Profile />} />
      <Route
        path='notifications'
        element={<Notifications />}
      />
    </Routes>
  );
}

export default PassengerHome;
