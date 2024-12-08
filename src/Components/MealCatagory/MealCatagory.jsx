import { useLoaderData } from "react-router-dom";

const MealCatagory = () => {

    const catagories = useLoaderData()
    return (
        <div>
            <h2> Our catagories :{catagories.length}</h2>
            <div>
                {
                    catagories.map(catagorie=>)
                }
            </div>
        </div>
    );
};

export default MealCatagory;