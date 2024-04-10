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
      <div className="p-2 lg:p-0 grid lg:grid-cols-3 gap-6 rounded-lg mt-10 container mx-auto">
      {
        estateCategories.map(estateCategory => <EstateSection key={estateCategory.id} estateCategory={estateCategory}></EstateSection>)
      }
      </div>
    </div>
  );
};

export default Home;
