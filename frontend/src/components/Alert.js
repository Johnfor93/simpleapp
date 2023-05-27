import React from "react";
import "./Alert.css";

import { XMarkIcon } from "@heroicons/react/20/solid";

const Alert = ({ message, closeAlert }) => {
  return (
    <div className={`alert ${message ? "active" : ""}`} onClick={closeAlert}>
      <div className="alert-text">{message}</div>
      <div className="alert-icon">
        <XMarkIcon></XMarkIcon>
      </div>
    </div>
  );
};

export default Alert;
