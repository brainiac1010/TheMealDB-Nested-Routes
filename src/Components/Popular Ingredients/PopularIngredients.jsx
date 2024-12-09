import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const PopularIngredients = () => {
    const allIngredients = useLoaderData();
    const Ingredients = allIngredients.meals;

   
    const filteredIngredients = Ingredients.filter(
        (ingredient) => ingredient.strDescription && ingredient.strDescription.trim() !== ""
    );

    
    const [visibleCards, setVisibleCards] = useState(9);
    const [expandedDescriptions, setExpandedDescriptions] = useState({});

    
    const toggleDescription = (idIngredient) => {
        setExpandedDescriptions((prevState) => ({
            ...prevState,
            [idIngredient]: !prevState[idIngredient],
        }));
    };

    return (
        <div className="">
            <h2 className="p-4 font-semibold text-4xl">Popular Ingredients</h2>
            <p className="mb-5">All popular ingredients will show here:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                {filteredIngredients.slice(0, visibleCards).map((ingredient) => {
                    const { idIngredient, strIngredient, strDescription } = ingredient;
                    const isExpanded = expandedDescriptions[idIngredient];

                    return (
                        <div key={idIngredient} className="p-4 border rounded shadow bg-white">
                            <h3 className="text-xl font-semibold text-gray-700">{strIngredient}</h3>
                            <p className="text-gray-700 mt-2">
                                {isExpanded
                                    ? strDescription
                                    : `${strDescription.slice(0, 100)}...`}
                            </p>
                            <button
                                onClick={() => toggleDescription(idIngredient)}
                                className="text-whait hover:underline bg-blue-500 mt-5 "
                            >
                                {isExpanded ? "Read Less" : "Read More"}
                            </button>
                        </div>
                    );
                })}
            </div>

            {visibleCards < filteredIngredients.length && (
                <div className="text-center mt-4">
                    <button
                        onClick={() => setVisibleCards(filteredIngredients.length)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        See All
                    </button>
                </div>
            )}
        </div>
    );
};

export default PopularIngredients;
