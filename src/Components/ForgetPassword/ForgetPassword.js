import "./ForgetPassword.css"
import React, { useState , useEffect } from 'react';
import ResetImg from "../Assets/resetPassword.png"


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
                <img src={ResetImg} alt=""/>
            </div>
            <div className="reset_right">
                <div>
                    <h4>Enter Email Address to reset Password</h4>
                <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email address"
                    required
                />
                <button type="submit">NEXT</button>
                {message && <p>{message}</p>}
                </form>
            </div>
            </div>
        </div>
  );
};

export default ForgotPassword;