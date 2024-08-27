// import React from "react";

// import { heroPageCardData2 } from "../../data/heroPageCard2";

// const Card = ({ title, svgImage }) => (
//   <div className="bg-white p-2  flex flex-col items-center justify-center">
//     <div
//       className="w-16 h-16 flex justify-center items-center"
//       dangerouslySetInnerHTML={{ __html: svgImage }}
//     />

//     <p className="text-center text-black">{title}</p>
//   </div>
// );

// const HeroPageCard2 = () => (
//   <div className="border-t-2 border-b-2 border-gray-200 p-4 mb-4 ">
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4">
//       {heroPageCardData2?.map((item, index) => (
//         <Card key={index} title={item.title} svgImage={item.svg_image} />
//       ))}
//     </div>
//   </div>
// );

// export default HeroPageCard2;

import React from "react";
import { heroPageCardData2 } from "../../data/heroPageCard2";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = ({ title, svgImage }) => (
  <motion.div
    className="bg-white p-2 flex flex-col items-center justify-center"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div
      className="w-16 h-16 flex justify-center items-center"
      dangerouslySetInnerHTML={{ __html: svgImage }}
    />
    <p className="text-center text-black">{title}</p>
  </motion.div>
);

const HeroPageCard2 = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="border-t-2 border-b-2 border-gray-200 p-4 mb-4">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut",
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {heroPageCardData2?.map((item, index) => (
          <Card key={index} title={item.title} svgImage={item.svg_image} />
        ))}
      </motion.div>
    </div>
  );
};

export default HeroPageCard2;
