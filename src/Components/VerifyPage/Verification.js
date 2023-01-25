import React from "react";
import './verify.css'
import image from "..//"

function Verification() {
  return (
    <div className="very-container">
      <div className="left-side">   
      <img className="images" src={image} alt=""/>
      </div>
      <div className="content-container">
        <div className="content-holder">
          <h1 className="content"> Kindly Check your mail to see your OTP number for Account verification</h1>
        </div>
      </div>
    </div>
  );
}

export default Verification;