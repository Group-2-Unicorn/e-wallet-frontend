import React, { useState } from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";
import LoginImg from "../Assets/login.jpeg";
import { useNavigate } from "react-router-dom";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";


function LogIn() {
  
  const [userLoginDetail, setUserLoginDetail] = useState({
    password: "",
    emailAddress: ""
  });
  
  const navigate = useNavigate();

    // const [user, setUser] = React.useState();
  

  

    const handleChange = (event) => {
      const {name, value} = event.target
      setUserLoginDetail((prevState) => {
          return {
              ...prevState,
              [name]: value
          }
      })
    }
    
   

  const baseUrl = "https://7f53-154-113-161-131.eu.ngrok.io/api/v1/users/login";

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
  }

    return (
      <div className="login-container">
        <div className="login-left-container">
          <img className="image-container" src={LoginImg} alt=""/>
        </div>
        <div className="login-right-container">
          <h2 className="header-text">Welcome Back!</h2>
          <h4 header-paragraph>Log in to your Dashboard</h4>
          <div className="signup-form-container">
            <form id="stripe-login" method="POST">
              <label>
                <input
                  placeholder="Email"
                  className="email_box"
                  name="emailAddress"
                  type="email"
                  onChange={handleChange}
                  value={userLoginDetail.emailAddress ? userLoginDetail.emailAddress : ''} 
                  required
                  
                />
              </label>
              <div>
              <label>
                <input
                  placeholder="Password"
                  className="password_box"
                  
                  type="password"
                  name="password"
                  value={userLoginDetail.password ? userLoginDetail.password : isValidDateValue} 
                  onChange={handleChange}
                  required
                />
              </label>
              
              </div> 
            </form>
            <div className="checker-container">
              <div className="checker">
                <input type="checkbox" />
                {/* value={validateUser.rememberMe} */}

                <span className="rem-me">Remember Me</span>
              </div>
              <div>
                <p>                
                  <Link
                    className="password"
                    to="/ForgetPassword"
                    style={{ textDecoration: "none" }}
                  >
                    {""}
                    Forget Password?
                  </Link>
                  </p>
              </div>
            </div>
            <button onClick={handleChange} className="login-submit-button" >
            <Link to="/Dashboard">
                  {""}
                  <span className="login-submit-text">Log In</span>
                </Link>
               
            </button>
            <div className="sign-up-container">
              <p className="create-account-option">Don't have an Account?</p>
              <p>
                <Link to="/SignUp">
                  {""}
                  <span className="sign-up-text">Sign Up</span>
                </Link>
              </p>
            </div>
        </div>
        </div>
      </div>
    );
  }

export default LogIn;