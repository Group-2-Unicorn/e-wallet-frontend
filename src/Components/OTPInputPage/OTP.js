import { Link } from "react-router-dom";
import './otp.css'

import React, {useState, useEffect} from 'react';
import image from "../Assets/img.jpeg";


const OTP = () => {
        const [otp, setOtp] = useState("");

    const url = "http://localhost:8080/api/v1/registration/verify"

    const verify = async () => {
        console.log(otp)

        const response = await fetch( url, {
            method: 'POST',
            body: JSON.stringify(otp),
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await response.json()
        console.log(data)
    }

    const handleOtp = (event) => {
        const {value} = event.target
        setOtp(value)
    }

    return (
        <div className="otp-container">
            <div className="otp-left-side"> 
                <img className="image" src={image} alt=""/>
            </div>

            <div className="otp-right-container">
                <div className="otp-form-container">
                    <div className="otp-right-side">
                        <p className='otp-text'>Enter your OTP number</p>
                    </div>
                    <div className="otp-form-div">
                        <form method="post" className='otp-form'>
                            <label>
                                <input 
                                onChange={handleOtp}
                                name="oneTimePassword"
                                value={otp}
                                onClick={verify}
                                className="input-btn"
                                type="password"
                                placeholder="-"
                                required
                                />
                            </label>

                            <label>
                                <input 
                                value={otp.oneTimePassword}
                                onChange={handleOtp}
                                name="oneTimePassword"
                                onClick={verify}
                                className="input-btn"
                                type="password"
                                placeholder="-"
                                required
                                />
                            </label>

                            <label>
                                <input 
                                value={otp.oneTimePassword}
                                onChange={handleOtp}
                                name="oneTimePassword"
                                onClick={verify}
                                className="input-btn"
                                type="password"
                                placeholder="-"
                                required
                                />
                            </label>

                            <label>
                                <input 
                                value={otp.oneTimePassword}
                                onChange={handleOtp}
                                name="oneTimePassword"
                                onClick={verify}
                                className="input-btn"
                                type="password"
                                placeholder="-"
                                required
                                />
                            </label>
                        </form>
                        <button 
                            className="otp-btn"
                            to="/Verification" 
                            // onClick={() => setShow(true)}
                        >
                        <Link >
                            {""}
                        </Link>
                        <a href="/Verification" style={{textDecoration: "none"}}>
                        <span className="otpbtn">Continue</span> 
                   </a></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OTP;