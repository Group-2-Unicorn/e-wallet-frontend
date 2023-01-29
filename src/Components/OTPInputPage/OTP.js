import { Link, useLocation } from "react-router-dom";
import './otp.css'
import React, {useState, useEffect} from 'react';
import image from "../Assets/img.jpeg";


const OTP = () => {
    const [otp, setOtp] = useState("");
    const location = useLocation()
    const {emailAddress} = location.state
    const url = "http://localhost:8080/api/v1/registration/verify"

    const verify = async (par) => {
        const response = await fetch( url, {
            method: 'POST',
            body: JSON.stringify(par),
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await response.json()
        console.log(data)
    }

    const postData = () => {
        const otpObj = {
            emailAddress: emailAddress,
            oneTimePassword: otp
        }
        console.log(otpObj)
        verify(otpObj)
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

                    <form>
                        <input
                            type="text"
                            onClick={verify}
                            placeholder="-"
                            required
                            value={otp}
                            onChange={handleOtp}
                        />
                        </form>
                        <button 
                            to="/LogIn" 
                            onClick={postData} 
                            className="otp-btn">
                            <Link to="/LogIn">
                            {""}
                            Continue
                        </Link>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OTP;