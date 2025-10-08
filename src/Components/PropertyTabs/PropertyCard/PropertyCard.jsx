import { useNavigate } from "react-router-dom";


export default function PropertyCard({ property }) {
  const navigate = useNavigate();
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <img
        src={property.image}
        alt={property.type}
        className="w-full h-48 sm:h-56 lg:h-64 object-cover"
      />

      {/* Content */}
      <div className="p-4 sm:p-5 space-y-2">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <h1 className="text-lg sm:text-xl font-bold text-gray-800">
            {property.type}
          </h1>
          <p className="text-base sm:text-lg text-[#F35525] font-bold">
            {property.price}
          </p>
        </div>

        <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700">
          {property.address}
        </h2>

        <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700 mt-3">
          <p>
            <span className="font-semibold">Bedrooms:</span> {property.bedrooms}
          </p>
          <p>
            <span className="font-semibold">Bathrooms:</span> {property.bathrooms}
          </p>
          <p>
            <span className="font-semibold">Area:</span> {property.area}
          </p>
          <p>
            <span className="font-semibold">Floor:</span> {property.floor}
          </p>
          <p>
            <span className="font-semibold">Parking:</span> {property.parking}
          </p>
          {/* Button */}
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate("/schedule")}
            className="cursor-pointer w-52 mt-6 bg-black text-white py-3 rounded-3xl font-semibold hover:bg-orange-600 transition"
          >
            Schedule a visit
          </button>

        </div>
      </div>
    </div>
  );
}
