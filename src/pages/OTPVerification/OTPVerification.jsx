import React, { useState } from 'react';
// import './VerificationInput.css';
import "./OTPVerification.css"

// import React, { useState } from 'react';
// import './VerificationInput.css';

const VerificationInput = () => {
  const [digits, setDigits] = useState(['', '', '', '']);
  const [activeSlot, setActiveSlot] = useState(0);

  const handleDigitClick = (digit) => {
    const updatedDigits = [...digits];
    if (activeSlot < updatedDigits.length) {
      updatedDigits[activeSlot] = digit;
      setDigits(updatedDigits);
      setActiveSlot(activeSlot + 1);
    }
  };

  const handleClearClick = () => {
    const updatedDigits = [...digits];
    if (activeSlot > 0) {
      updatedDigits[activeSlot - 1] = '';
      setActiveSlot(activeSlot - 1);
      setDigits(updatedDigits);
    }
  };

  return (
    <div className='code'>
     <div className='BlueContainer'>
            <div className='WhiteContainer'>
                <a href=""><img className='arrow-left' src="/Assets/arrow-left.svg" alt="arrow-left" /></a>
            </div>
        </div> 
      <div className='whitebox'>
        <p className='verify'>Verify</p>
        <p className='sent'>We have sent an OTP  to your email address yourname@gmail.com</p>
      
    <div className="verification-container">
    <form action="">
    <div className="verification-input">
        {digits.map((digit, index) => (
          <div key={index} className={`digit ${index === activeSlot ? 'active' : ''}`}>
            {digit}
            {index === activeSlot && <div className="cursor" />}
          </div>
        ))}
      </div>
      <p className='resend'>Resend OTP?</p>
      <input className='SendBtn' type="submit" value="Confirm Code"/>
    </form>
    </div>
    </div>
      {/* <div className="keypad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, , 0].map((digit) => (
          <button key={digit} onClick={() => handleDigitClick(digit)}>
            {digit}
          </button>
        ))}
        <button onClick={handleClearClick}>Clear</button>
      </div> */}
        <div className="keypad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'key', 0].map((digit) => (
          <button key={digit} onClick={digit === 'key' ? null : () => handleDigitClick(digit)}>
            {digit === 'key' ? '' : digit}
          </button>
        ))}
        <button onClick={handleClearClick}>Clear</button>
      </div>
    </div>
  );
};

export default VerificationInput;

// // const VerificationInput = () => {
// //   const [digits, setDigits] = useState(['', '', '', '']);

// //   const handleDigitClick = (digit) => {
// //     const updatedDigits = [...digits];
// //     const emptyIndex = updatedDigits.findIndex((d) => d === '');
// //     if (emptyIndex !== -1) {
// //       updatedDigits[emptyIndex] = digit;
// //       setDigits(updatedDigits);
// //     }
// //   };

// //   const handleClearClick = () => {
// //     const updatedDigits = [...digits];
// //     let cleared = false;
    
// //     for (let i = updatedDigits.length - 1; i >= 0; i--) {
// //       if (updatedDigits[i] !== '') {
// //         updatedDigits[i] = '';
// //         cleared = true;
// //         break;
// //       }
// //     }

// //     if (cleared) {
// //       setDigits(updatedDigits);
// //     }
// //   };

// //   return (
// //     <div className="verification-container">
// //       <div className="keypad">
// //         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
// //           <button key={digit} onClick={() => handleDigitClick(digit)}>
// //             {digit}
// //           </button>
// //         ))}
// //         <button onClick={handleClearClick}>Clear</button>
// //       </div>
// //       <div className="verification-input">
// //         {digits.map((digit, index) => (
// //           <div key={index} className="digit">
// //             {digit}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default VerificationInput;

// const VerificationInput = () => {
//   const [digits, setDigits] = useState(['', '', '', '']);

//   const handleDigitClick = (digit) => {
//     const updatedDigits = [...digits];
//     const emptyIndex = updatedDigits.findIndex((d) => d === '');
//     if (emptyIndex !== -1) {
//       updatedDigits[emptyIndex] = digit;
//       setDigits(updatedDigits);
//     }
//   };

//   const handleClearClick = () => {
//     const updatedDigits = [...digits];
//     let cleared = false;
    
//     for (let i = updatedDigits.length - 1; i >= 0; i--) {
//       if (updatedDigits[i] !== '') {
//         updatedDigits[i] = '';
//         cleared = true;
//         break;
//       }
//     }

//     if (cleared) {
//       setDigits(updatedDigits);
//     }
//   };

//   return (
    // <div className='OTP'>
    //  <div className='BlueContainer'>
    //         <div className='WhiteContainer'>
    //             <a href=""><img className='arrow-left' src="/Assets/arrow-left.svg" alt="arrow-left" /></a>
    //         </div>
    //     </div> 
//     <div className="verification-container">
//       <div className="verification-input">
//         {digits.map((digit, index) => (
//           <div key={index} className="digit">
//             {digit}
//           </div>
//         ))}
//       </div>
//       <div className="keypad">
//         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
//           <button key={digit} onClick={() => handleDigitClick(digit)}>
//             {digit}
//           </button>
//         ))}
//         <button onClick={handleClearClick}>Clear</button>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default VerificationInput;
