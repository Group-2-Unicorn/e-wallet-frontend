import React, { useState } from "react";
import "./LogIn.css";
import axios from "axios";
import { Link } from "react-router-dom";
import LoginImg from "../Assets/login.jpeg";
import { useNavigate } from "react-router-dom";



function LogIn() {
  const [userLoginDetail, setUserLoginDetail] = useState({
    password: "",
    emailAddress: ""
  });



  const handleChange = (event) => {
    const {name, value} = event.target
    setUserLoginDetail((prevState) => {
        return {
            ...prevState,
            [name]: value
        }
    })
   }

   const navigate = useNavigate()

  const baseUrl = "https://localhost:8080/api/v1/users/login";

  const validateUser = async (event) => {
    event.preventDefault()
       console.log(userLoginDetail)
       const response = await fetch(baseUrl, {
           method: 'POST',
           body: JSON.stringify(userLoginDetail),
           headers: {
               "Content-type": "application/json"
           }
       })
       const data = await response.json()
       console.log(data)
       navigate("/Dashboard", {
        state:{
            emailAddress: userLoginDetail.emailAddress,
            password: userLoginDetail.password
        }
       })

   };

  // const postData = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(baseUrl, {
  //       email,
  //       password,
  //     })
  //     .then((res) => console.log(res))
  //     .catch((res) => console.log(res));

  //   setEmail("");
  //   setPassword("");
  // };

  return (
    <div className="login">
      <div className="login_left">
        <img src={LoginImg} alt=""/>
      </div>
      <div className="login_right">
        <h2 >Welcome Back!</h2>
        <h4>Log in to your Dashboard</h4>
        <div>
            <div>
          <label>
            <input
              placeholder="Email"
              className="input_box"
              name="emailAddress"
              type="email"
              onChange={handleChange}
              value={userLoginDetail.emailAddress} 
              
              required
            />
          </label>
          </div>
            <div>
          <label>
            <input
              placeholder="Password"
              className="input_box"
              type="password"
              name="password"
              value={userLoginDetail.password} 
              onChange={handleChange}
              required
            />
          </label>
          </div>
          <div className="remember">
            <div className="checker">
              <input type="checkbox" />
              {/* value={validateUser.rememberMe} */}
              <span className="rem-me">Remember Me</span>
            </div>
              <p>                
                <Link
                  className="pass"
                  to="/ForgetPassword"
                  style={{ textDecoration: "none" }}
                >
                  {""}
                  Forget Password?
                </Link>
                </p>
            </div>
          </div>
          <button className="login_submit" onClick={validateUser}>
          <Link to="/Dashboard">
                {""}
                <span className="sign_span">Log In</span>
              </Link>
            
          </button>
          <div className="sign_link">
            <p className="dont_have">Don't have an Account?</p>
            <p>
              <Link to="/SignUp">
                {""}
                <span className="sign_span">Sign Up</span>
              </Link>
            </p>
          </div>
      </div>
    </div>
  );
}

export default LogIn;
