import React from "react";
import { Link } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import { MdOutlinePlayLesson } from "react-icons/md";
import { TbClockHour5 } from "react-icons/tb";
import { GoArrowUpRight } from "react-icons/go";

import { onlyCoursesData } from "../../data/newCoursesData";

function Courses() {
  return (
    <section className="w-full px-4 md:px-8">
      <div className="course-main grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center py-10 gap-4">
        {onlyCoursesData?.map((element, index) => (
          <Link
            to={element.link}
            target="_blank"
            key={index}
            className=" bg-white rounded-lg shadow-md"
          >
            <img
              src={element.image}
              className="rounded-md object-center w-full h-52 border-b-2 border-b-red-100"
              alt={element.heading}
            />
            <div className="duration flex my-2 px-2">
              <div className="duration-left lg:w-1/3 w-1/2">
                <div className="flex">
                  <MdOutlinePlayLesson className="text-lg mt-1 mr-2" />
                  <span>{element.lesson}</span>
                </div>
              </div>
              <div className="duration-right lg:w-1/3 w-1/2">
                <div className="flex">
                  <TbClockHour5 className="text-lg mt-1 mr-2" />
                  <span>{element.hour}</span>
                </div>
              </div>
            </div>
            <h3 className="text-lg font-bold">{element.heading}</h3>
            <div className="text-md flex items-center mt-2 mb-3 px-2 ">
              <p>Rating {element.reviws}</p>
              <div className="flex ml-2 mt-1 text-sm">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
            </div>
            <hr />
            <div className="price-section px-2">
              <Link
                to={element.link}
                target="_blank"
                className="flex justify-between my-2"
              >
                <div className="price-left">
                  <p className="text-lg mt-2 text-red-400">
                    {element.course_price}
                  </p>
                </div>
                <div className="price-right">
                  <p className="text-lg mt-2 flex items-center">
                    Enroll Now
                    <GoArrowUpRight className="text-2xl ml-2" />
                  </p>
                </div>
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Courses;
