import React from "react";
import "./verification.css";
import { Link } from "react-router-dom";

const Verification = props => {
    if (!props.show){
        return null;
    }

  return (
    <div className="verification" onClick={props.onClose}>

      
      <div className="verification-content" onClick={e => e.stopPropagation() }>
        <div className="verification-body" onClick={props.onClose}>

            <p>
             Kindly Check your mail to see your OTP number for Account verification
            </p>
        </div>
      </div>
      <Link className="login-option" to="/OTP" style={{textDecoration: "none"}}>
        {""}
      </Link>
    </div>
  );
}

export default Verification;