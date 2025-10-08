import React, { useState } from 'react'
import featured from "../../assets/featured.jpg";
import { motion, AnimatePresence } from "framer-motion";
import infoIcon1 from "../../assets/Info-icon/info-icon-01.png";
import infoIcon2 from "../../assets/Info-icon/info-icon-02.png";
import infoIcon3 from "../../assets/Info-icon/info-icon-03.png";
import infoIcon4 from "../../assets/Info-icon/info-icon-04.png";

const MainCard = () => {
      const [openIndex, setOpenIndex] = useState(null);
    
      const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
      const items = [
        {
          id: 1,
          question: "How does it work?",
          answer: (
            <p className="leading-relaxed text-gray-700">
              Get <strong>the best villa</strong> website template in HTML CSS and{" "}
              <br />
              Bootstrap for your business. TemplateMo provides you the <br />
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
              Dolor <strong>almesit amet,</strong> consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <span className="text-fuchsia-500 tracking-widest">adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
    
          ),
    
        },
        {
          id: 3,
          question: " Why is Villa Agency the best ?",
           answer: (
            <p>
              Dolor <strong>almesit amet,</strong> consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <span className="text-fuchsia-500 tracking-widest">adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
    
          ),
        },
      ];

  return (
      <>
          {/* Featured Section */}
          <div className="featured-section mt-16 px-4 md:px-10 lg:px-20">
            {/* Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
    
              {/* Left Image */}
              <div className="image flex justify-center">
                <img
                  src={featured}
                  alt="featured"
                  className="rounded-xl w-full max-w-sm md:max-w-md object-cover shadow-md"
                />
              </div>
    
              {/* Middle Accordion */}
              <div>
                <h6 className="text-[#ec4d57] text-sm md:text-base uppercase font-bold mb-2">
                  | Featured
                </h6>
                <h1 className="text-2xl md:text-4xl font-bold capitalize leading-snug mb-15">
                  Best Appartment <br /> & Sea view
                </h1>
    
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="rounded-xl overflow-hidden ">
                      <button
                        onClick={() => toggleAccordion(item.id)}
                        className="cursor-pointer w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-base md:text-lg text-gray-800 hover:text-[#da620d] transition"
                      >
                        {item.question}
                        <span className="text-sm">{openIndex === item.id ? "-" : "+"}</span>
                      </button>
    
                      {openIndex !== item.id && (
                        <div className="border-t border-gray-200"></div>
                      )}
    
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
    
              {/* Right Info Table */}
              <div>
                <div className="p-6 md:p-8 bg-white">
                  <ul className="space-y-6">
                    {[
                      { icon: infoIcon1, title: "250 m²", subtitle: "Total Flat Space" },
                      { icon: infoIcon2, title: "Contract", subtitle: "Contract Ready" },
                      { icon: infoIcon3, title: "Payment", subtitle: "Payment Process" },
                      { icon: infoIcon4, title: "Safety", subtitle: "24/7 Under Control" },
    
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-4 p-4 pb-7 pt-7 border-b-gray-300 border-b-1">
                        <img src={item.icon} alt="" className="w-12 h-12 flex-shrink-0" />
                        <h4 className="text-lg md:text-xl font-bold">
                          {item.title} <br />
                          <span className="text-gray-500 text-sm">{item.subtitle}</span>
                        </h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default MainCard