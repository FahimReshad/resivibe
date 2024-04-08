/* eslint-disable react/jsx-key */
import { FaLocationDot } from "react-icons/fa6";
const EstateSection = ({ estateCategory }) => {
  const { id, image, price, estate_title, location, status, facilities } =
    estateCategory;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="relative">
        <img
          className="lg:h-[350px] w-full object-cover rounded-md"
          src={image}
          alt="Shoes"
        />
      </figure>
      <p
        className={
          status === "For Sale"
            ? "absolute right-4 top-3 rounded-md px-3 py-1 font-medium text-white bg-green-700"
            : "absolute right-4 top-3 text-white bg-red-600 rounded-md px-3 py-1 font-medium"
        }
      >
        {status}
      </p>
      <div className="card-body">
        <h2 className="card-title bg-green-600 w-[42%] md:w-[22%] lg:w-[27%] px-2 py-1 rounded-lg text-white">
          {price}
        </h2>
        <p className="text-xl font-poppins font-medium lg:my-4">
          {estate_title}
        </p>
        <p className=" font-poppins font-medium opacity-90 flex items-center gap-3 text-lg">
          <FaLocationDot className="text-red-500 text-xl"></FaLocationDot>{" "}
          {location}
        </p>
        <ul className="flex gap-2 justify-center items-start font-medium md:font-semibold bg-base-200 border py-4 px-1 border-t-2 border-b-2 border-l-0 border-r-0 lg:my-4">
          <p className="font-poppins">Facilies:</p>
          {facilities.map((facility) => {
            return (
              <li className="border border-green-600 rounded-2xl w-full text-center">
                {" "}
                {facility}
              </li>
            );
          })}
        </ul>
        <div className="w-full">
          <button className="btn w-full bg-red-400 text-white font-poppins">
            View Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstateSection;
