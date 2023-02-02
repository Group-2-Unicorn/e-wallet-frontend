import React, { useState } from "react";
import { Link } from "react-router-dom";
import './verification.css'


const Verification = () => {
  const [showModal, setShowModal] = useState(false);


  const toggleModal = () => setShowModal(!showModal);


  return (
    <div
      className={`modal ${showModal ? "show" : "hide"}`}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Success</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={toggleModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Your action was successful.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
