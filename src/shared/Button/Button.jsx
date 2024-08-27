import React from "react";

const Button = ({ cssclass, buttonName }) => {
  return (
    <>
      <button className={`${cssclass}, cursor-pointer`}>{buttonName}</button>
    </>
  );
};

export default Button;
