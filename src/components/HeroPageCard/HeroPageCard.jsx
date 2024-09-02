import React from "react";
import Button from "../../shared/Button/Button";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroPageCard = () => {
  return (
    <>
      <main className="bg-homepage-bg min-h-screen">
        <section>
          <div className="flex flex-col lg:w-full lg:flex-row justify-center items-center px-4 py-4 lg:py-8">
            <motion.div
              className="w-full lg:w-full p-4 lg:ps-10"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-2xl md:text-4xl xl:text-5xl font-md mb-4 text-homepage-heading font-serif lg:leading-normal">
                Crafting Tomorrow's Leaders: Join{" "}
                <span className="text-homepage-heading1 font-serif leading-relaxed">
                  MTA INDIA
                </span>{" "}
                E-Learning Revolution
              </h1>
              <p className="text-justify text-base sm:text-lg leading-relaxed">
                Unlock Your Future in IT with MTA India! Dive into cutting-edge
                training and internships that will catapult your career. Learn
                from industry experts and gain hands-on experience. Join us
                today and become a tech leader of tomorrow!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-10 md:items-center">
                <Link
                  to="/registration"
                  className="flex justify-center items-center py-2 px-4 text-homepage-button-color sm:justify-center md:justify-center bg-homepage-button-bg-color rounded-sm md:h-12"
                  target="_blank"
                >
                  <Button
                    cssclass={"text-lg w-28"}
                    buttonName={"Get Started"}
                  />
                  <GoArrowUpRight className="h-8 w-6 ml-2" />
                </Link>
                <Link
                  to="/courses"
                  className="flex items-center justify-center py-2 px-4 text-homepage-button-color1 bg-homepage-button-bg-color1 rounded-sm border-2 border-bg-black md:h-12"
                >
                  <Button
                    cssclass={"text-md w-32"}
                    buttonName={"Explore Courses"}
                  />
                  <GoArrowUpRight className="h-8 w-6 ml-2" />
                </Link>
                <motion.div
                  className="w-full lg:w-1/3 mt-6 lg:mt-0 md:mt-0"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                  <img
                    src="images/hero_img1.jpg"
                    alt="student says"
                    className="w-full h-auto rounded-lg"
                  />
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="w-full hidden xl:flex p-4 justify-center lg:justify-end"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <img
                src="images/hero_img.jpg"
                alt="Placeholder"
                className="w-3/4 h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HeroPageCard;
