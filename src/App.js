import {Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import DriversSignup from "./pages/Drivers page/DriversSignup";
import LoginPage from "./pages/Passengers Page/LoginPage";
import SignUpPage from "./pages/Passengers Sign Up Page/SignUp";
import ForgottenPassword from "./pages/ForgottenPassword/ForgottenPassword";
import AboutScreen from "./pages/AboutScreen/AboutScreen";
import NewPassword from "./pages/NewPassword/NewPassword";

function App() {
  return (

    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/DriversSignup' element={<DriversSignup/>}/>
      <Route path='/Login' element={<LoginPage/>}/>
      <Route path='/SignUp' element={<SignUpPage/>}/>
      <Route path='/forgotten-password' element={<ForgottenPassword/>}/>
      <Route path='/about' element = {<AboutScreen/>}/>
      <Route path='/new-password' element = {<NewPassword/>}/>

    </Routes>
   
  );
}

export default App;
