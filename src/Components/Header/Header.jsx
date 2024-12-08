import {  NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div >
            <span>TheMealDB</span>
            <nav className="space-x-6">
            <NavLink to={'/'}> Home</NavLink>
            <NavLink to={'/LatestMeals'}>Latest Meals</NavLink>
            <NavLink to={'/PopularIngredients'}> Popular Ingredients</NavLink>
            <NavLink to={'/catagorys'}>Catagory</NavLink>
            </nav>
        </div>
    );
};

export default Header;