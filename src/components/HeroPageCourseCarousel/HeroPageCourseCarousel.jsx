import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStar, FaUser } from "react-icons/fa";
import { TbClockHour3 } from "react-icons/tb";
import { BsFileEarmarkWord } from "react-icons/bs";
import Button from "../../shared/Button/Button";
import { GoArrowUpRight } from "react-icons/go";
import { course } from "../../data/heroPageCourse";
import { motion } from "framer-motion";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1440 },
    items: 4,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const HeroPageCourseCarousel = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 }, // Initial state: out of view
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }, // Smooth transition
    },
  };

  return (
    <section className="w-full h-full flex justify-center mt-20 sm:px-0 lg:px-12">
      <div className="w-full p-4 md:px-0">
        <p className="text-cyan-500 px-4 pt-4 tracking-widest">
          GROW YOUR CAREER
        </p>
        <h2 className="text-2xl md:text-3xl pb-7 px-4 font-medium">
          Upcoming Batches <span className="text-emerald-400">Enroll Now</span>
        </h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          showDots={true}
          arrows={false}
          keyBoardControl={true}
          customTransition="all 0.5s ease"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          {course?.map((item) => (
            <motion.div
              key={item.id}
              className="w-full px-4 md:px-2 mb-9"
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <div className="relative flex flex-col shadow-lg rounded-lg overflow-hidden w-full">
                <div className="w-full flex justify-center items-center bg-green-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-center w-full h-48 border-b-2 border-b-red-100"
                  />
                </div>
                <div className="px-2 border-b-2 border-gray-300">
                  <div className="flex gap-2 mt-3">
                    <div className="flex border-r-2 border-gray-400">
                      <BsFileEarmarkWord className="mt-2 text-slate-500 text-sm" />
                      <p className="text-gray-600 text-md py-1 px-1">
                        {item.lesson}
                      </p>
                    </div>

                    <div className="flex">
                      <TbClockHour3 className="mt-2 text-slate-500" />
                      <p className="text-gray-600 text-md py-1">{item.hour}</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <h3 className="text-gray-900 text-md md:text-base font-normal py-2">
                      <a
                        href={item.link}
                        className="hover:text-blue-900 hover:underline md:text-sm lg:text-lg xl:text-xl"
                      >
                        {item.title}
                      </a>
                    </h3>
                    <div className="flex gap-1">
                      <div className="flex items-center py-1">
                        {Array.from({ length: item.star }).map((_, i) => (
                          <FaStar
                            key={i}
                            className="text-slate-700 mr-1 w-4 h-4"
                          />
                        ))}
                      </div>
                      <div className="flex items-center py-1">
                        <FaUser className="text-gray-600 mr-2" />
                        <span className="text-gray-600">
                          {item.student_rate}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-md py-1">
                      Trainer: {item.trainer_name}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-orange-400 text-md py-1 ps-2 md:text-base">
                      {item.course_price}
                    </p>
                    <a
                      href={item.link}
                      className="flex items-center justify-center py-2 pe-4 text-homepage-button-color2 rounded-sm"
                    >
                      <Button
                        cssclass={"text-md w-32 text-end"}
                        buttonName={"Enroll Course"}
                      />
                      <GoArrowUpRight className="h-4 w-4 text-slate-600" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HeroPageCourseCarousel;
