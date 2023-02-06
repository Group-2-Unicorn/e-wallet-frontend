import "./ForgetPassword.css";
import React, { useState, useEffect } from 'react';
import ResetImg from "../Assets/resetPassword.png";
import flowImage from "../Assets/resetFlow.png";
import Button from "../ReUsableComponent/Button";
import ImageCard from "../ReUsableComponent/ImageCard";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Password reset token sent to your mail");
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-left-container">
        <ImageCard
          src={ResetImg}
          alt={"reset password"}
          className={"resetPasswordImage"}
        />
      </div>
      <div className="reset-password-right-container">
          <h4 className="reset-password-header-text">Reset Password </h4>
          <img className="header-reset-flow-image" src={flowImage} alt="" />
          <p className="header-password-paragraph">Enter Email Address to reset Password</p>

          <form className="forms">
            <label>  
              <input
                className="reset-email-input"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                required
              />
            </label>
            <Button
              name="NEXT"
              width="84%"
              height="65px"
              backgroundColor="#55229e"
              border="none"
              outline="none"
              color="white"
              borderRadius="10px"
              padding="20px"
              fontSize="large"
              cursor="pointer"
              marginTop="20px"
              type="submit"
              onSubmit={handleSubmit}
            />
            {message && <p>{message}</p>}
          </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
