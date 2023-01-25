
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ForgetPassword from "./Component/ForgetPassword/ForgetPassword";
import LogIn from "./Component/LogIn/LogIn";
import SignUp from "./Component/SignUP/SignUp";




function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LogIn/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/ForgetPassword" element={<ForgetPassword/>} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
