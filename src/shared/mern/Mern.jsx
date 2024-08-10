import React from "react";
import Coursebreadcrumb from "../../shared/CourseBreadCrumb/CourseBreadCrumb";
import { FaGraduationCap } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdRestartAlt } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import CoursesModule from "../coursesModule/CoursesModule";
import { Link } from "react-router-dom";
import { coursesMERNData } from "../../data/courseModule";

const Mern = () => {
  return (
    <>
      <Coursebreadcrumb
        coursename="MERN Stack "
        coursediscription="The MERN stack is a full-stack JavaScript solution comprising MongoDB, Express.js, React.js, and Node.js, enabling efficient, scalable, and dynamic web application development."
        star="4.8"
        review="10 Reviews"
        enrolled="100 Enrolled"
        hours="120 hours"
      />

      <div className="course-details lg:flex pt-4 pb-20">
        <div className="details-left lg:w-4/6 w-full pl-8 pt-8">
          <div className="about-course">
            <h3 className="mt-4 mb-6 text-2xl">About Course</h3>

            <p className="pr-20 mb-6">
              MERN Stack Development combines four powerful technologies:
              MongoDB, Express.js, React.js, and Node.js. This full-stack
              framework offers a seamless development experience, allowing
              developers to build robust, scalable, and high-performance web
              applications. MongoDB provides a flexible, document-oriented
              database, while Express.js offers a lightweight and efficient
              backend framework. React.js enables the creation of dynamic,
              responsive user interfaces, and Node.js ensures efficient
              server-side processing. With the MERN stack, developers can
              streamline their workflow, using JavaScript for both client and
              server-side development, reducing context switching and increasing
              productivity. Embracing the MERN stack is a step toward modern,
              efficient, and scalable web application development.
            </p>

            <p className="pr-20 mb-6">
              By enrolling in the Full Stack Development with MERN Stack
              training program, trainees will get 100% placement opportunities
              in top MNCs in India. The comprehensive course structure, detailed
              modules, and extensive study materials are designed to transform
              an ordinary web developer into a proficient full stack developer.
              Expert trainers at MTA India will ensure that trainees receive
              personalized guidance and support at every stage of the training
              program. This hands-on training will equip participants with the
              skills needed to excel in the competitive field of MERN stack
              development, paving the way for a successful career
            </p>

            <hr />
          </div>

          <div className="benifits">
            <h3 className="mt-4 mb-4 mt-8 text-2xl">Program Overview</h3>

            <ul className="list-disc pl-5 space-y-2 text-slate-950">
              <li>100% placement assistance program</li>
              <li>Exclusive training from Industry experts</li>
              <li>Structured & industry related curriculum</li>
              <li>Comprehensive career support</li>
              <li>Cloud based learning content</li>
              <li>Work on live projects</li>
              <li>Career Counseling support for students</li>
            </ul>

            <hr className="mt-5" />
          </div>

          <div className="whychoose">
            <h3 className="mt-4 mb-4 mt-8 text-2xl">Why Choose MTA India?</h3>

            <p>
              MTA India is offering the best options for the students where they
              can get to learn the trending technologies Choosing MTA India for
              winter training program would be the best option for the following
              reasons::
            </p>

            <ul className="list-disc pl-5 space-y-2 text-slate-950">
              <li>ISO Certified IT training center</li>
              <li>
                Expert professionals with more that 10+ years of experience
              </li>

              <li>Industry standard training</li>

              <li>Work on live projects during the training session</li>

              <li>Certification training program</li>

              <li>Online / Offline training</li>
              <li>100% placement assistance</li>
              <li>Internship opportunity</li>
            </ul>

            <hr className="mt-5" />
          </div>

          <div className="whychoose">
            <h3 className="mt-4 mb-4 mt-8 text-2xl">Career Scope</h3>

            <ul className="list-disc pl-5 space-y-2 text-slate-950">
              <li>Full Stack Developer</li>
              <li>Software Engineer</li>

              <li>Frontend Developer</li>

              <li>Backend Developer</li>

              <li>Web Application Developer</li>

              <li>And many more</li>
            </ul>

            <hr className="mt-5" />
          </div>
        </div>

        <div className="details-right lg:w-2/6 w-full py-20 mr-16">
          <div className="duration border-2 rounded-lg mx-6 px-6 py-10">
            <ul className="pl-5 space-y-2 text-slate-700">
              <li className="mb-3 flex">
                <FaGraduationCap className="text-2xl mr-2" />
                Level All Levels
              </li>

              <li className="mb-3 flex">
                <BsPeople className="text-2xl mr-2" />
                Totel Enrolled 100
              </li>

              <li className="mb-3 flex">
                <MdOutlineWatchLater className="text-2xl mr-2" />
                Duration 120 hours
              </li>

              <li className="mb-3 flex">
                <MdRestartAlt className="text-2xl mr-2" />
                Last Updated July 18, 2024
              </li>
            </ul>
          </div>

          <div className="social-icons border-2 rounded-lg mt-6 mx-6 px-6 py-6 text-center">
            <p className="mb-4 text-slate-700">Share This course</p>

            <ul className="pl-5 text-slate-700 flex flex-row justify-center">
              <Link to="https://www.facebook.com/mtaindia.org" target="_blank">
                <li className="border-2 px-3 py-3 rounded-full mb-3 mr-2">
                  <FaFacebookF className="text-lg" />
                </li>
              </Link>
              <Link to="https://www.instagram.com/mtaindia/" target="_blank">
                <li className="border-2 px-3 py-3 rounded-full mb-3 mr-2">
                  <FaInstagram className="text-lg" />
                </li>
              </Link>
              <Link to="https://www.youtube.com/mtaindia" target="_blank">
                <li className="border-2 p-3 rounded-full mb-3 mr-2">
                  <FaYoutube className="text-lg" />
                </li>
              </Link>
              <Link
                to="https://in.linkedin.com/company/mtaindiaorg"
                target="_blank"
              >
                <li className="border-2 p-3 rounded-full mb-3 mr-2">
                  <FaLinkedinIn className="text-lg" />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <CoursesModule courses={coursesMERNData} />
    </>
  );
};

export default Mern;
