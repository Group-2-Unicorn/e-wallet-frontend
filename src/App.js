import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import ForgetPassword from "././Components/ForgetPassword/ForgetPassword";
import LogIn from "././Components/LogIn/LogIn";
import SignUp from "./Components/SignUP/SignUp";
// import Verification from "./Components/Verification/Verification";
import OTP from "./Components/OTPInputPage/OTP";
import Dashboard from "./Components/Dashboard/Dashboard"



function App() {
  
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<LogIn/>} />
            <Route path="/Login" element={<LogIn/>} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Dashboard" element={<OTP /> } />
            <Route path="/ForgetPassword" element={<ForgetPassword/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
