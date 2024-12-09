import { Link } from "react-router-dom";

const Category = ({ categorie }) => {

    const { idCategory, strCategory,  strCategoryThumb } = categorie;

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
       
            <img
                src={strCategoryThumb}
                alt={strCategory}
                className="w-full h-48 object-cover"
            />

           
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{strCategory}</h2>
              
                
            </div>

       
            <div className="p-4 bg-gray-100 text-center">
              
               <Link to={`/categories/${idCategory}`}><button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    Learn More
                </button> </Link>
                
            </div>
        </div>
    );
};

export default Category;
