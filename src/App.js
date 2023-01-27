import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ForgetPassword from "././Components/ForgetPassword/ForgetPassword";
import LogIn from "././Components/LogIn/LogIn";
import SignUp from "./Components/SignUP/SignUp";
import Verification from "./Components/VerifyPage/Verification";




function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LogIn/>} />
            <Route path="/LogIn" element={<LogIn/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/Verification" element={<Verification /> } />
            <Route path="/ForgetPassword" element={<ForgetPassword/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
