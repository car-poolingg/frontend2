import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import DriversSignup from "./pages/Drivers page/DriversSignup";
import LoginPage from "./pages/Passengers Page/LoginPage";
import SignUpPage from "./pages/Passengers Sign Up Page/SignUp";
import ForgottenPassword from "./pages/ForgottenPassword/ForgottenPassword";
import AboutScreen from "./pages/AboutScreen/AboutScreen";
import NewPass from "./pages/NewPassword/NewPassword";
import PersonalDetails from "./pages/Drivers page/PersonalDetails";
import Document from "./pages/Drivers page/Document";
import License from "./pages/Drivers page/License";
import Support from "./pages/Drivers page/Support";
import DriversProfile from "./pages/Drivers page/DriversProfile";
import ForgotPassword from "./pages/Drivers page/ForgotPassword";
import VerifyPassword from "./pages/Drivers page/VerifyPassword";
import NewPassword from "./pages/Drivers page/NewPassword";
import VerificationInput from "./pages/OTPVerification/OTPVerification";
import EditProfile from "./pages/Drivers page/EditProfile";
import AvailableDrivers from "./pages/Passengers/AvailableDrivers";
import Profile from "./pages/Passengers/Profile";
import PassengerHome from "./pages/Passengers/Home";
import AdminLoginPage from "./pages/Admin/AdminLogin"
import AdminForgottenPassword from "./pages/Admin/AdminForgottenPassword"
import AdminNewpass from "./pages/Admin/AdminNewPassword"
import OngoingRide from "./pages/Passengers Page/OngoingRide"
import DrivProfilepage from "./pages/Passengers Page/DrivProfilepage"
import Changepass from "./pages/NewPassword/changepassword";

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route
        path='/DriversSignup'
        element={<DriversSignup />}
      />
      <Route path='/Login' element={<LoginPage />} />
      <Route path='/SignUp' element={<SignUpPage />} />
      <Route
        path='/forgotten-password'
        element={<ForgottenPassword />}
      />
      <Route path='/about' element={<AboutScreen />} />
      <Route path='/new-password' element={<NewPass />} />
      <Route
        path='/PersonalDetails'
        element={<PersonalDetails />}
      />
      <Route path='/Document' element={<Document />} />
      <Route path='/License' element={<License />} />
      <Route path='/Support' element={<Support />} />
      <Route
        path='/DriversProfile'
        element={<DriversProfile />}
      />
      <Route
        path='/verifycode'
        element={<VerificationInput />}
      />
      <Route
        path='/ForgotPassword'
        element={<ForgotPassword />}
      />
      <Route
        path='/VerifyPassword'
        element={<VerifyPassword />}
      />
      <Route
        path='/NewPassword'
        element={<NewPassword />}
      />
      <Route
        path='/EditProfile'
        element={<EditProfile />}
      />
      <Route
        path='/passengers/*'
        element={<PassengerHome />}
      />
      <Route path="/admin-login" element={<AdminLoginPage/>}/>
      <Route path="/admin-forgottenpassword" element={<AdminForgottenPassword/>}/>
      <Route path="/admin-newpassword" element={<AdminNewpass/>}/>
      <Route path="/ongoing-ride" element={<OngoingRide/>}/>
      <Route path="/drivprofile-page" element={<DrivProfilepage/>}/>
      <Route path="/change-password" element={<Changepass/>}/>
    </Routes>
  
);
}

export default App;
