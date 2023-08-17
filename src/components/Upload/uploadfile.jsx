import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import "./uploadfile.css";

// const FileChooser = () => {
//     const [selectedFile, setSelectedFile] = useState(null);

//     const handleFileChange = (event) => {
//       const file = event.target.files[0];
//       setSelectedFile(file);
//     };

//     return (
//       <div className="file-chooser">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           style={{ display: 'none' }}
//           id="file-input"
//         />
//         <label htmlFor="file-input">
//           <button className="choose-button">Choose File</button>
//         </label>
//         {selectedFile && (
//           <p>Selected file: {selectedFile.name}</p>
//         )}
//       </div>
//     );
//   };

//   export default FileChooser;

const FileChooser = () => {
  const inputRef = useRef(null);
  const [fileState, setFileState] = useState(null);

  const handleClick = () => {
    // 👇️ open file input box on click of another element
    inputRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileState(file);
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  return (
    <div className='file-chooser'>
      <label>
        <button
          onClick={handleClick}
          className='choose-button'>
          +Upload file
        </button>
        <input
          ref={inputRef}
          type='file'
          accept='image/*'
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </label>
      {fileState && <p>Selected file: {fileState.name}</p>}
    </div>
  );
};

export default FileChooser;
