import "./SignUp.css";
import { json, Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import image from "../Assets/img.jpeg";
import React, {useState, useEffect} from 'react';
import Verification from "../Verification/Verification";

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
   
   const url = "https://7f53-154-113-161-131.eu.ngrok.io/api/v1/registration/register"
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
        <div className="signup-container">
            <div className="sign-up-left-container"> 
                <img className="logo" src={image} alt=""/>
            </div>

            <div className="sign-up-right-container">
                <h2 className='header-texts'>Welcome!</h2>
                <h4 className="header-paragraph">Sign up by entering the information below</h4>
                <div className="form-container">
                    {/* {alert && <Verification onClose={() => setShow(false)} show={show}  />} */}
                    <form 
                        method="post"
                        className="sign-up-form">
                        <label>
                            <input 
                                value={usersDetail.firstName} 
                                onChange={handleChange}
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                required
                            />
                        </label>

                        <label>
                            <input className="input_box"
                                value={usersDetail.lastName} 
                                onChange={handleChange}
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
            
                <div className="options-container">
                    <p className='signup-option'>Already have an account?</p>
                    <p>
                        <Link to="/Login" className="login-option" style={{textDecoration: "none"}}>
                            {""}
                                
                        </Link>
                        Login
                    </p>
                </div>
                <button 
                    to="/OTP"
                    className="signup-submit-button"
                    type="submit"
                    onClick={postData}
                                       
                    style={{textDecoration: "none"}}
                    >
                    <span className="signbtn">Sign Up</span> 
                    <Link to="/OTP" className="login-option" style={{textDecoration: "none"}}>
                                {""}
                                
                            </Link>
                   
                </button>
                <Verification onClick={() => setShow(false)} show={show} />
                   
            </div>
        </div>
    </div>
)
}

export default SignUp;
