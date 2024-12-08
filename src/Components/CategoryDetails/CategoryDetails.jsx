import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
  const  meals  = useLoaderData(); 
 

  const { idCategory, strCategory, strCategoryDescription } = meals || {};

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Details about Category: {strCategory}</h2>
      <p className="text-gray-700 mt-2">Category ID: {idCategory}</p>
      <p className="mt-4">{strCategoryDescription}</p>
    </div>
  );
};

export default CategoryDetails;
