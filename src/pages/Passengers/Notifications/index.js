import React from "react";
import Header from "../../../components/global/Header/Header";
import "./Notifications.css";
import NotificationCard from "../../../components/passengers/NotificationCard";

function Notifications() {
  return (
    <div className='notifications-page-container'>
      <Header title={"Notifications"} menuType={true} />
      <div className='p-3'>
        <h5>Today</h5>
        <NotificationCard
          username={"James Onigidi"}
          message={"sent you a request."}
        />
      </div>
    </div>
  );
}

export default Notifications;
