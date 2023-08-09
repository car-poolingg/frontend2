import {Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import DriversSignup from "./pages/Drivers page/DriversSignup";

function App() {
  return (

    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/DriversSignup' element={<DriversSignup/>}/>
    </Routes>
   
  );
}

export default App;
