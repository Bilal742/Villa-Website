import React from "react";
import properties from "./data/properties";

const PropertyCards = () => {
  return (
    <>
      <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
        {/* Image */}
        <img
          src={properties.image}
          alt={properties.type}
          className="w-full h-48 sm:h-56 lg:h-64 object-cover"
        />

        {/* Content */}
        <div className="p-4 sm:p-5 space-y-2">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <h1 className="text-lg sm:text-xl font-bold text-gray-800">
              {properties.type}
            </h1>
            <p className="text-base sm:text-lg text-[#F35525] font-bold">
              {properties.price}
            </p>
          </div>

          <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700">
            {properties.address}
          </h2>

          <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700 mt-3">
            <p>
              <span className="font-semibold">Bedrooms:</span> {properties.bedrooms}
            </p>
            <p>
              <span className="font-semibold">Bathrooms:</span> {properties.bathrooms}
            </p>
            <p>
              <span className="font-semibold">Area:</span> {properties.area}
            </p>
            <p>
              <span className="font-semibold">Floor:</span> {properties.floor}
            </p>
            <p>
              <span className="font-semibold">Parking:</span> {properties.parking}
            </p>
            {/* Button */}
          </div>
          <div className="text-center">
            <button
              onClick={() => alert("Thank you! Our agent will contact you soon.")}
              className="cursor-pointer w-52 mt-6 bg-black text-white py-3 rounded-3xl font-semibold hover:bg-orange-600 transition"
            >
              Schedule a visit
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyCards;
