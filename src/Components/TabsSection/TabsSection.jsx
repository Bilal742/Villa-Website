import React, { useState } from "react";
import deal1 from "../../assets/Img/deal-01.jpg";
import deal2 from "../../assets/Img/deal-02.jpg";
import deal3 from "../../assets/Img/deal-03.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabData = {
    1: [
      {
        desc: (
          <div className="px-6">
            <ul className="rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {[
                { title: "Total Flat Space", subtitle: "185 m²" },
                { title: "Floor Number", subtitle: "26th" },
                { title: "Number of Rooms", subtitle: "4" },
                { title: "Parking Available", subtitle: "Yes" },
                { title: "Payment Process", subtitle: "Bank" },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center px-5 py-4 border-b border-gray-200 last:border-none hover:bg-gray-50 transition"
                >
                  <h4 className="text-gray-500 font-semibold">{item.title}</h4>
                  <span className="text-black text-lg font-bold">{item.subtitle}</span>
                </li>
              ))}
            </ul>
          </div>
        ),
      },
      {
        desc: (
          <img
            src={deal1}
            alt="Appartment"
            className="w-full max-w-[700px] mx-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          />
        ),
      },
      {
        desc: (
          <div className="px-6">
            <h1 className="font-bold text-xl">Extra Info About Property</h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Do eiusmod tempor
              incididunt ut labore et dolore magna aliqua suspendisse.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              When you need free CSS templates, you can simply type TemplateMo in any search
              engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page
              Layouts, etc.
            </p>

            <button className="hidden lg:flex items-center bg-black text-white pr-6 rounded-full cursor-pointer mt-6 shadow-md hover:bg-[#BB4D00] transition">
              <span className="bg-[#BB4D00] text-white p-4 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCalendarCheck} />
              </span>
              <span className="ml-3">Schedule a Visit</span>
            </button>
          </div>
        ),
      },
    ],
    2: [
      {
        desc: (
          <div className="px-6">
            <ul className="rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {[
                { title: "Total Flat Space", subtitle: "250 m²" },
                { title: "Floor Number", subtitle: "26th" },
                { title: "Number of Rooms", subtitle: "5" },
                { title: "Parking Available", subtitle: "Yes" },
                { title: "Payment Process", subtitle: "Bank" },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center px-5 py-4 border-b border-gray-200 last:border-none hover:bg-gray-50 transition"
                >
                  <h4 className="text-gray-500 font-semibold">{item.title}</h4>
                  <span className="text-black text-lg font-bold">{item.subtitle}</span>
                </li>
              ))}
            </ul>
          </div>
        ),
      },
      {
        desc: (
          <img
            src={deal2}
            alt="Villa House"
            className="w-full max-w-[700px] mx-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          />
        ),
      },
      {
        desc: (
          <div className="px-6">
            <h1 className="font-bold text-xl">Detail Info About Villa</h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Suspendisse ipsum dolor sit amet, consectetur adipiscing elit. Eiusmod tempor pack
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman
              DIY kitsch twee taiyaki fixie hella venmo after messenger.
            </p>

            <button className="hidden lg:flex items-center bg-black text-white pr-6 rounded-full cursor-pointer mt-6 shadow-md hover:bg-[#BB4D00] transition">
              <span className="bg-[#BB4D00] text-white p-4 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCalendarCheck} />
              </span>
              <span className="ml-3">Schedule a Visit</span>
            </button>
          </div>
        ),
      },
    ],
    3: [
      {
        desc: (
          <div className="px-6">
            <ul className="rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {[
                { title: "Total Flat Space", subtitle: "320 m²" },
                { title: "Floor Number", subtitle: "34th" },
                { title: "Number of Rooms", subtitle: "6" },
                { title: "Parking Available", subtitle: "Yes" },
                { title: "Payment Process", subtitle: "Bank" },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center px-5 py-4 border-b border-gray-200 last:border-none hover:bg-gray-50 transition"
                >
                  <h4 className="text-gray-500 font-semibold">{item.title}</h4>
                  <span className="text-black text-lg font-bold">{item.subtitle}</span>
                </li>
              ))}
            </ul>
          </div>
        ),
      },
      {
        desc: (
          <img
            src={deal3}
            alt="Penthouse"
            className="w-full max-w-[700px] mx-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          />
        ),
      },
      {
        desc: (
          <div className="px-6">
            <h1 className="font-bold text-xl">Extra Info About Penthouse</h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Pack lyft blog twee. JOMO ethical swag fanny copper mug, succulents typewriter shaman
              DIY kitsch twee taiyaki fixie hella venmo messenger.
            </p>

            <button className="hidden lg:flex items-center bg-black text-white pr-6 rounded-full cursor-pointer mt-6 shadow-md hover:bg-[#BB4D00] transition">
              <span className="bg-[#BB4D00] text-white p-4 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faCalendarCheck} />
              </span>
              <span className="ml-3">Schedule a Visit</span>
            </button>
          </div>
        ),
      },
    ],
  };

  return (
    <div className="w-full px-6 mt-40">
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row justify-between md:items-center px-4 sm:px-10 md:px-20">
        <div className="mb-6 md:mb-0">
          <h6 className="text-[#F54A00] font-semibold mb-3 text-sm sm:text-base">
            | Best Deal
          </h6>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
            Find Your Best Deal
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mt-2">
            Right Now!
          </h2>
        </div>

        {/* Tabs Buttons */}
        <div className="flex flex-wrap gap-3">
          {["Appartment", "Villa House", "Penthouse"].map((label, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx + 1)}
              className={`cursor-pointer px-6 py-3 rounded-full font-semibold shadow-md transition ${
                activeTab === idx + 1
                  ? "bg-[#BB4D00] text-white"
                  : "bg-black text-white hover:bg-[#333]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {tabData[activeTab].map((col, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition"
          >
            {col.desc}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsSection;
