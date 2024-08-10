import React from "react";
import Button from "../../shared/Button/Button";
import { GoArrowUpRight } from "react-icons/go";

import { Link } from "react-router-dom";
const HeroPageCard3 = () => {
  return (
    <section>
      <div className="p-4 w-full max-w-screen-2xl mx-auto">
        <div className="bg-blue-100 shadow-md rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 md:mx-0 lg:mx-10 gap-2">
          {/* Content Section */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2 font-serif">
                Learn Latest Skills; Advance Your Career
              </h2>
              <p className="text-gray-700 mb-4">
                Master the latest IT skills to stay ahead in the ever-evolving
                tech industry. Our comprehensive training programs are designed
                to help you master cutting-edge technologies, ensuring you
                remain competitive and relevant. With our expert instructors,
                you'll gain the knowledge and confidence needed to tackle
                real-world challenges and excel in your career.
              </p>
              <div className="w-44 mt-10">
                <Link
                  to="/registration"
                  className="flex justify-center items-center py-3 px-4 text-homepage-button-color sm:justify-center md:justify-center bg-homepage-button-bg-color rounded-sm"
                  target="_blank"
                >
                  <Button
                    cssclass={"text-lg w-28 "}
                    buttonName={"Get Started"}
                  />
                  <GoArrowUpRight className="h-8 w-6 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="h-64 md:h-auto">
            <img
              className="w-full h-full object-cover"
              src="images/hero_img3.jpg"
              alt="Placeholder"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPageCard3;
