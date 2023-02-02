import React, { useState } from "react";
import LoginImg from '../Assets/login.jpeg'
import "./LogIn.css";
import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";
import Verification from "../Verification/Verification";



function Login() {
  const [userLoginDetail, setUserLoginDetail] = useState({
    emailAddress: "",
    password: "",
  });
  
  const [errorMessage, setErrorMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false)

  const [showModal, setShowModal] = useState(false);


  const navigate = useNavigate();

  const BASE_URL = "https://7f53-154-113-161-131.eu.ngrok.io/api/v1/users/login";

  const handleChange = (event) => {
    const { name, value } = event.target
    setUserLoginDetail((prevState) => {
        return {
            ...prevState,
            [name]: value
        }
    })
  }

  const toggleModal = () => setShowModal(!showModal);

 
  const handleSubmit =  async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(userLoginDetail),
        headers: {
          "Content-type": "application/json",
        },
      })
      if (!response.ok){
        throw new Error("Something went wrong")
      }
      const data = await response.json();
      console.log(data);
      setShowDashboard(true);
      console.log("Login successful", data);
    
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  const login = (event) =>{
    handleSubmit(event)
    if (showDashboard){
      navigate("/Dashboard", {
        state: {
          emailAddress: userLoginDetail.emailAddress,
          password: userLoginDetail.password
        }
      })
    }
  }
  

  return (
    <div className="login-container">
      <div className="login-left-container">
        <img className="image-container" src={LoginImg} alt=""/>
      </div>
      <div className="login-right-container">
        <h2 className="header-text">Welcome Back!</h2>
        <h4 className="header-paragraph">Log in to your Dashboard</h4>
        {/* {showDashboard === false ? errorMessage : ""} */}
        {showDashboard === false ? errorMessage && <p className="error" >{errorMessage}</p> : ""}
        
        <div className="login_form-container">
          <form onSubmit={login}>
            <label>
              <input
                type="email"
                className="email"
                name="emailAddress"
                placeholder="Email"
                onChange={handleChange}
                value={userLoginDetail.emailAddress || ""}
              />
            </label>
            <label>
              <input
                className="password-input"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={userLoginDetail.password || ""}
                onChange={handleChange}
                required
              />
            </label>
            <div className="checker-forgot-password-container">
              <div className="checker">
                <input  
                  className="checkbox"
                  onChange={() => setShowPassword(!showPassword)}
                  type="checkbox"  />
                <label className="rem-me">Remember me</label>
              </div>
            <div className="forgot-password">
              <p>
                <Link className="forgot-password-link" to="/ForgetPassword" style={{textDecorator: 'none'}}>
                  {""}
                  Forgot Password?
                </Link>
              </p>
            </div>
            </div>
            <button className="login-submit-button" onClick={toggleModal} type="submit">Login</button>
            <showModal />
          </form>
          <Verification />
          <div className="sign-up-containers">
            <p className="create-account-options">Don't have an Account?</p>
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

export default Login;


// import React, { useState } from "react";
// import "./LogIn.css";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import LoginImg from "../Assets/login.jpeg";
// import { useHistory } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";



// function LogIn() {

//   const [userLoginDetail, setUserLoginDetail] = useState({
//     password: "",
//     emailAddress: ""
//   });
  
//   const history = useHistory();
  

//   const handleChange = (event) => {
//     const {name, value} = event.target
//     setUserLoginDetail((prevState) => {
//         return {
//             ...prevState,
//             [name]: value
//         }
//     })
//    }

//   const navigate = useNavigate()

//   const BASE_URL = "https://7f53-154-113-161-131.eu.ngrok.io/api/v1/users/login";

//   const validateUser = async (event) => {
//     event.preventDefault()
//        console.log(userLoginDetail)
//        const response = await fetch(BASE_URL, {
//            method: 'POST',
//            body: JSON.stringify(userLoginDetail),
//            headers: {
//                "Content-type": "application/json"
//            }
//        })
//        const data = await response.json()
//        console.log(data)
//        navigate("/Dashboard", {
//         state:{
//             emailAddress: userLoginDetail.emailAddress,
//             password: userLoginDetail.password
//         }
//        })

//       //  const handleLogin = async () => {
//         try {
//           const validateEmail = (emailAddress) => {
//           const emailRegex = '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
//           return emailRegex.match(emailAddress);
//           };
            
//           const validatePassword = (password) => {
//           const passwordRegex = '^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$';
//           return passwordRegex.match(password);
//           };
    
//           function validateUser(emailAddress, password) {
//             if (!validateEmail(emailAddress)) {
//               alert("Invalid email address");
//               return false;
//             }
//             if (!validatePassword(password)) {
//               alert("Enter your Password");
//               return false;
//             }
//             return true;
//           }
    
    
//           const response = validateUser(userLoginDetail.emailAddress, userLoginDetail.password);
//           if (response.success) {
//             history.push('/dashboard');
//           } else {
//             alert('Invalid email or password');
//           }
//         } catch (error) {
//           console.error(error);
//           alert('Error while logging in');
//         }
//       };
       
   

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

//   return (
//     <div className="login">
//       <div className="login_left">
//         <img src={LoginImg} alt=""/>
//       </div>
//       <div className="login_right">
//         <h2 >Welcome Back!</h2>
//         <h4>Log in to your Dashboard</h4>
//         <div>
//             <div>
//           <label>
//             <input
//               placeholder="Email"
//               className="input_box"
//               name="emailAddress"
//               type="email"
//               onChange={handleChange}
//               value={userLoginDetail.emailAddress || ""}
              
//               required
//             />
//           </label>
//           </div>
//             <div>
//           <label>
//             <input
//               placeholder="Password"
//               className="input_box"
//               type="password"
//               name="password"
//               value={userLoginDetail.password || ""}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           </div>
//           <div className="remember">
//             <div className="checker">
//               <input type="checkbox" />
//               {/* value={validateUser.rememberMe} */}
//               <span className="rem-me">Remember Me</span>
//             </div>
//               <p>                
//                 <Link
//                   className="pass"
//                   to="/ForgetPassword"
//                   style={{ textDecoration: "none" }}
//                 >
//                   {""}
//                   Forget Password?
//                 </Link>
//                 </p>
//             </div>
//           </div>
//           <button className="login_submit" onClick={validateUser}>
//           <Link to="/Dashboard">
//                 {""}
//                 <span className="sign_span">Log In</span>
//               </Link>
            
//           </button>
//           <div className="sign_link">
//             <p className="dont_have">Don't have an Account?</p>
//             <p>
//               <Link to="/SignUp">
//                 {""}
//                 <span className="sign_span">Sign Up</span>
//               </Link>
//             </p>
//           </div>
//       </div>
//     </div>
//   );
// }

// export default LogIn;





















