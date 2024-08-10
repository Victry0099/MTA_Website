import React from "react";
import { data } from "../../data/whyJoinUs";

const WhyJoin = () => {
  return (
    <section className=" w-full my-20">
      <div className=" sm:pl-10 flex flex-col items-center">
        <h2 className="text-3xl sm:text-3xl md:text-4xl pb-3 font-medium font-serif ">
          Why StudyWith Us?
        </h2>
        <p className="text-black ">Become a valuable expert with MTA-INDIA.</p>
      </div>

      <div className="flex justify-center w-full h-full mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-flow-col-3 lg:grid-cols-3 gap-20 w-full max-w-screen-2xl px-12">
          {data?.map((program) => (
            <div
              className="flex flex-col justify-center items-center  bg-white w-full"
              key={program.id}
            >
              <div
                className="w-16 h-16 mb-4"
                dangerouslySetInnerHTML={{ __html: program.svg_img }}
              ></div>

              <div className="mt-4 text-center">
                <h3 className="text-2xl font-normal  sm:text-xl">
                  {program.title}
                </h3>
              </div>
              <div className="px-3 py-2">
                <p className="text-center">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
