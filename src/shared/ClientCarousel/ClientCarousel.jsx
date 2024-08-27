// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useMediaQuery } from "react-responsive";

// const images = [
//   {
//     id: 1,
//     image: "images/img1.jpg",
//     name: "Alice",
//     rating: 4,
//     roll: "Designer",
//     description: "Great theme with a lot of customization options!",
//   },
//   {
//     id: 2,
//     image: "images/img2.jpg",
//     name: "Bob",
//     rating: 5,
//     roll: "Developer",
//     description: "Very easy to use and customize.",
//   },
//   {
//     id: 3,
//     image: "images/img3.jpg",
//     name: "Charlie",
//     rating: 3,
//     roll: "Manager",
//     description: "Good theme but could use more features.",
//   },
//   {
//     id: 4,
//     image: "images/img4.jpg",
//     name: "John",
//     rating: 5,
//     roll: "Developer",
//     description:
//       "Customization is very easy with this theme. Clean and quality design and full support for any kind of request! Great theme!",
//   },
//   {
//     id: 5,
//     image: "images/img5.jpg",
//     name: "Diana",
//     rating: 4,
//     roll: "Tester",
//     description: "Well-organized and easy to navigate.",
//   },
// ];

// const ClientCarousel = ({ bgColor }) => {
//   const [selectedIndex, setSelectedIndex] = useState(2);
//   const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

//   const handleImageClick = (index) => {
//     setSelectedIndex(index);
//   };

//   const getVisibleImages = () => {
//     const numVisible = isLargeScreen ? 5 : 3;
//     const start = selectedIndex - Math.floor(numVisible / 2);
//     const end = selectedIndex + Math.ceil(numVisible / 2);
//     const visibleImages = [];
//     for (let i = start; i < end; i++) {
//       visibleImages.push(images[(i + images.length) % images.length]);
//     }
//     return visibleImages;
//   };

//   return (
//     <section>
//       <div
//         className={`flex flex-col justify-center items-center h-screen my-20 ${bgColor} `}
//       >
//         <div className="pb-16">
//           <h2 className="text-center font-serif font-medium text-4xl">
//             What Clients Are Saying
//           </h2>
//           <p className="text-center my-5">
//             Lorem ipsum dolor sit amet consectetur.
//           </p>
//         </div>

//         <div
//           className={`grid ${
//             isLargeScreen ? "grid-cols-5" : "grid-cols-3"
//           } gap-4 mb-4 w-9/12`}
//         >
//           {getVisibleImages().map((image, index) => {
//             const realIndex =
//               (selectedIndex -
//                 Math.floor((isLargeScreen ? 5 : 3) / 2) +
//                 index +
//                 images.length) %
//               images.length;
//             const isSelected = selectedIndex === realIndex;

//             return (
//               <motion.div
//                 key={image.id}
//                 onClick={() => handleImageClick(realIndex)}
//                 className="relative col-span-1 cursor-pointer flex justify-center items-center"
//                 initial={{
//                   opacity: isSelected ? 1 : 0.5,
//                   scale: isSelected ? 1.2 : 0.8,
//                   x: isSelected ? 0 : 50,
//                   zIndex: isSelected ? 10 : 1,
//                 }}
//                 animate={{
//                   opacity: isSelected ? 1 : 0.5,
//                   scale: isSelected ? 1.2 : 0.8,
//                   x: isSelected ? 0 : 50,
//                   zIndex: isSelected ? 10 : 1,
//                 }}
//                 transition={{
//                   duration: 3.8,
//                   ease: "easeIn",
//                   type: "spring",
//                   stiffness: 150,
//                   damping: 30,
//                   delay: isSelected ? 0 : 0.5,
//                 }}
//               >
//                 <motion.img
//                   src={image.image}
//                   alt={`Image ${image.id}`}
//                   className="w-24 h-24 object-cover rounded-2xl"
//                   initial={{ x: 50 }}
//                   animate={{ x: 0 }}
//                   transition={{
//                     duration: 1.8,
//                     ease: "easeIn",
//                     type: "spring",
//                     stiffness: 150,
//                     damping: 30,
//                   }}
//                 />
//               </motion.div>
//             );
//           })}
//         </div>
//         <div className="p-4 w-9/12">
//           {images[selectedIndex]?.description && (
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 1.2,
//                 delay: 0.2,
//                 ease: "easeIn",
//               }}
//               className="text-black"
//             >
//               <h3 className="text-gray-800 text-center text-xl py-1">{` ${images[selectedIndex].name} `}</h3>
//               <p className="text-center text-sm text-gray-600">
//                 {images[selectedIndex].roll}
//               </p>
//               <p className="text-yellow-500 text-center py-5">{`rating: ${images[selectedIndex].rating}`}</p>
//               <p className="text-center">{images[selectedIndex].description}</p>
//             </motion.div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientCarousel;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const images = [
  {
    id: 1,
    image: "images/img1.jpg",
    name: "Manitosh Poul",
    rating: "****",
    roll: "Full Stack Development With Java",
    description:
      ' "It was a wonderful experience with MTA India. I have learned Java so precisely and the training helped me a lot. Thanks to the experienced trainers out there. They are really the gems."',
  },
  {
    id: 2,
    image: "images/img2.jpg",
    name: "Vaishnavi Pathak",
    rating: 5,
    roll: "Full Stack Devlopment With Python",
    description:
      '" From the beginning, I was quite nervous about thetraining. Thanks to the trainer who helped me a lot and his training boost my courage. Now I can code from my heart. Thanks, MTA India for this amazing career-changing training. Looking forward to joining this training center again. "',
  },
  {
    id: 3,
    image: "images/img3.jpg",
    name: "Vikram Verma",
    rating: 3,
    roll: "MERN Developer",
    description:
      '" I felt honored to get admission in MTA India. The trainers, the staff, everyone is so friendly and helpful. I have also developed an app in Java. Thanks to the support of my trainer. He always motivated me when I was stuck somewhere. Thank you, sir. Hats off."',
  },
  {
    id: 4,
    image: "images/img4.jpg",
    name: "Manvi Roy",
    rating: 5,
    roll: "Frontend With React",
    description:
      "I’m so honored to be a part of MTA India. The trainers and staff are not only knowledgeable but also extremely supportive. I developed a Website, all thanks to my trainer’s encouragement and guidance. Whenever I felt lost, he was there to motivate me. I can't thank him enough. Hats off to the entire team!",
  },
  {
    id: 5,
    image: "images/img5.jpg",
    name: "Janvi Singh",
    rating: 4,
    roll: "Tester",
    description:
      "Being accepted into MTA India has been an amazing experience. The trainers and staff go above and beyond to support us. With their guidance, I was able to create a Real time Chating Webapp, which I’m very proud of. My trainer's constant motivation made all the difference. Thank you so much, sir, for believing in me and pushing me to do my best.",
  },
];

