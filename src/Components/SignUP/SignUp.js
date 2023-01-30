import "./SignUp.css";
import { json, Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import image from "../Assets/img.jpeg";
<<<<<<< HEAD
import React, { useState} from "react";
import Verification from "../VerifyPage/Verification";
=======
import React, {useState, useEffect} from 'react';
import Verification from "../Verification/Verification";
>>>>>>> 9c427f98dd1a8f1b67eae1c52fb2bd7f79605939



function SignUp(){
    const [usersDetail, setUsersDetail] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: ""
    }
    )

    
    const [alert, setAlert] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        if(alert) {
            setTimeout(() => {
                setAlert(false);
            
            }, 3000)
        }
    }, [alert])


    const [show, setShow] = useState(false);


   const handleChange = (event) => {
    const {name, value} = event.target
    setUsersDetail((prevState) => {
        return {
            ...prevState,
            [name]: value
        }
    })
   }
   
   const url = "http://localhost:8080/api/v1/registration/register"
   const postData = async (event) => {
    event.preventDefault()
       console.log(usersDetail)
       const response = await fetch(url, {
           method: 'POST',
           body: JSON.stringify(usersDetail),
           headers: {
               "Content-type": "application/json"
           }
       })
       const data = await response.json()
       console.log(data)
       navigate("/OTP", {
        state:{
            emailAddress: usersDetail.emailAddress
        }
       })

   };
    return(
        <div className="Signup-container">
            <div className="left-side"> 
                <img className="images" src={image} alt=""/>
            </div>

            <div className="form-container">
                <div className="right-side">
                    <h3 className='welcome'>Welcome!</h3>
                    <p className='signup-info'>Sign up by entering the information below</p>
                </div>
                {/* {alert && <Verification onClose={() => setShow(false)} show={show}  />} */}
                <form 
                    method="post"
                    className="sign-up-form">
                    <label>
<<<<<<< HEAD
                        <input className="input_box"
=======
                        <input 
                            value={usersDetail.firstName} 
                            onChange={handleChange}
                            name="firstName"
>>>>>>> 9c427f98dd1a8f1b67eae1c52fb2bd7f79605939
                            type="text"
                            placeholder="First Name"
                            required
                        />
                    </label>

                    <label>
<<<<<<< HEAD
                        <input className="input_box"
=======
                        <input 
                            value={usersDetail.lastName} 
                            onChange={handleChange}
>>>>>>> 9c427f98dd1a8f1b67eae1c52fb2bd7f79605939
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                        />
                    </label>
                    
                    <label>
                        <input 
                            type="email"
                            value={usersDetail.emailAddress} 
                            onChange={handleChange}
                            name="emailAddress"
                            placeholder="email"
                            required
                        />
                    </label>

                    <label>
                        <input 
                            value={usersDetail.password} 
                            onChange={handleChange}
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </label>

                </form>
            
                <div className="optionsContainer">
                    <p className='signup-option'>Already have an account?</p>
                        <p>
                            <Link to="/Login" className="login-option" style={{textDecoration: "none"}}>
                                {""}
                                LogIn
                            </Link>
                        </p>
                </div>
                <button 
                    to="/OTP"
                    className="signup-btn"
                    type="submit"
                    onClick={postData}
                                       
                    style={{textDecoration: "none"}}
                    >
<<<<<<< HEAD
                    <Link className="login-option" style={{textDecoration: "none"}}>
                        {""}
                    </Link>
                    <a href="/Verification" style={{textDecoration: "none"}}>
                   <span className="signbtn">Sign Up</span> 
                   </a></button>
                   <Verification onClose={() => setShow(false)} show={show} />
=======
                    <span className="signbtn">Sign Up</span> 
                    <Link to="/OTP" className="login-option" style={{textDecoration: "none"}}>
                                {""}
                                
                            </Link>
                   
                </button>
                <Verification onClick={() => setShow(false)} show={show} />
                   
>>>>>>> 9c427f98dd1a8f1b67eae1c52fb2bd7f79605939
            </div>
        </div>
    )
}

export default SignUp;
