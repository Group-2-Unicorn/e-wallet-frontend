import React, { useState } from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";
import LoginImg from "../Assets/login.jpeg";
import { useNavigate } from "react-router-dom";


function LogIn() {

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  
  // const [userLoginDetail, setUserLoginDetail] = useState({
  //   password: "",
  //   emailAddress: ""
  // });

  const onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch("https://7f53-154-113-161-131.eu.ngrok.io/api/v1/users/login", {
      method: "POST",
      body: JSON.stringify({
        emailAddress: formData.get("emailAddress"),
        password: formData.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
  },
      

    })
      .then((response) => response.json())
      .then((data) => {
        if(data.fieldErrors){
          data.fieldErrors.forEach(fieldError => {
            if(fieldError.field === "emailAddress"){
              setEmailAddress(fieldError.message);
                }
            if(fieldError.field === "password"){
              setPassword(fieldError.message);
            }
          });
        }else{
              alert("Success !!!");
            }
          })
          .catch((err) => err && console.log(err)
    );
  };



  const navigate = useNavigate();

  // const [user, setUser] = React.useState();
  

  

  // const handleChange = (event) => {
  //   const {name, value} = event.target
  //   setUserLoginDetail((prevState) => {
  //       return {
  //           ...prevState,
  //           [name]: value
  //       }
  //   })
  //  }
   
   

  // const baseUrl = "https://7f53-154-113-161-131.eu.ngrok.io/api/v1/users/login";

  // const validateUser = async (event) => {
  //   event.preventDefault()
  //      console.log(userLoginDetail)
  //      const response = await fetch(baseUrl, {
  //          method: 'POST',
  //          body: JSON.stringify(userLoginDetail),
  //          headers: {
  //              "Content-type": "application/json"
  //          }
  //      })
  //      const data = await response.json()
  //      console.log(data)
  //      navigate("/Dashboard", {
  //       state:{
  //           emailAddress: userLoginDetail.emailAddress,
  //           password: userLoginDetail.password
  //       }
  //      })

  //  };

  //  if(!userLoginDetail && validateUser){
  //   return <LogIn setUserLoginDetail={setUserLoginDetail} />


  return (
    <div className="login-container">
      <div className="login-left-container">
        <img className="image-container" src={LoginImg} alt=""/>
      </div>
      <div className="login-right-container">
        <h2 className="header-text">Welcome Back!</h2>
        <h4 header-paragraph>Log in to your Dashboard</h4>
        <div>
        <form id="stripe-login" method="POST" onSubmit={onSubmit}>
        <input type="text" name="email"/>
          {
            emailAddress ? <span style={{ color: 'red', fontSize: '12px'}}>{emailAddress}</span> : ''
          }
        
          <input type="password" name="password"/>
          {
            password ? <span style={{ color: 'red', fontSize: '12px'}}>{password}</span> : ''
          }
          
          {/* <label>
            <input
              placeholder="Email"
              className="email_box"
              name="emailAddress"
              type="email"
              onChange={onSubmit}
              // value={userLoginDetail.emailAddress} 
              required
              
            />
            {emailAddress ?<p className="error">{emailAddress}</p>  : ''}
            
          </label>
          <div>
          <label>
            <input
              placeholder="Password"
              className="password_box"
              
              type="password"
              name="password"
              // value={userLoginDetail.password} 
              onChange={onSubmit}
              required
            />
            {password ?<p className="error">{password}</p>  : ''}
          </label>
          
          </div> */}
        </form>
          <div className="checker-container">
            <div className="checker">
              <input type="checkbox" />
              {/* value={validateUser.rememberMe} */}

              <span className="rem-me">Remember Me</span>
            </div>
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
          <button className="login-submit-button" >
          <Link to="/Dashboard">
                {""}
              </Link>
              <span className="login-submit-text">Log In</span>
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
  );
}

export default LogIn;