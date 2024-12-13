import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-blue-800 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                <span className="text-2xl font-bold tracking-wide">
                    TheMealDB
                </span>

                <nav className="pl-4 space-x-6 text-lg">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-400 font-semibold"
                                : "text-white hover:text-yellow-300 transition-colors"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/LatestMeals"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-400 font-semibold"
                                : "text-white hover:text-yellow-300 transition-colors"
                        }
                    >
                        Latest Meals
                    </NavLink>
                    <NavLink
                        to="/PopularIngredients"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-400 font-semibold"
                                : "text-white hover:text-yellow-300 transition-colors"
                        }
                    >
                       Ingredients
                    </NavLink>
                    <NavLink
                        to="/categories"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-400 font-semibold"
                                : "text-white hover:text-yellow-300 transition-colors"
                        }
                    >
                        Categories
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
