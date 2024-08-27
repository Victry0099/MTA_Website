import React from "react";
import { motion } from "framer-motion";

export const trainer = [
  {
    id: 1,
    image: "images/trainer.jpg",
    date: "June 17, 2024 ",
    messages: "5 Students",
    role: "Admin",
    title: "Full Stack Web Developer",
    description: "How To Use Business Analysis Tools To Gain an Edge",
  },
  {
    id: 2,
    image: "images/trainer.jpg",
    date: "June 17, 2024 ",
    messages: "5 Students",
    role: "Admin",
    title: "Full Stack Web Developer",
    description: "How To Use Business Analysis Tools To Gain an Edge",
  },
  {
    id: 3,
    image: "images/trainer.jpg",
    date: "June 17, 2024 ",
    messages: "5 Students",
    role: "Admin",
    title: "Full Stack Web Developer",
    description: "How To Use Business Analysis Tools To Gain an Edge",
  },
  {
    id: 4,
    image: "images/trainer.jpg",
    date: "June 17, 2024 ",
    messages: "5",
    role: "Admin",
    title: "Full Stack Web Developer",
    description: "How To Use Business Analysis Tools To Gain an Edge",
  },
];

const Blog = () => {
  return (
    <section className="px-10">
      <div className="mb-5">
        <h2 className="font-medium text-4xl font-serif leading-relaxed ps-4">
          Latest from the Blog
        </h2>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trainer.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <motion.img
                src={trainer.image}
                alt="trainer"
                className="w-full h-56 object-cover object-top transition-transform duration-300"
                whileHover={{ scale: 1.08 }}
              />
              <div className="p-4">
                <p className="text-gray-600">{trainer.title}</p>
                <h3 className="text-lg font-bold">{trainer.description}</h3>
                <div className="flex gap-3">
                  <p className="text-gray-600">{trainer.date}</p>
                  <p className="text-gray-600">{trainer.messages}</p>
                  <p className="text-gray-600">{trainer.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
