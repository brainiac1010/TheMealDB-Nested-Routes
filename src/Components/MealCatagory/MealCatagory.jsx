import { useLoaderData } from "react-router-dom";
import Category from "../category/Category";

const MealCatagory = () => {
    const categoriesData = useLoaderData();
 
    
    const categories = categoriesData?.categories || [];

    

    return (
        <div>
            <h2>Our Categories: {categories.length}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {
                    categories.map(categorie => (
                        <Category key={categorie.idCategory} categorie={categorie} />
                    ))
                }
            </div>
        </div>
    );
};

export default MealCatagory;
