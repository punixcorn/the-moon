import React from "react";
import "./Bar.css";
export const Bar = ({ header, text }) => {
  return (
    <div className="text-box">
      <h3> {header} </h3>
      <p>{text}</p>
    </div>
  );
};
