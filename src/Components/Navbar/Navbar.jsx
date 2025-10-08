import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faCalendarCheck, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from 'react-router-dom';


const MainNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isFixed, setIsFixed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact-topbar');
      if (contactSection) {
        const bottom = contactSection.offsetTop + contactSection.offsetHeight;
        setIsFixed(window.scrollY >= bottom);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      {/* Top Contact Section - lg+ only */}
      <div
        id="contact-topbar"
        className="hidden lg:flex justify-between mt-2 me-40 ms-32"
      >
        <div className="flex">
          <span className="flex text-[#6b6b6b] me-[80px]">
            <FontAwesomeIcon icon={faEnvelope} className="text-amber-700 text-2xl me-3" />
            bilalusman1291@gmail.com
          </span>
          <span className="flex text-[#6b6b6b]">
            <FontAwesomeIcon icon={faLocationDot} className="text-amber-700 text-2xl me-3" />
            Karachi, Pakistan
          </span>
        </div>

        <div className="flex">
          <a className='bg-[#c9c9c9] p-1.5 m-1 rounded-full hover:bg-[#BB4D00] hover:scale-110 transition-transform duration-300' href="https://facebook.com" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className='text-[#FFFFFF]' />
          </a>
          <a className='bg-[#c9c9c9] p-1.5 m-1 rounded-full hover:bg-[#BB4D00] hover:scale-110 transition-transform duration-300' href="https://instagram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className='text-[#FFFFFF]' />
          </a>
          <a className='bg-[#c9c9c9] p-1.5 m-1 rounded-full hover:bg-[#BB4D00] hover:scale-110 transition-transform duration-300' href="https://linkedin.com" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className='text-[#FFFFFF]' />
          </a>
          <a className='bg-[#c9c9c9] p-1.5 m-1 rounded-full hover:bg-[#BB4D00] hover:scale-110 transition-transform duration-300' href="https://twitter.com" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className='text-[#FFFFFF]' />
          </a>
        </div>
      </div>

      <div className="box bg-[#f5f5f5] p-[1px] mt-3 hidden md:block"></div>

      {/* Navbar */}
      <div className="nav-container">
        <header
          className={`${isFixed ? 'ps-4 md:ps-10 pe-4 md:pe-10 fixed top-0 left-0 w-full z-50 shadow-md bg-white' : ''} text-gray-600 body-font transition-all duration-300`}
        >
          <div className="px-4 md:px-10 lg:px-20 container mx-auto flex flex-wrap items-center justify-between">
            {/* Logo */}
            <Link to={"/"}>
              <span className="flex title-font font-medium items-center text-gray-900">
                <span className="ml-2 md:ml-3 leading-[60px] md:leading-[80px] text-xl md:text-2xl lg:text-[28px] uppercase text-[#1e1e1e] font-bold tracking-[1px] md:tracking-[2px]">
                  Villa
                </span>
              </span>
            </Link>

            {/* Desktop Nav (sirf xl pe show) */}
            <nav className="hidden xl:flex xl:ml-auto text-base">
              <Link to="/">
                <span className={`${location.pathname === "/" ? "text-[#BB4D00]" : "text-gray-700"} mr-6 lg:mr-12 font-bold hover:text-[#BB4D00] transition`}>
                  Home
                </span>
              </Link>

              <Link to="/Properties">
                <span className={`${location.pathname === "/Properties" ? "text-[#BB4D00]" : "text-gray-700"} mr-6 lg:mr-12 font-bold hover:text-[#BB4D00] transition`}>
                  Properties
                </span>
              </Link>

              <Link to="/PropertyDetails">
                <span className={`${location.pathname === "/PropertyDetails" ? "text-[#BB4D00]" : "text-gray-700"} mr-6 lg:mr-12 font-bold hover:text-[#BB4D00] transition`}>
                  Property Details
                </span>
              </Link>

              <Link to="/Contact">
                <span className={`${location.pathname === "/Contact" ? "text-[#BB4D00]" : "text-gray-700"} mr-6 lg:mr-12 font-bold hover:text-[#BB4D00] transition`}>
                  Contact Us
                </span>
              </Link>
            </nav>


            {/* Desktop Button (sirf xl pe show) */}
            <button onClick={() => navigate("/schedule")} className="hidden xl:flex items-center bg-black text-white pr-5 rounded-full cursor-pointer">
              <span className="bg-[#BB4D00] text-white p-3 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCalendarCheck} />
              </span>
              <span className="ml-3 hover:text-[#BB4D00] transition">Schedule a Visit</span>
            </button>

            {/* Mobile/Tablet Hamburger Icon (md se xl tak visible) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden text-2xl text-gray-700 transition-all"
            >
              <FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} />
            </button>
          </div>

          {/* Mobile Menu (md aur lg pe bhi chalega) */}
          {mobileOpen && (
            <div className="xl:hidden bg-white shadow-md py-4 px-6 space-y-4 transition">
              <Link to={"/"} className="block font-bold text-[#BB4D00]">Home</Link>
              <Link to={"/Properties"} className="block font-bold">Properties</Link>
              <Link to={"/PropertyDetails"} className="block font-bold">Property Details</Link>
              <Link to={"/Contact"} className="block font-bold">Contact Us</Link>

              <button
                onClick={() => navigate("/schedule")}
                className="flex items-center bg-black text-white pr-5 rounded-full cursor-pointer mt-4"
              >
                <span className="bg-[#BB4D00] text-white p-3 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                </span>
                <span className="ml-3 hover:text-[#BB4D00] transition">Schedule a Visit</span>
              </button>

            </div>
          )}
        </header>

      </div>
    </>
  );
};

export default MainNavbar;
