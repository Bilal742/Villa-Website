import React, { useState } from "react";
import MainNavbar from "../Components/Navbar/Navbar";
import Slider from "../Components/Slider/Slider";
import MainCard from "../Components/MainCard/MainCard";
import HeroSection from "../Components/HeroSection/HeroSection";
import TabsSection from "../Components/TabsSection/TabsSection";
import PropertyCards from "../Components/PropertyCards/PropertyCards";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

const Home = () => {

  return (
    <>

      {/* Navbar */}
      <MainNavbar />

      {/* Slider */}
      <Slider />

      {/* MainCard */}
      <MainCard />

      {/* HeroSection */}
      <HeroSection />

      {/* TabsSection */}
      <TabsSection />

      {/* PropertyCards */}
      {/* <PropertyCards /> */}

      {/* Contact */}
      <Contact/>
      {/* Footer */}
      <Footer/>
    </>
  );
};

export default Home;
