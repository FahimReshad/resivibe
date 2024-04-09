/* eslint-disable react/prop-types */
import { FaPager } from "react-icons/fa6";

const DescriptionView = ({ propertyData }) => {
  const { description } = propertyData;
  return (
    <div>
      <div className="bg-zinc-600 rounded-lg text-white flex items-center pl-10 gap-4 py-3">
        <FaPager className="text-3xl"></FaPager>
        <h2 className="text-2xl font-poppins font-bold">
          Property Description
        </h2>
      </div>
      <p className="text-xl font-medium text-gray-600 p-4">{description}</p>
    </div>
  );
};

export default DescriptionView;
