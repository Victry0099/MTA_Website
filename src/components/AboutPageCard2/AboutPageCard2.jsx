import React from "react";

const AboutPageCard2 = () => {
  return (
    <>
      <section>
        <div className="p-4 w-full max-w-screen-2xl">
          <div className="bg-orange-50 shadow-md rounded-lg overflow-hidden grid grid-cols-1   sm:mx-0 lg:mx-10 md:grid-cols-2  gap-2">
            <div className="h-64 md:h-auto">
              <img
                className="w-full h-full object-cover"
                src="images/about7.jpg"
                alt="Placeholder"
              />
            </div>

            <div className=" flex flex-col justify-center p-6  sm:px-6 sm:py-4 lg:px-14 ">
              <div>
                <h3 className="text-2xl font-normal mb-2 font-serif leading-snug  md:text-2xl lg:text-4xl">
                  10,000+ happy students joined with us to achieve their goals
                </h3>
                <p className="text-gray-700 my-6 ">
                  It is very difficult for the patient to be able to achieve the
                  goal of coaching, but it is the same from time to time with
                  great pain and suffering for some people.
                </p>
                <ul className="list-disc text-justify">
                  <li>
                    The hands-on sessions and practical assignments have been
                    incredibly beneficial, helping to solidify the concepts and
                    skills learned during the course.
                  </li>
                  <li className="my-4">
                    The availability of both online and offline classes provides
                    great flexibility, allowing students to learn at their own
                    pace and convenience.
                  </li>
                  <li>
                    Joining MTA India has been a rewarding experience, providing
                    not just education but also the tools and confidence needed
                    to succeed in the IT industry.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPageCard2;
