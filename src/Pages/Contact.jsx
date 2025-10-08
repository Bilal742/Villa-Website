import React from 'react'
import MainNavbar from '../Components/Navbar/Navbar'
import pageHeadingbg from "../assets/Img/page-heading-bg.jpg"
import Hero from '../Components/Hero/Hero'
import Maincontact from "../Components/Contact/Contact"
import Footer from '../Components/Footer/Footer'


const Contact = () => {
  return (
    <div>
      <MainNavbar />
      <Hero
        image={pageHeadingbg}
        homeText="Home"
        currentPage="Contact Us"
        title="Contact Us"
      />
      <Maincontact />
      <Footer/>
    </div>
  )
}

export default Contact