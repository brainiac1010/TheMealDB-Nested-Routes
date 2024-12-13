import { useLoaderData, Link, useNavigate } from "react-router-dom";

const CategoryDetails = () => {
  const data = useLoaderData();
  const meals = data?.meals || [];
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <button 
        onClick={() => navigate(-1)} 
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md mb-4">
        Back
      </button>

      <h1 className="text-2xl font-bold mb-6">Category Details</h1>

      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.map((meal) => (
          <div 
            key={meal.idMeal} 
            className="border bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
            <img 
              src={meal.strMealThumb} 
              alt={meal.strMeal} 
              className="w-full h-48 object-cover rounded-md mb-4" 
            />
            <h2 className="text-xl font-semibold mb-2 text-gray-800 ">{meal.strMeal}</h2>
            <p className="text-gray-600">Meal ID: {meal.idMeal}</p>
            <Link to={`/categories/${meal.strMeal}/${meal.idMeal}`} className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                Meal Recipe
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;