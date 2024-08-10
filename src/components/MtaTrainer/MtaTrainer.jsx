import React from "react";
import { traner } from "../../data/MtaTranerInfo";
import { MdPeopleOutline } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaStar } from "react-icons/fa6";
const MtaTrainer = () => {
  return (
    <>
      <section className="my-10 w-full">
        <div className=" px-3 sm:px-4 md:px-4  lg:px-14">
          <div className="mb-5">
            <h2 className="font-medium text-4xl font-serif leading-relaxed">
              Learn From The Best Instructors
            </h2>
            <p>
              Gain insights and skills from top IT professionals with years of
              industry experience, ensuring you receive the highest quality
              education.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {traner?.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-center"
                />
                <div className="p-4 flex-grow flex flex-col">
                  <div className="flex gap-3">
                    <p className="text-gray-700 mb-2 flex items-center gap-2">
                      {" "}
                      <MdPeopleOutline /> {item.student}
                    </p>
                    <p className="text-gray-700 mb-2 flex items-center gap-2">
                      {" "}
                      <HiOutlineDocumentText /> {item.course}
                    </p>
                  </div>
                  <h3 className="text-lg font-normal mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-2">{item.trainer_name}</p>

                  <div className="flex items-center">
                    <p className="text-slate-600 flex gap-2 items-center">
                      {item.star}
                      <FaStar />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MtaTrainer;
