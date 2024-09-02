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
import { coursesFSDPythonData } from "../../data/courseModule";

function FullStackWithPython() {
  return (
    <>
      <Coursebreadcrumb
        coursename="Full Stack with Python"
        coursediscription="Full stack development with Python is one-of-a-kind course for developers who want to become an expert in full stack development."
        star="4.7"
        review="7 Reviews"
        enrolled="10 Enrolled"
        hours="45 hours"
      />

      <div className="course-details lg:flex pt-4 pb-20">
        <div className="details-left lg:w-4/6 w-full pl-8 pt-8">
          <div className="about-course">
            <h3 className="mt-4 mb-6 text-2xl">About Course</h3>

            <p className="pr-20 mb-6">
              Full stack development with Python is one-of-a-kind course for
              developers who want to become an expert in full stack development.
              Here, the developers can learn the basic and important aspects of
              web development and python programming along will its application
              in real world. MTA India has a mission to bring out the best full
              stack developers by providing top-notched training from expert
              professionals.
            </p>

            <p className="pr-20 mb-6">
              By enrolling on full stack development with python training
              program, the trainees will get 100% placement opportunities in top
              MNCs in India. The course structure, the modules, the study
              materials can help a normal web developer to become a successful
              full stack developer. Expert trainers at MTA India will leave no
              stone unturned to guide trainees in every stage of this training
              program.
            </p>

            <hr />
          </div>

          <div className="benifits">
            <h3 className="mt-4 mb-4 mt-8 text-2xl">Program Overview</h3>

            <ul className="list-disc pl-5 space-y-2 text-slate-950">
              <li>Guaranteed 100% Placement Assistance Program </li>
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
              <li>Guaranteed 100% Placement Assistance Program</li>
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
                Totel Enrolled 2
              </li>

              <li className="mb-3 flex">
                <MdOutlineWatchLater className="text-2xl mr-2" />
                Duration 18 hours
              </li>

              <li className="mb-3 flex">
                <MdRestartAlt className="text-2xl mr-2" />
                Last Updated June 18, 2024
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
      <CoursesModule courses={coursesFSDPythonData} />
    </>
  );
}

export default FullStackWithPython;
