import React from "react";

const Skeleton = () => {
  return (
    <>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
          {/* Left Side Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to Our Platform
            </h1>
            <p className="text-gray-600 mb-6">
              Discover a wide range of courses and certifications to boost your
              skills.
            </p>
            <div className="space-x-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
                Get Started
              </button>
              <button className="px-6 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/500"
              alt="Hero Image"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skeleton;
