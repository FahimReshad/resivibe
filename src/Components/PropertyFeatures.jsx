/* eslint-disable react/prop-types */
import { BiSolidDetail } from "react-icons/bi";

const PropertyFeatures = ({ propertyData }) => {
  const {
    Deposit,
    PoolSize,
    AdditionalRooms,
    LastRemodelYear,
    Amenities,
    Equipment,
  } = propertyData;
  return (
    <div>
      <div className="bg-zinc-600 rounded-lg text-white flex items-center pl-10 gap-4 py-3 mb-4">
        <BiSolidDetail className="text-3xl"></BiSolidDetail>
        <h2 className="text-2xl font-poppins font-bold">Additional Details</h2>
      </div>
      <div className="flex items-center gap-48 ml-6">
        <div className="space-y-4">
          <p className="text-xl font-poppins font-semibold">
            Deposit: <span className="text-gray-500 ml-2">{Deposit}</span>
          </p>
          <p className="text-xl font-poppins font-semibold">
            Pool Size: <span className="text-gray-500 ml-2">{PoolSize}</span>
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-xl font-poppins font-semibold">
            Additional Rooms:{" "}
            <span className="text-gray-500 ml-2">{AdditionalRooms}</span>
          </p>
          <p className="text-xl font-poppins font-semibold">
            Last Remodel Year:{" "}
            <span className="text-gray-500 ml-2">{LastRemodelYear}</span>
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-xl font-poppins font-semibold">
            Amenities: <span className="text-gray-500 ml-2">{Amenities}</span>
          </p>
          <p className="text-xl font-poppins font-semibold">
            Equipment: <span className="text-gray-500 ml-2">{Equipment}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyFeatures;
