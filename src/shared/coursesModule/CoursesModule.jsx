import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CoursesModule = ({ courses }) => {
  const initialOpenState = Object.keys(courses).reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {});

  const [openSections, setOpenSections] = useState(initialOpenState);

  const toggleSection = (section) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [section]: !prevOpenSections[section],
    }));
  };

  return (
    <div className="p-6 w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
      <h2 className="text-center font-semibold text-4xl uppercase my-10">
        Course Curriculum
      </h2>
      {Object.keys(courses).map((course) => (
        <div key={course} className="mb-4 border-2 border-slate-300 rounded-lg">
          <h2
            className="text-xl font-semibold cursor-pointer bg-white text-black p-2 rounded flex justify-between items-center hover:bg-slate-100"
            onClick={() => toggleSection(course)}
          >
            {course}
            {openSections[course] ? <FaChevronUp /> : <FaChevronDown />}
          </h2>
          {openSections[course] && (
            <ol className="list-decimal list-inside mt-2">
              {courses[course].map((module, index) => (
                <li key={index} className="ml-4">
                  {module}
                </li>
              ))}
            </ol>
          )}
        </div>
      ))}
    </div>
  );
};

export default CoursesModule;
