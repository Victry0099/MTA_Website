import React from "react";

const Button = ({ cssclass, buttonName }) => {
  return (
    <>
      <button className={`${cssclass}`}>{buttonName}</button>
    </>
  );
};

export default Button;
