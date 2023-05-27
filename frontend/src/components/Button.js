import React from "react";
import "./Button.css";

const Button = ({ Icon, text, classCategory, onClickEvent }) => {
  return (
    <div className={`button button-${classCategory}`} onClick={onClickEvent}>
      <div className="icon-btn">{Icon}</div>
      <div className="btn-text">{text}</div>
    </div>
  );
};

export default Button;
