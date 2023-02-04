import { Link, Navigate, useLocation } from "react-router-dom";
import './otp.css'
import  {useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import image from "../Assets/img.jpeg";
import Button from "../ReUsableComponent/Button/Button";


const OTP = () => {
    const [otpInputFields, setOtpInputFields] = useState([
        { name: "field1", value: "" },
        { name: "field2", value: "" },
        { name: "field3", value: "" },
        { name: "field4", value: "" },
    ]);

    const navigate = useNavigate()

    const location = useLocation()
    const {emailAddress} = location.state
    const url = "https://7f53-154-113-161-131.eu.ngrok.io/api/v1/registration/verify"

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
        console.log(postData)
        
        const otpObj = {
            emailAddress: emailAddress,
            oneTimePassword: otpInputFields.map(inputField => inputField.value).join('')
        }
        console.log(otpObj)
        verify(otpObj)
        navigate("/LogIn");
    }
    
    const handleOtp = (index) => (event) => {
        const newOtpInputFields = [...otpInputFields];
        newOtpInputFields[index].value = event.target.value;
        setOtpInputFields(newOtpInputFields);
      };

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
                        
                            name={otpInputFields[0].value}
                            type="text"
                            placeholder="-"
                            required
                            value={otpInputFields[0].value} 
                            onChange={handleOtp(0)}
                            className="otp-input"
                        />
                        <input 
                            name={otpInputFields[1].value}
                            className="otp-input"
                            type="text"
                            placeholder="-"
                            required    
                            value={otpInputFields[1].value}
                            onChange={handleOtp(1)}
                        />
                        <input 
                            name={otpInputFields[2].value}
                            className="otp-input"
                            type="text"
                            placeholder="-"
                            required    
                            value={otpInputFields[2].value}
                            onChange={handleOtp(2)}
                        />
                        <input 
                            name={otpInputFields[3].value}
                            className="otp-input"
                            type="text"
                            placeholder="-"
                            required    
                            value={otpInputFields[3].value}
                            onChange={handleOtp(3)}
                        />
                    
                    </form>
                    <Button 
                        name="Login"
                        width="77%"
                        height="65px"
                        backgroundColor="#55229e"
                        border="none"
                        outline="none"
                        color="white"
                        borderRadius="10px"
                        padding="20px"
                        fontSize="large"
                        cursor="pointer"
                        margin-top="20px"
                        type="submit"
                        to="/LogIn"
                        onClick={postData} 
                    />
                        <button 
                            
                            className="otp-btn">
                                <Link to="/LogIn">
                                    {""}
                                </Link>
                            <span className="continue">Continue</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OTP;