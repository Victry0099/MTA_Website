import React from "react";

const MtaInfo = () => {
  return (
    <>
      <section className="my-8">
        <div className="p-4 w-full max-w-screen-2xl">
          <div className="bg-orange-50 shadow-md rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 sm:mx-4 md:mx-0 lg:mx-10  gap-2 ">
            <div className="h-64 md:h-auto">
              <img
                className="w-full h-full object-cover"
                src="images/hero_img2.jpg"
                alt="Placeholder"
              />
            </div>

            <div className=" p-4 flex flex-col justify-center sm:px-5 sm:py-4 md:p-4 lg:p-16 ">
              <div>
                <h2 className="text-2xl  font-normal mb-2 font-serif sm:text-lg xl:text-4xl xl:leading-snug ">
                  Success Isn’t a Mystery: Learn from Those Who’ve Found the
                  Blueprint to a Fulfilling Life.
                </h2>
                <p className="text-gray-700 mb-4">
                  Discover proven strategies and insights to achieve your own
                  meaningful goals.
                </p>
              </div>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="  ps-8 border-s-2 border-orange-400">
                    <h4 className="text-xl font-semibold mb-2">20 +</h4>
                    <p>Qualified Instructor</p>
                  </div>
                  <div className=" ps-8 border-s-2 border-orange-400">
                    <h4 className="text-xl font-semibold mb-2">5k +</h4>
                    <p>Course enrolments</p>
                  </div>

                  {/* Second Row */}
                  <div className=" ps-8 border-s-2 border-orange-400">
                    <h4 className="text-xl font-semibold mb-2">20+</h4>
                    <p>Courses in 2 languages</p>
                  </div>
                  <div className=" ps-8 border-s-2 border-orange-400">
                    <h4 className="text-xl font-semibold mb-2">100+</h4>
                    <p>Online Videos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MtaInfo;
