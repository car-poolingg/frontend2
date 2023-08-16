import React, { useState } from "react";
import Header from "../../../components/global/Header/Header";
import "./Notifications.css";
import NotificationCard from "../../../components/passengers/NotificationCard";
import { Button } from "react-bootstrap";
import CustomAlert from "../../../components/global/CustomAlert";

function Notifications() {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  return (
    <div className='notifications-page-container'>
      <Header title={"Notifications"} menuType={true} />
      <div className='p-3'>
        <h5>Today</h5>
        <NotificationCard
          username={"James Onigidi"}
          message={"sent you a request."}
        />
        {/* <Button variant='primary' onClick={handleShow}>
          Launch demo modal
        </Button>
        <CustomAlert
          show={show}
          handleClose={handleClose}
        /> */}
      </div>
    </div>
  );
}

export default Notifications;
