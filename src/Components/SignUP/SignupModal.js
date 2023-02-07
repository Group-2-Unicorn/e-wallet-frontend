import React from "react";
import "./Modal.css";


const SignupModal = (props) => {

    if(!props.showModal) {
        return null;
    }



  return (
    <div className="modal">
        <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title">Sign Up</h1>
            </div>
            <div className="modal-body">
                hsdjkhdjfjsk
            </div>
            <div className="modal-footer">
                <button className="modal-close-btn">Close</button>
            </div>
        </div>
      <h1>Hello</h1>
    </div>
  );
}

export default SignupModal;