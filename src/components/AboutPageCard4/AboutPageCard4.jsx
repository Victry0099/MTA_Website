import React from "react";
import Button from "../../shared/Button/Button";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
const AboutPageCard4 = () => {
  return (
    <section className="w-full h-full my-16 flex justify-center">
      <div className="px-6 py-6 md:px-0 rounded-lg bg-blue-950 w-11/12 md:w-9/10 h-auto md:h-64 flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="w-full md:w-7/12 h-full flex justify-center flex-col pe-0 md:pe-4 ps-4 md:ps-6">
          <h2 className="text-white font-normal text-2xl md:text-2xl lg:text-3xl font-serif leading-snug">
            Join more than 10 Thousend learners worldwide
          </h2>
          <p className="text-white pt-5 lg:pe-10">
            Master in-demand IT skills with expert-led courses, flexible
            learning options, and hands-on training. Elevate your career in tech
            today!
          </p>
        </div>
        <div className="w-full md:w-5/12 flex justify-center md:justify-center">
          <Link
            to="/registration"
            className="flex items-center justify-center py-4 px-6 bg-orange-400 text-white rounded-sm hover:bg-orange-500"
          >
            <Button
              cssclass={"text-lg w-full text-end"}
              buttonName={"Get Started Now"}
            />
            <GoArrowUpRight className="h-6 w-6 ml-2 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPageCard4;
