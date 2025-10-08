import React from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full mt-10">
      {/* Top Orange Strip */}
      <div className="bg-[#F54A00] text-white text-center py-3 sm:py-4 px-2 text-base sm:text-lg font-semibold tracking-wide">
        Villa Agency – Your Trusted Real Estate Partner
      </div>

      {/* Main Black Footer */}
      <div className="bg-black text-gray-300 py-8 sm:py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Left Section - Logo / Name */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
              Villa
            </h1>
            <p className="text-xs sm:text-sm mt-2 text-gray-400">
              Find your dream property with us.
            </p>
          </div>

          {/* Center Section - Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm font-medium">
            <Link to={"/"}>
              <span className="hover:text-[#F54A00] transition duration-300 hover:underline underline-offset-4">
                Home
              </span>
            </Link>
            <Link to={"/Properties"}>
              <span className="hover:text-[#F54A00] transition duration-300 hover:underline underline-offset-4">
                Properties
              </span>
            </Link>
            <Link to={"/PropertyDetails"}>
              <span className="hover:text-[#F54A00] transition duration-300 hover:underline underline-offset-4">
                Property Details
              </span>
            </Link>
            <Link to={"/Contact"}>
              <span className="hover:text-[#F54A00] transition duration-300 hover:underline underline-offset-4">
                Contact Us
              </span>
            </Link>
          </div>

          {/* Right Section - Social Icons */}
          <div className="flex justify-center md:justify-end gap-3 sm:gap-4 text-lg sm:text-xl">
            <a
              className="bg-[#F54A00] p-2 sm:p-3 rounded-full hover:scale-110 transition-transform duration-300"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-white" />
            </a>
            <a
              className="bg-[#F54A00] p-2 sm:p-3 rounded-full hover:scale-110 transition-transform duration-300"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-white" />
            </a>
            <a
              className="bg-[#F54A00] p-2 sm:p-3 rounded-full hover:scale-110 transition-transform duration-300"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-white" />
            </a>
            <a
              className="bg-[#F54A00] p-2 sm:p-3 rounded-full hover:scale-110 transition-transform duration-300"
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-white" />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-8 sm:mt-10 pt-3 sm:pt-4 text-center text-xs sm:text-sm text-gray-400">
          © {new Date().getFullYear()} Villa Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
