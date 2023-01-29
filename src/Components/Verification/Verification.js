import React from "react";
import "./verification.css";
import { Link } from "react-router-dom";

const Verification = props => {
    if (!props.show){
        return null;
    }

  return (
    <div className="verification" onClick={props.onClose}>
      <Link className="login-option" to="/OTP" style={{textDecoration: "none"}}>
                {""}
                onClick={props.onClose}
      </Link>

      
      <div className="verification-content" onClick={e => e.stopPropagation() }>
        <div className="verification-body" onClick={props.onClose}>

            <p>
                Kindly Check your mail to see your OTP number for Account verification
            </p>
        </div>
      </div>
      
    </div>
  );
}

export default Verification;