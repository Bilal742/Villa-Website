import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import infoIcon1 from "../../assets/Info-icon/info-icon-01.png";
import infoIcon2 from "../../assets/Info-icon/info-icon-02.png";
import infoIcon3 from "../../assets/Info-icon/info-icon-03.png";
import infoIcon4 from "../../assets/Info-icon/info-icon-04.png";
import singleproperty from "../../assets/Img/single-property.jpg";
import featured from "../../assets/featured.jpg"; // <-- apni featured img ka path
import { Link } from "react-router-dom";

const PropertyDetailsCards = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

   const items = [
        {
          id: 1,
          question: "How does it work?",
          answer: (
            <p className="leading-relaxed text-gray-700">
              Get <strong>the best villa</strong> website template in HTML CSS and
             
              Bootstrap for your business. TemplateMo provides you the
              <a
                className="text-blue-600 font-bold underline"
                href="https://www.google.com/search?q=best+free+css+templates"
                target="_blank"
                rel="noopener noreferrer"
              >
                best free CSS templates
              </a>{" "}
              in the world. Please tell your <br /> friends about it.
            </p>
          ),
        },
        
        {
          id: 2,
          question: "How does this work?",
          answer: (
            <p>
              Dolor <strong>almesit amet,</strong> consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <span className="text-fuchsia-500 tracking-widest">adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua.
            </p>
    
          ),
    
        },
        {
          id: 3,
          question: " Why is Villa Agency the best ?",
           answer: (
            <p>
              Dolor <strong>almesit amet,</strong> consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <span className="text-fuchsia-500 tracking-widest">adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua.
            </p>
    
          ),
        },
      ];

  return (
    <>
      {/* Right Info Table */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-16 lg:mt-32 gap-8 px-4">
        <div className="flex justify-center">
          <img
            src={singleproperty}
            alt=""
          />
        </div>
        <div className="p-6 md:p-8 bg-white w-full max-w-md lg:max-w-lg rounded-lg shadow">
          <ul className="space-y-6">
            {[
              { icon: infoIcon1, title: "250 m²", subtitle: "Total Flat Space" },
              { icon: infoIcon2, title: "Contract", subtitle: "Contract Ready" },
              { icon: infoIcon3, title: "Payment", subtitle: "Payment Process" },
              { icon: infoIcon4, title: "Safety", subtitle: "24/7 Under Control" },
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-start space-x-4 p-4 border-b border-gray-200"
              >
                <img
                  src={item.icon}
                  alt=""
                  className="w-12 h-12 flex-shrink-0"
                />
                <h4 className="text-lg md:text-xl font-bold">
                  {item.title} <br />
                  <span className="text-gray-500 text-sm">{item.subtitle}</span>
                </h4>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Featured Section */}
      <div className="featured-section mt-16 lg:mt-24 px-4 md:px-10 lg:px-20">
        <div className=" items-start">
          {/* Middle Accordion */}
          <div className="col-span-1 md:col-span-2">
            <h6 className="text-black text-sm md:text-base uppercase font-bold mb-2">
              Apparment
            </h6>
            <h1 className="text-xl md:text-2xl lg:text-[25px] font-bold capitalize leading-snug mb-8 md:mb-16 lg:mb-32">
              24 New Street Miami, OR 24560
            </h1>

         <p className="mb-2 text-[#4a4a4a]">Get <b>the best villa agency</b> HTML CSS Bootstrap Template for your company website. TemplateMo provides you the <Link to={"https://www.google.com/search?q=best+free+css+templates"} target="blank"><span className="text-blue-600">best</span></Link></p> 
         

         <p className="mb-2 text-[#4a4a4a]"><Link to={"https://www.google.com/search?q=best+free+css+templates"} target="blank">
         
         <span className="text-blue-600">free CSS templates</span></Link> in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch</p> 
         

         <p className="mb-9 text-[#4a4a4a]">tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.</p> 
         
         <p className="mb-2 text-[#4a4a4a]">When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can</p>
         
          <p className="mb-2 text-[#4a4a4a]">type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic,</p> 
         
         <p className="mb-20 text-[#4a4a4a]">slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.</p>

            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl overflow-hidden border border-gray-200"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="cursor-pointer w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-base md:text-lg text-gray-800 hover:text-[#da620d] transition"
                  >
                    {item.question}
                    <span className="text-xl">
                      {openIndex === item.id ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openIndex === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-4 text-gray-700 whitespace-pre-line"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetailsCards;
