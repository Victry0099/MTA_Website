import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdKeyboardArrowRight, MdOutlinePlayLesson } from "react-icons/md";
import { TbClockHour5 } from "react-icons/tb";
import { IoMdStar } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

function Coursebreadcrumb({
  coursename,
  coursediscription,
  star,
  review,
  enrolled,
  hours,
}) {
  return (
    <>
      <div className="course-breadcrumb-main lg:flex py-20 bg-[#131836]">
        <div className="course-bread-left lg:w-4/6 w-full text-white pl-8 flex flex-col">
          <div className="bread-icon flex">
            <Link to="/">
              <AiOutlineHome className="md:text-xl text-md sm:mr-2 mr-1 md:mt-1 mt-0" />
            </Link>
            <MdKeyboardArrowRight className="text-lg md:mt-2 mt-1 sm:mr-2 mr-1" />
            <span className="md:text-xl text-sm">Courses</span>
            <MdKeyboardArrowRight className="text-lg md:mt-2 mt-1 sm:mr-2 mr-1 ml-2" />
            <span className="md:text-xl text-sm">{coursename}</span>
          </div>

          <h1 className="text-3xl mt-6 mb-4">{coursename}</h1>
          <p className="mt-2 md:pr-24 pr-10">{coursediscription}</p>

          <div className="duration flex my-2 mt-4 md:flex-row flex-col">
            <div className="flex items-center mb-2 md:mb-0">
              <span className="mr-2">{star}</span>
              <div className="flex text-yellow-400">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
              <span className="ml-2 mr-3">{review}</span>
            </div>

            <div className="flex items-center mb-2 md:mb-0">
              <MdOutlinePlayLesson className="text-lg mr-2" />
              <span className="mr-3">{enrolled}</span>
            </div>

            <div className="flex items-center">
              <TbClockHour5 className="text-lg mr-2" />
              <span>{hours}</span>
            </div>
          </div>
        </div>

        <div className="course-bread-right lg:w-2/6 w-full lg:pl-0 pl-7 flex flex-col flex-wrap pr-10">
          <Link
            to="/registration"
            className="xl:w-96 text-lg md:text-xl w-auto inline-block flex justify-center py-4 rounded-md mt-6 bg-course-bred-crumb-bg-color text-white font-semibold"
          >
            Start Learning <GoArrowUpRight className="text-2xl ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Coursebreadcrumb;
