import React from 'react'
import MainNavbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import pageHeadingbg from "../assets/Img/page-heading-bg.jpg"
import TabsSection from '../Components/TabsSection/TabsSection'
import Footer from '../Components/Footer/Footer'
import PropertyDetailsCards from '../Components/PropertyDetailsCards/PropertyDetailsCards'


const PropertyDetails = () => {
  return (
    <div>
      <MainNavbar />
      <Hero
        image={pageHeadingbg}
        homeText="Home"
        currentPage="Single Property"
        title="Single Property"
      />

      <PropertyDetailsCards/>
      <TabsSection />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer/>
    </div>

  )
}

export default PropertyDetails