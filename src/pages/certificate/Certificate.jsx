import React from "react";
import { certificateData } from "../../data/certificate";
import { motion } from "framer-motion";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
const Certificate = () => {
  return (
    <>
      <Breadcrumb text={"Certificate"} />
      <section className="w-full py-9">
        <div className="container mx-auto px-4 md:w-4/5 ">
          <div>
            <h1 className="text-center font-medium text-4xl py-5">
              Certification from MTA-India
            </h1>
            <div>
              <p className="leading-loose text-lg text-justify">
                MTA India is offering career-driven certification programs for
                students and corporate professionals alike to help them build a
                path towards their success. These certificates will help boost
                their CVs in different ways. If you are a student or fresher,
                you can show these certifications during the interview process.
                And if you are an expert professional, you can have these
                certifications to improve your skills.
              </p>
              <p className="leading-loose text-lg pt-10 text-justify">
                These certificates validate entry-level skills in a choice of
                mission-critical IT domains such as network &amp; database
                administration, software development, computer security, etc.
                MTA India is providing such certification programs where
                students or expert professionals not only get career-booster
                certificates, but also get trained by expert professionals to
                work on live projects. Enrollment in certification programs by
                MTA India will help students &amp; expert professionals receive
                industry-standard training to boost their careers.
              </p>
            </div>
          </div>

          <div className="py-8">
            <h2 className="text-center font-medium text-cyan-500 text-4xl my-8 uppercase">
              Certification Program
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {certificateData?.map((data) => (
                <div key={data.id} className="bg-white  overflow-hidden">
                  <motion.img
                    src={data.image}
                    alt={data.name}
                    className="w-full rounded-lg shadow-md object-fill object-top transition-transform duration-300"
                    whileHover={{ scale: 1.08 }}
                  />

                  <div className="p-4">
                    <h3 className="text-xl text-center"> {data.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificate;
