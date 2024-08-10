import React from "react";

import { heroPageCardData2 } from "../../data/heroPageCard2";

const Card = ({ title, svgImage }) => (
  <div className="bg-white p-2  flex flex-col items-center justify-center">
    <div
      className="w-16 h-16 flex justify-center items-center"
      dangerouslySetInnerHTML={{ __html: svgImage }}
    />

    <p className="text-center text-black">{title}</p>
  </div>
);

const HeroPageCard2 = () => (
  <div className="border-t-2 border-b-2 border-gray-200 p-4 mb-4 ">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4">
      {heroPageCardData2?.map((item, index) => (
        <Card key={index} title={item.title} svgImage={item.svg_image} />
      ))}
    </div>
  </div>
);

export default HeroPageCard2;
