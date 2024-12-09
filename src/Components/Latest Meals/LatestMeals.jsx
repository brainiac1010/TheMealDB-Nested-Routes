import { useLoaderData,Link } from "react-router-dom";

const LatestMeals = () => {
    const latestMeal = useLoaderData();
    const allmeal = latestMeal.meals;

    return (
        <div>
            <h2>Latest Meals</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {allmeal.map(meal => {
                    const { idMeal, strMeal, strMealThumb } = meal;
                    return (
                        <div key={idMeal} className="p-4 border rounded shadow bg-white">
                            <img
                                src={strMealThumb}
                                alt={strMeal}
                                className="w-full h-48 object-cover"
                            />
                            <h2 className="text-2xl font-bold text-gray-700">{strMeal}</h2>
                            <p className="text-black mt-2 ">ID: {idMeal}</p>
                            <Link>
                            <button className="bg-blue-700 text-white">Show details</button>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LatestMeals;
