import "./SignUp.css";
import { Link } from "react-router-dom";
import image from "../Assets/img.jpeg";
import { getUserDetails } from '../APIServices/userDetail';
import React, {useState, useEffect} from 'react';

import Verification from "../Verification/Verification";



function SignUp(){

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState([]);

    useEffect(() => {
        let mounted = true;
        getUserDetails()
            .then(elements => {
                if(mounted){
                    setPassword(elements)
                }
            })
        return () => mounted = false;
    },[]);


    
    const [show, setShow] = useState(false);
   
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
                <form className="sign-up-form">
                    <label>
                        <input 
                            value={firstName} onChange={event => setFirstName(event.target.value)}
                            type="text"
                            placeholder="First Name"
                            required
                        />
                    </label>

                    <label>
                        <input 
                            value={lastName} onChange={event => setLastName(event.target.value)}
                            type="text"
                            placeholder="Last Name"
                            required
                        />
                    </label>
                    
                    <label>
                        <input className=""
                            value={email} onChange={event => setEmail(event.target.value)}
                            placeholder="Email"
                            required
                        />
                    </label>

                    <label>
                        <input 
                            value={password} onChange={event => setPassword(event.target.value)}
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </label>

                </form>
            
                <div className="optionsContainer">
                    <p className='signup-option'>Already have an account?</p>
                        <p>
                            <Link className="login-option" to="/LogIn" style={{textDecoration: "none"}}>
                                {""}
                                LogIn
                            </Link>
                        </p>
                </div>
                <button 
                    className="signup-btn"
                    type="submit"
                    onClick={() => setShow(true)}
                    style={{textDecoration: "none"}}
                    >
                        <Link className="login-option"  style={{textDecoration: "none"}}>
                            {""}
                        </Link>
                    <a href="/OTP" style={{textDecoration: "none"}}>
                        <span className="signbtn">Sign Up</span> 
                   </a>
                   <Verification onClose={() => setShow(false)} show={show} />
                </button>
                   
            </div>
        </div>
    )
}

export default SignUp;
