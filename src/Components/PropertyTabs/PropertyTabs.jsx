import { useState } from "react";
import properties from "./propertiesData/propertiesData";
import PropertyCard from "./PropertyCard/PropertyCard";

export default function PropertyTabs() {
  const [activeTab, setActiveTab] = useState("Show All");

  // Filter
  const filtered =
    activeTab === "Show All"
      ? properties
      : properties.filter((item) => item.type.includes(activeTab));

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto mt-12 sm:mt-24">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
        {["Show All", "Apartment", "VillaHouse", "Penthouse"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 sm:px-6 lg:px-7 py-2 sm:py-3 rounded font-semibold text-sm sm:text-base transition cursor-pointer ${
              activeTab === tab
                ? "bg-[#F35525] text-white"
                : "bg-black text-white hover:text-[#F35525]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mt-28">
        {filtered.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
