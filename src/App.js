import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ForgetPassword from "././Components/ForgetPassword/ForgetPassword";
import LogIn from "././Components/LogIn/LogIn";
import SignUp from "./Components/SignUP/SignUp";
import Verification from "./Components/VerifyPage/Verification";
<<<<<<< HEAD
=======
import OTP from "./Components/OTPInputPage/OTP";
>>>>>>> baa92fa7d723defcc842827d1a5d347c5b69b889




function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LogIn/>} />
            <Route path="/LogIn" element={<LogIn/>} />
            <Route path="/SignUp" element={<SignUp/>} />
<<<<<<< HEAD
            <Route path="/Verification" element={<Verification /> } />
=======
            <Route path="/Verification"  element={<OTP /> } />
>>>>>>> baa92fa7d723defcc842827d1a5d347c5b69b889
            <Route path="/ForgetPassword" element={<ForgetPassword/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
