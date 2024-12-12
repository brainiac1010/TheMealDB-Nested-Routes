
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const recipes = useLoaderData();

    console.log(recipes);
    const {
       
        strArea,
        strCategory,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strInstructions,
        strMeal,
        strMealThumb,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
        strMeasure7,
        strMeasure8,
        strMeasure9,
        strYoutube,
    } = recipes;
    
    return (
        <div className="container mx-auto p-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={strMealThumb} alt={strMeal} className="w-full h-64 object-cover" />
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{strMeal}</h2>
                    <p className="text-gray-600 mb-4"><span className="font-semibold">Category:</span> {strCategory}</p>
                    <p className="text-gray-600 mb-4"><span className="font-semibold">Cuisine:</span> {strArea}</p>
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Ingredients:</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            {[strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9]
                                .filter(ingredient => ingredient)
                                .map((ingredient, index) => (
                                    <li key={index}>
                                        {ingredient} {eval(`strMeasure${index + 1}`)}
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Instructions:</h3>
                        <p className="text-gray-600">{strInstructions}</p>
                    </div>
                    {strYoutube && (
                        <div className="mt-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Watch Video:</h3>
                            <a
                                href={strYoutube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                {strYoutube}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Recipe;

export const recipeRoute = {
    path: '/categories/:strId',
    loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.strId}`),
    element: <Recipe />,
};
