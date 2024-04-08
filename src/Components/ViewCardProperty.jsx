import { FaLocationDot } from "react-icons/fa6";


const ViewCardProperty = ({propertyData}) => {
     const {price, estate_title, status, location, Beds, Baths, Garages, area} = propertyData;
    return (
        <div className="bg-base-200 p-8 rounded-md">
        <h2 className="w-40 text-center bg-green-600 px-2 py-1 rounded-lg text-white font-poppins">
       {price}
        </h2>
        <div className="flex items-center gap-4">
        <p className="text-xl md:text-2xl font-poppins font-semibold my-2 lg:my-4">
       {estate_title}
        </p>
        <p
        className={
          status === "For Sale"
            ? " rounded-md px-1 md:px-3 py-1 font-medium text-white bg-green-700"
            : " text-white bg-red-600 rounded-md px-3 font-medium"
        }
      >
        {status}
      </p>
        </div>
        <p className=" font-poppins font-medium opacity-90 flex items-center gap-3 text-lg">
          <FaLocationDot className="text-red-500 text-xl"></FaLocationDot>
          {location}
        </p>
        <div className="md:text-xl flex gap-2 text-center md:gap-5 items-center my-4">
            <p className="border px-2 py-1 rounded-md shadow-md">Beds <span className="font-semibold">{Beds}</span></p>
            <p className="border px-2 py-1 rounded-md shadow-md">Baths <span className="font-semibold">{Baths}</span></p>
            <p className="border px-2 py-1 rounded-md shadow-md">Garages <span className="font-semibold">{Garages}</span></p>
            <p className="border px-2 py-1 rounded-md shadow-md">Garages <span className="font-semibold">{area}</span></p>
        </div>
        
      </div>
    );
};

export default ViewCardProperty;