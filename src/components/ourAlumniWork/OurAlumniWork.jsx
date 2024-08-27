import React from "react";
import { companyLogo } from "../../data/alumniWork";
import { motion } from "framer-motion";
const OurAlumniWork = () => {
  return (
    <section className="py-10">
      <div className="mb-5">
        <h2 className="text-center font-medium text-4xl font-serif leading-relaxed ps-4">
          Our Alumni Work
        </h2>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {companyLogo?.map((trainer) => (
            <div key={trainer.id} className="bg-white">
              <motion.img
                src={trainer.image}
                alt="logo"
                className="w-52 h-32  transition-transform duration-300"
                whileHover={{ scale: 1.08 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAlumniWork;
