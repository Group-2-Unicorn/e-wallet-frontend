import "./ForgetPassword.css"
import React, { useState , useEffect } from 'react';
import ResetImg from "../Assets/resetPassword.png"
import flowImage from "../Assets/resetFlow.png"
import Button from "../ReUsableComponent/Button/Button";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('Password reset token sent to your mail');
  };

  return (
        <div className="reset-password-container">
            <div className="reset-password-left-container">
                <img className="resetPasswordImage" src={ResetImg} alt=""/>
            </div>
            <div className="reset-password-right-container">
                <div className="form-reset-container">
                    <h4 className="reset-password-text">Reset Password </h4>
                    <img className="reset-flow-image" src={flowImage} alt=""/>
                    <p className="header-text">Enter Email Address to reset Password</p>
                    
                    <form className="forms" onSubmit={handleSubmit}>
                        <input
                            className="reset-password-input"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Email address"
                            required
                        />
                        <Button 
                            name="NEXT"
                            width="72%"
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
                        />

                    {message && <p>{message}</p>}
                </form>
            </div>
            </div>
        </div>
  );
};

export default ForgotPassword;