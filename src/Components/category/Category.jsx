import { Link } from "react-router-dom";

const Category = ({ categorie }) => {
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = categorie;

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img
                src={strCategoryThumb}
                alt={strCategory}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-blue-500 mb-2">{strCategory}</h2>
            </div>
            <p className="text-base font-semibold line-clamp-2 text-gray-800 mb-2">
                {strCategoryDescription}
            </p>
            <div className="p-4 bg-gray-100 text-center">
                <Link to={`/categories/${strCategory}`}>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        <span className="lowercase">{strCategory}</span> dishes
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Category;
