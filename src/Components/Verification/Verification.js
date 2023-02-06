import React, { useState } from 'react';

const Verification = ({ isOpen, onClose, children }) => {
  const [visibility, setVisibility] = useState(isOpen);

  const handleClose = () => {
    setVisibility(false);
    onClose();
  };

  return (
    visibility && (
      <div className="modal-container">
        <div className="modal-content">
          <button onClick={handleClose}></button>
          {children}
        </div>
      </div>
    )
  );
};

export default Verification;
