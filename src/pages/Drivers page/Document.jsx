import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../../bootstrap.min.css";
// import './Styles.scss';
import "./DriversPage.css";
import Header from "../../components/global/Header/Header";
import FileChooser from "../../components/Upload/uploadfile";
import axiosInstance from "../../utils/request";
import CustomAlert from "../../components/global/CustomAlert";
import { Alert } from "react-bootstrap";
import { boolAnyEmptyInList } from "../../utils/validators";

const Document = () => {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const [documentState, setDocumentState] = useState({
    dinspection: "",
    dinsurance: "",
    fViewPhoto: "",
    bViewPhoto: "",
    interiorPhoto: "",
  });
  const inputOption = (ev) => {
    setDocumentState({
      ...documentState,
      [ev.target.name]: ev.target.files[0],
    }); // 👈️ get the file
  };

  /**
   * Handles the file upload.
   * @param {Object} ev - The event object.
   */
  const handleUpload = async (ev) => {
    ev.preventDefault();
    console.log(documentState);
    if (boolAnyEmptyInList(Object.values(documentState))) {
      alert("Please fill all fields");
    }
    try {
      const formData = new FormData();
      formData.append(
        "dinspection",
        documentState.dinspection
      );
      formData.append(
        "dinsurance",
        documentState.dinsurance
      );
      formData.append(
        "fViewPhoto",
        documentState.fViewPhoto
      );
      formData.append(
        "bViewPhoto",
        documentState.bViewPhoto
      );
      formData.append(
        "interiorPhoto",
        documentState.interiorPhoto
      );
      await axiosInstance.post("/drive/upload", formData);
      console.log("Upload successful!");
      setShow(true);
    } catch (error) {
      console.error("Error uploading documents:", error);
    }
  };
  return (
    <>
      <Alert
        variant='error'
        show={showAlert}
        onClose={() => setShowAlert(false)}
        dismissible>
        <Alert.Heading>
          Oh snap! You got an error!
        </Alert.Heading>
      </Alert>
      <CustomAlert show={show} handleClose={handleClose} />
      <div>
        {/* <div className='NavTop'>
     <div className='iconEllipse'>
     <Icon icon="material-symbols:arrow-back" color="#0c3ead" height={"24px"} width={"24px"} />
     </div>
      <h6 className='DetailsNavTopText'>Document</h6>
      </div> */}
        <Header title={"Document"} />

        <form
          onSubmit={handleUpload}
          className='DriversDetails'>
          <p>
            To proceed with your driver sign-up, we are
            required by law to collect certain documents
            from you. You can submit scanned copies or
            high-quality photos of these documents for
            verification purposes.
          </p>
          <div className='DocumentUpload'>
            <h4 className='DocumentText'>
              Vehicle Inspection Policy
            </h4>
            <p className='DocumentSubText'>
              Upload a snapshot of your vehicle inspection
              policy
            </p>
            {/* <button className='Uploadbutton'>+Upload file</button> */}
            <FileChooser
              name='dinspection'
              inputOption={inputOption}
            />

            <hr />
          </div>
          <div className='DocumentUpload'>
            <h4 className='DocumentText'>
              Vehicle Insurance Policy
            </h4>
            <p className='DocumentSubText'>
              Upload a snapshot of your vehicle insurance
              policy
            </p>
            {/* <button className='Uploadbutton'>+Upload file</button> */}
            <FileChooser
              name='dinsurance'
              inputOption={inputOption}
            />

            <hr />
          </div>
          <div className='DocumentUpload'>
            <h4 className='DocumentText'>
              Front photo of your car
            </h4>
            <p className='DocumentSubText'>
              Upload a clear front photo that captures the
              plate number.
            </p>
            {/* <button className='Uploadbutton'>+Upload file</button> */}
            <FileChooser
              name='fViewPhoto'
              inputOption={inputOption}
            />

            <hr />
          </div>
          <div className='DocumentUpload'>
            <h4 className='DocumentText'>
              Back photo of your car
            </h4>
            <p className='DocumentSubText'>
              Upload a clear back photo that captures the
              plate number.
            </p>
            {/* <button className='Uploadbutton'>+Upload file</button> */}
            <FileChooser
              name='bViewPhoto'
              inputOption={inputOption}
            />

            <hr />
          </div>
          <div className='DocumentUpload'>
            <h4 className='DocumentText'>
              Interior Photo of your car
            </h4>
            <p className='DocumentSubText'>
              Upload a clear interior photo of your car
            </p>
            {/* <button className='Uploadbutton'>+Upload file</button> */}
            <FileChooser
              name='interiorPhoto'
              inputOption={inputOption}
            />

            <hr style={{ backgroundColor: "black" }} />
          </div>
          <input
            className='SignUpBtn'
            type='submit'
            value='Submit'
          />
        </form>
      </div>
    </>
  );
};

export default Document;
