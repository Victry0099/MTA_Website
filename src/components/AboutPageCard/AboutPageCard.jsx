import React from "react";

const AboutPageCard = () => {
  return (
    <section className="w-full px-8 pt-5 pb-20">
      <div className="w-full flex items-center justify-center px-4 sm:px-10 md:px-20 py-7 ">
        <p className="text-base font-medium sm:text-lg md:text-xl leading-loose text-justify">
          Microdot Tech Aspire Solutions Pvt. Ltd. (MTA India) is a leading
          ISO-certified IT Training Institute dedicated to providing top-notch
          IT education across India. With over 13 years of experience, MTA India
          has been instrumental in shaping the careers of thousands of students
          through both online and classroom training. Our institute understands
          the rapidly evolving demands of the tech industry and equips our
          trainees with the latest skills and knowledge required to excel in
          their chosen fields. At MTA India, we believe that learning has no
          boundaries, and we are committed to supporting individuals of all ages
          in pursuing a successful career in the IT sector.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 pt-10">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="pb-8">
            <img
              src="images/about1.jpg"
              alt="About 1"
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="images/about2.jpg"
              alt="About 2"
              className="w-full h-auto"
            />
            <img
              src="images/about3.jpg"
              alt="About 3"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <img
            src="images/about4.jpg"
            alt="About 4"
            className="w-full h-auto"
          />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="images/about5.jpg"
              alt="About 5"
              className="w-full h-auto"
            />
            <img
              src="images/about6.jpg"
              alt="About 6"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-gradient-to-r from-[#FD3CD0] to-[#FF732D] rounded-lg w-full h-64 mt-8 flex justify-center items-center">
            <p className=" text-2xl leading-relaxed font-medium px-4 md:px-8 text-center text-white">
              “Be open to new ideas and approaches. Develop your problem-solving
              skills.”
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-4 mt-10 sm:px-0 md:px-4 lg:px-4 ">
        <div className="bg-green-100 px-5 py-5 rounded-md md:w-1/2">
          <h3 className="text-center text-2xl sm:text-3xl mb-3 font-semibold text-purple-600">
            Our Mission
          </h3>
          <p className="text-base sm:text-lg text-justify">
            Our mission at MTA India is to empower students and professionals by
            providing them with a solid platform to build their careers in the
            IT industry. Whether you aspire to be a developer, designer, or
            database administrator, we offer comprehensive training programs led
            by expert professionals to help you master the latest technologies.
            We strive to be the one-stop solution for all your IT training
            needs, ensuring that every individual who walks through our doors
            gains not only technical expertise but also the confidence to
            succeed in the competitive tech landscape.
          </p>
        </div>
        <div className="bg-pink-100 px-5 py-5 rounded-md md:w-1/2">
          <h3 className="text-center text-2xl sm:text-3xl mb-3 font-semibold text-orange-400">
            Our Vision
          </h3>
          <p className="text-base sm:text-lg text-justify">
            MTA India's vision is to deliver quality IT training that directly
            contributes to building successful IT careers. We are dedicated to
            transforming the uncertainty and doubts of our trainees into
            confidence and clarity. By offering in-depth knowledge and practical
            skills in cutting-edge technologies, we aim to prepare our trainees
            for the challenges of the tech industry. Despite the various
            challenges we've faced, MTA India remains steadfast as one of
            India's leading IT training centers, committed to excellence in
            education and career development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPageCard;
