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
import { Link } from "react-router-dom";
import { coursesFrontendReactData } from "../../data/courseModule";
import CoursesModule from "../coursesModule/CoursesModule";
const FrontendWithReact = () => {
  return (
    <>
      <Coursebreadcrumb
        coursename="Frontend With React.js"
        coursediscription="Master React.js to build dynamic web interfaces with component-based architecture, JSX, and virtual DOM. Gain practical skills and expert guidance to excel in modern frontend development and secure top tech roles."
        star="4.8"
        review="105 Reviews"
        enrolled="100 Enrolled"
        hours="45 hours"
      />

      <div className="course-details lg:flex pt-4 pb-20">
        <div className="details-left lg:w-4/6 w-full pl-8 pt-8">
          <div className="about-course">
            <h3 className="mt-4 mb-6 text-2xl">About Course</h3>

            <p className="pr-20 mb-6">
              Frontend development uses HTML for structure, CSS for styling, and
              JavaScript for interactivity. React.js, developed by Facebook,
              enhances this process with a component-based architecture. It
              allows you to create reusable components that encapsulate HTML,
              CSS, and JavaScript, making development modular and maintainable.
              JSX, a syntax extension, lets you write HTML-like code within
              JavaScript. React’s virtual DOM updates only the changed parts of
              the actual DOM, ensuring fast performance. With tools like Redux
              for state management and React Router for navigation, React
              simplifies creating dynamic and efficient single-page
              applications, combining traditional web technologies with modern
              approaches.
            </p>

            <p className="pr-20 mb-6">
              Enroll in our Frontend Development with React.js training to gain
              the skills needed for top placement opportunities in the tech
              industry. Our comprehensive course includes detailed modules and
              extensive study materials, transforming you into a proficient
              React.js developer. Expert trainers at MTA India provide
              personalized guidance and support throughout the program. This
              hands-on training equips you with the necessary skills to excel in
              building dynamic and responsive user interfaces, paving the way
              for a successful career in frontend development.
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
      <CoursesModule courses={coursesFrontendReactData} />
    </>
  );
};

export default FrontendWithReact;
