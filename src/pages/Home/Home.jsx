import React from "react";
import HeroPageCard from "../../components/HeroPageCard/HeroPageCard";
import HeroPageCard2 from "../../components/HeroPageCard2/HeroPageCard2";
import HeroPageCourseCarousel from "../../components/HeroPageCourseCarousel/HeroPageCourseCarousel";
import WhyJoin from "../../shared/WhyJoin/WhyJoin";
import MtaInfo from "../../shared/MtaInfo/MtaInfo";
import HeroPageCard3 from "../../components/HeroPageCard3/HeroPageCard3";
import MtaTrainer from "../../components/MtaTrainer/MtaTrainer";
import ClientCarousel from "../../shared/ClientCarousel/ClientCarousel";
import Blog from "../../components/Blog/Blog";
import InstructorCard from "../../components/InstructorCard/InstructorCard";
import OurAlumniWork from "../../components/ourAlumniWork/OurAlumniWork";
import NewCarousel from "../../shared/newCarousel/newCarousel";

const Home = () => {
  return (
    <>
      <HeroPageCard />
      <HeroPageCard2 />
      <HeroPageCourseCarousel />
      <WhyJoin />
      <MtaInfo />
      {/* <ClientCarousel bgColor={"bg-white"} /> */}
      <NewCarousel bgColor={"bg-white"} />
      <HeroPageCard3 />
      {/* <MtaTrainer /> */}
      <OurAlumniWork />
      <InstructorCard />
      {/* <Blog /> */}
    </>
  );
};

export default Home;
