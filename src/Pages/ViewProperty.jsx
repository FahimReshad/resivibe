import DescriptionView from "../Components/DescriptionView";
import DetailsProperty from "../Components/DetailsProperty";
import ViewCardProperty from "../Components/ViewCardProperty";
import ViewPropertyBanner from "../Components/ViewPropertyBanner";
import { useLoaderData, useParams } from "react-router-dom";
const ViewProperty = () => {
    const viewProperty = useLoaderData();
    const { id } = useParams();
    const propertyData = viewProperty.find(property => property.id == id)
    return (
        <div className="container mx-auto my-10 space-y-10">
            <ViewPropertyBanner propertyData={propertyData}></ViewPropertyBanner>
            <ViewCardProperty  propertyData={propertyData}></ViewCardProperty>
            <DescriptionView propertyData={propertyData}></DescriptionView>
            <DetailsProperty propertyData={propertyData}></DetailsProperty>
        </div>
    );
};

export default ViewProperty;