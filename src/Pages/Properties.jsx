import React from 'react'
import MainNavbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import pageHeadingbg from "../assets/Img/page-heading-bg.jpg"
import Footer from "../Components/Footer/Footer";
import PropertyTabs from '../Components/PropertyTabs/PropertyTabs';


const Properties = () => {


  return (
    <div>
      <MainNavbar />
      <Hero
        image={pageHeadingbg}
        homeText="Home"
        currentPage="Properties"
        title="Properties"
      />
      <PropertyTabs />
      <Footer />

    </div>
  )
}

export default Properties