import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import ForgetPassword from "././Components/ForgetPassword/ForgetPassword";
import LogIn from "././Components/LogIn/LogIn";
import SignUp from "./Components/SignUP/SignUp";
<<<<<<< HEAD
import Verification from "./Components/VerifyPage/Verification";
import OTP from "./Components/OTPInputPage/OTP";

=======
// import Verification from "./Components/Verification/Verification";
import OTP from "./Components/OTPInputPage/OTP";
import Dashboard from "./Components/Dashboard/Dashboard"
>>>>>>> 9c427f98dd1a8f1b67eae1c52fb2bd7f79605939



function App() {
  
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<LogIn/>} />
            <Route path="/LogIn" element={<LogIn/>} />
<<<<<<< HEAD
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/Verification"  element={<OTP /> } />
=======
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/OTP" element={<OTP /> } />
            <Route path="/Dashboard" element={<Dashboard />} />
>>>>>>> 9c427f98dd1a8f1b67eae1c52fb2bd7f79605939
            <Route path="/ForgetPassword" element={<ForgetPassword/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
