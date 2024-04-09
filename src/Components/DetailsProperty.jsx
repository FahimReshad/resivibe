/* eslint-disable react/prop-types */
import { BiSolidDetail } from "react-icons/bi";

const DetailsProperty = ({ propertyData }) => {
  const { id, price, area, Beds, Baths, Garages, segment_name, status} = propertyData;
  return (
    <div>
      <div className="bg-zinc-600 rounded-lg text-white flex items-center pl-10 gap-4 py-3 mb-4">
        <BiSolidDetail className="text-3xl"></BiSolidDetail>
        <h2 className="text-2xl font-poppins font-bold">Property Details</h2>
      </div>
      <div className="flex items-center gap-48 ml-6">
        <div className="space-y-4">
            <p className="text-xl font-poppins font-semibold">Property ID: <span className="text-gray-500 ml-2">{id}</span></p>
            <p className="text-xl font-poppins font-semibold">Price: <span className="text-gray-500 ml-2">{price}</span></p>
            <p className="text-xl font-poppins font-semibold">Property Size: <span className="text-gray-500 ml-2">{area}</span></p>
            <p className="text-xl font-poppins font-semibold">Bedrooms: <span className="text-gray-500 ml-2">{Beds}</span></p>
        </div>
        <div className="space-y-4">
            <p className="text-xl font-poppins font-semibold">Bathrooms: <span className="text-gray-500 ml-2">{Baths}</span></p>
            <p className="text-xl font-poppins font-semibold">Garages: <span className="text-gray-500 ml-2">{Garages}</span></p>
            <p className="text-xl font-poppins font-semibold">Property Type: <span className="text-gray-500 ml-2">{segment_name}</span></p>
            <p className="text-xl font-poppins font-semibold">Property Status: <span className="text-gray-500 ml-2">{status}</span></p>
        </div>
      </div>
    </div>
  );
};

export default DetailsProperty;
