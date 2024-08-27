import React from "react";
import Button from "../../shared/Button/Button";
import { GoArrowUpRight } from "react-icons/go";
import { FaCircleCheck } from "react-icons/fa6";

const InstructorCard = () => {
  return (
    <>
      <section className="my-12">
        <div className="px-4 md:px-8">
          <div className="flex flex-col justify-center items-center md:flex-row lg:flex-row xl:flex-row bg-orange-100 shadow-md rounded-lg">
            <div className="flex-1 xl:w-[60%] p-4 ">
              <h2 className="text-3xl md:text-2xl lg:text-3xl font-semibold mb-4 font-serif">
                Become an Instructor
              </h2>
              <p className="mb-8 text-sm md:text-base">
                Join our dynamic team of IT professionals and make a significant
                impact by becoming an instructor. At our training-cum-internship
                platform, you have the opportunity to share your expertise with
                aspiring IT professionals and shape the next generation of tech
                leaders.
              </p>
              <div className="flex flex-col lg:flex-row gap-3 mb-4 md:mb-8">
                <p className="flex items-center gap-2 text-sm md:text-base">
                  <FaCircleCheck /> Earn money
                </p>
                <p className="flex items-center gap-2 text-sm md:text-base">
                  <FaCircleCheck /> Inspire students
                </p>
                <p className="flex items-center gap-2 text-sm md:text-base">
                  <FaCircleCheck /> Join our community
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center xl:w-[30%] p-4 md:p-8 ">
              <img
                src="images/hero_img1.jpg"
                alt="student image"
                className="w-full h-auto mb-4 md:mb-8 md:w-56"
              />
              {/* <a
                href="#"
                className="flex justify-center items-center py-2 px-4 text-homepage-button-color bg-homepage-button-bg-color rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  cssclass={"text-sm md:text-md w-32 md:w-48"}
                  buttonName={"Start Teaching Today"}
                />
                <GoArrowUpRight className="h-6 w-4 md:h-8 md:w-6 ml-2" />
              </a> */}
            </div>
            <div className="hidden xl:block xl:w-[30%] p-4 md:p-8">
              <img
                className="w-full h-auto -mt-14"
                src="images/hero_img4.jpg"
                alt="Person"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstructorCard;
