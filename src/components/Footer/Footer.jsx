import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGlobeAmericas,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import { Link } from "react-router-dom";

import { FaGooglePlay } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="bg-white px-12 pt-10">
        <div className="container mx-auto text-black">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5 md:place-items-center">
            <div className="w-full h-full md:flex md:flex-col md:items-center">
              <div className="text-homepage-heading1 font-semibold text-2xl font-sans tracking-wide">
                <p>MTA-INDIA</p>
                <p className="text-black font-normal text-xs font-sans">
                  We Make IT Professional
                </p>
              </div>

              <ul className="text-slate-800 mt-8">
                <li className="flex my-2">
                  <IoIosCall className="text-2xl mr-2 text-slate-800" />
                  <p>+91-9315636357</p>
                </li>
                <li className="flex my-2">
                  <MdOutgoingMail className="text-2xl mr-2 text-slate-800" />
                  <Link to="mailto:hello@mtaindia.org">hello@mtaindia.org</Link>
                </li>
                <li className="flex my-2">
                  <FaGlobeAmericas className="text-xl mr-2 text-slate-800" />
                  <Link to="https://mtaindia.org/" target="_blank">
                    www.mtaindia.org
                  </Link>
                </li>
              </ul>

              <ul className="flex space-x-2 text-slate-300 mt-4">
                <li className="rounded-full p-2 bg-slate-200 text-slate-800">
                  <Link
                    to="https://www.facebook.com/mtaindia.org"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="rounded-full p-2 bg-slate-200 text-slate-800">
                  <Link
                    to="https://www.instagram.com/mtaindia/"
                    target="_blank"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li className="rounded-full p-2 bg-slate-200 text-slate-800">
                  <Link to="https://www.youtube.com/mtaindia" target="_blank">
                    <FaYoutube />
                  </Link>
                </li>
                <li className="rounded-full p-2 bg-slate-200 text-slate-800">
                  <Link
                    to="https://in.linkedin.com/company/mtaindiaorg"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full h-full md:flex md:flex-col md:items-center">
              <h1 className="text-xl mb-4">Company</h1>
              <ul className="space-y-2 text-slate-950">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/registration">Registration</Link>
                </li>
                <li>
                  <Link to="/certificate">Certificate</Link>
                </li>
              </ul>
            </div>

            <div className="w-full h-full md:flex md:flex-col md:items-center">
              <h1 className="text-xl mb-4">Useful Links</h1>
              <ul className="space-y-2 text-slate-950">
                <li>
                  <Link to="/terms-Conditions">Terms & Conditions</Link>
                </li>

                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/refund-policy">Refund Policy</Link>
                </li>
              </ul>
            </div>

            <div className="w-full h-full md:flex md:flex-col md:items-center">
              <h1 className="text-xl mb-4">Popular Categories</h1>
              <ul className="space-y-2 text-slate-950">
                <li>
                  <Link to="/courses/full-stack-python">Python Full Stack</Link>
                </li>
                <li>
                  <Link to="/courses/full-stack-java">Java Full Stack</Link>
                </li>

                <li>
                  <Link to="/courses/mern-stack">React</Link>
                </li>

                <li>
                  <Link to="/courses/react">MERN Stack</Link>
                </li>
              </ul>
            </div>

            <div className="w-full h-full  md:flex md:flex-col md:items-center ">
              <h1 className="text-xl mb-4">Get the app</h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="https://play.google.com/store/apps/details?id=co.tarly.konax">
                  <div className="flex items-center py-2 px-4 w-48 ms:w-48 rounded-md bg-[#f3f3f3] hover:bg-slate-300">
                    <FaGooglePlay className="text-xl mr-3" />
                    <p className="text-sm">
                      Get it on <br />
                      <span className="text-lg font-normal">Google Play</span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <hr className="mt-6" />
        </div>

        <div className="py-8">
          <p className="text-center text-black">
            Copyright &copy; 2024. All Rights Reserved By{" "}
            <Link
              to="https://mtaindia.org/"
              className="text-slate-800 font-semibold"
            >
              www.mtaindia.org
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
