import React from "react";
import { motion } from "framer-motion";

const Skeleton = () => {
  return (
    <>
      {/* Navbar Skeleton */}
      <header className="sticky top-0 z-50">
        <nav className="bg-gray-200 p-4 border-b-2 border-b-gray-300">
          <div className="container mx-auto flex justify-between items-center lg:justify-around md:justify-between">
            <motion.div
              className="w-32 h-8 bg-gray-300 rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="hidden md:flex space-x-4 text-lg ">
              {Array(6)
                .fill("")
                .map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-20 h-6 bg-gray-300 rounded-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                ))}
            </div>
            <div className="md:hidden">
              <motion.div
                className="w-6 h-6 bg-gray-300 rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
          <div className="md:hidden flex flex-col space-y-2 mt-2">
            {Array(6)
              .fill("")
              .map((_, index) => (
                <motion.div
                  key={index}
                  className="w-32 h-6 bg-gray-300 rounded-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
              ))}
          </div>
        </nav>
      </header>

      {/* Hero Page Skeleton */}
      <main className="bg-gray-200 min-h-screen">
        <section>
          <div className="flex flex-col lg:w-full lg:flex-row justify-center items-center px-4 py-4 lg:py-8">
            {/* Left Side Content */}
            <div className="w-full lg:w-full p-4 lg:ps-10">
              <motion.div
                className="h-12 w-3/4 bg-gray-300 rounded-md mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="h-4 w-full bg-gray-300 rounded-md mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
              <motion.div
                className="h-4 w-5/6 bg-gray-300 rounded-md mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.div
                className="h-4 w-2/3 bg-gray-300 rounded-md mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />

              <div className="flex flex-col sm:flex-row gap-3 mt-10 md:items-center">
                <motion.div
                  className="h-10 w-28 bg-gray-300 rounded-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                />
                <motion.div
                  className="h-10 w-32 bg-gray-300 rounded-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
              </div>
            </div>

            {/* Right Side Image */}
            <div className="w-full hidden xl:flex p-4 justify-center lg:justify-end">
              <motion.div
                className="w-3/4 h-96 bg-gray-300 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Skeleton;