const ClientCarousel = ({ bgColor }) => {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const getVisibleImages = () => {
    const numVisible = isLargeScreen ? 5 : 3;
    const start = selectedIndex - Math.floor(numVisible / 2);
    const end = selectedIndex + Math.ceil(numVisible / 2);
    const visibleImages = [];
    for (let i = start; i < end; i++) {
      visibleImages.push(images[(i + images.length) % images.length]);
    }
    return visibleImages;
  };

  return (
    <section className="hidden md:block">
      <div
        className={`flex flex-col justify-center items-center h-screen my-16 ${bgColor} `}
      >
        <div className="pb-16">
          <h2 className="text-center font-serif font-medium text-4xl">
            What Clients Are Saying
          </h2>
        </div>

        <div
          className={`grid ${
            isLargeScreen ? "grid-cols-5" : "grid-cols-3"
          } gap-4 mb-4 w-9/12`}
        >
          {getVisibleImages().map((image, index) => {
            const realIndex =
              (selectedIndex -
                Math.floor((isLargeScreen ? 5 : 3) / 2) +
                index +
                images.length) %
              images.length;
            const isSelected = selectedIndex === realIndex;

            return (
              <motion.div
                key={image.id}
                onClick={() => handleImageClick(realIndex)}
                className="relative col-span-1 cursor-pointer flex justify-center items-center"
                initial={{
                  opacity: isSelected ? 1 : 0.5,
                  scale: isSelected ? 1.2 : 0.8,
                  x: isSelected ? 0 : 50,
                  zIndex: isSelected ? 10 : 1,
                }}
                animate={{
                  opacity: isSelected ? 1 : 0.5,
                  scale: isSelected ? 1.2 : 0.8,
                  x: isSelected ? 0 : 50,
                  zIndex: isSelected ? 10 : 1,
                }}
                transition={{
                  duration: 3.8,
                  ease: "easeIn",
                  type: "spring",
                  stiffness: 150,
                  damping: 30,
                  delay: isSelected ? 0 : 0.5,
                }}
              >
                <motion.img
                  src={image.image}
                  alt={`Image ${image.id}`}
                  className="w-24 h-24 object-cover rounded-2xl"
                  initial={{ x: 50 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 1.8,
                    ease: "easeIn",
                    type: "spring",
                    stiffness: 150,
                    damping: 30,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
        <div className="p-4 w-9/12">
          {images[selectedIndex]?.description && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                ease: "easeIn",
              }}
              className="text-black"
            >
              <h3 className="text-gray-800 text-center text-xl py-1">{` ${images[selectedIndex].name} `}</h3>
              <p className="text-center text-lg text-gray-600 py-5">
                {images[selectedIndex].roll}
              </p>

              <em className="text-justify text-xl leading-relaxed font-medium">
                {images[selectedIndex].description}
              </em>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
