import Banner from "../Components/Banner";
import EstateSection from "../Components/EstateSection";
import { useLoaderData } from 'react-router-dom'

const Home = () => {
    const estateData = useLoaderData();
    console.log(estateData)
  return (
    <div>
      <h2>this is home</h2>
      <Banner></Banner>
     <EstateSection></EstateSection>
    </div>
  );
};

export default Home;
