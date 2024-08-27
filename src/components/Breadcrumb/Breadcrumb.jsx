import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-router-dom";

function Breadcrumb({ text }) {
  return (
    <>
      <div className="breadcrumb-main pt-16 pb-12 bg-orange-100">
        <div className="bread-icon flex justify-center content-center">
          <Link to="/">
            <AiOutlineHome className="text-2xl mr-2" />
          </Link>
          <MdKeyboardArrowRight className="text-xl mt-1 mr-2" />{" "}
          <span className="text-xl"> {text} </span>
        </div>

        <h1 className="text-2xl flex justify-center my-6">{text}</h1>
      </div>
    </>
  );
}

export default Breadcrumb;
