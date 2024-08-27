// import React from "react";
// import { aboutData } from "../../data/aboutPageData";
// const AboutPageCard3 = () => {
//   return (
//     <div>
//       <section className=" w-full my-20">
//         <div className="flex justify-center w-full h-full mt-10">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 w-full max-w-screen-2xl px-12">
//             {aboutData?.map((program) => (
//               <div
//                 className="flex flex-col justify-center items-center   bg-white w-full"
//                 key={program.id}
//               >
//                 <div className="w-16 h-16 mb-4">
//                   <img src={program.svg_img} alt="" />
//                 </div>

//                 <div className="mt-4 text-center">
//                   <h3 className="text-2xl font-semibold">{program.title}</h3>
//                 </div>
//                 <div className="px-3 py-2">
//                   <p className="text-center">{program.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPageCard3;

import React from "react";
import { aboutData } from "../../data/aboutPageData";

const AboutPageCard3 = () => {
  return (
    <section className="w-full my-20 px-4">
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-28 md:gap-8 max-w-screen-xl">
          {aboutData?.map((program) => (
            <div
              className="flex flex-col items-center bg-white p-6  "
              key={program.id}
            >
              <div className="w-16 h-16 mb-4">
                <img
                  src={program.svg_img}
                  alt={program.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-3xl font-semibold mb-2 md:text-xl">
                {program.title}
              </h3>
              <p className="text-center text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPageCard3;
