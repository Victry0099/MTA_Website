import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import AboutPageCard from "../../components/AboutPageCard/AboutPageCard";
import WhyJoin from "../../shared/WhyJoin/WhyJoin";
import AboutPageCard2 from "../../components/AboutPageCard2/AboutPageCard2";
import AboutPageCard3 from "../../components/AboutPageCard3/AboutPageCard3";
import ClientCarousel from "../../shared/ClientCarousel/ClientCarousel";
import AboutPageCard4 from "../../components/AboutPageCard4/AboutPageCard4";
import NewCarousel from "../../shared/newCarousel/newCarousel";
const About = () => {
  return (
    <>
      <Breadcrumb text={"About Us"} />

      <AboutPageCard />
      <WhyJoin />
      <AboutPageCard2 />
      <AboutPageCard3 />
      {/* <ClientCarousel bgColor={"bg-orange-100"} /> */}
      <NewCarousel bgColor={"bg-white"} />
      <AboutPageCard4 />
    </>
  );
};

export default About;
