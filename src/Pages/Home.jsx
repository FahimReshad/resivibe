import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import EstateSection from "../Components/EstateSection";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const estateCategories = useLoaderData();
    return (
    <div className="">






      <Helmet>
        <title>ResiVibe || Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="mt-6 lg:mt-16">
      <div className='text-center'>
        <h2 className='text-3xl font-poppins font-semibold'>Estate Properties</h2>
        <p className='text-xl text-gray-600 font-poppins w-[85%] lg:w-1/2 mx-auto my-4 lg:my-8'>A piece of landed property, especially one of large extent with an elaborate house on it: to have an estate in the country. Law. property or possessions. the legal position or status of an owner, considered with respect to property owned in land or other things.</p>
      </div>
      <div className=" lg:p-0 grid lg:grid-cols-3 gap-6 rounded-lg mt-10 container mx-auto">
      {
        estateCategories.map(estateCategory => <EstateSection key={estateCategory.id} estateCategory={estateCategory}></EstateSection>)
      }
      </div>
      </div>
    </div>
  );
};

export default Home;
