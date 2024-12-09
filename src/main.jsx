import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import LatestMeals from './Components/Latest Meals/LatestMeals.jsx';
import PopularIngredients from './Components/Popular Ingredients/PopularIngredients.jsx';
import MealCatagory from './Components/MealCatagory/MealCatagory.jsx';
import CategoryDetails from './Components/CategoryDetails/CategoryDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/LatestMeals',
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'),
        element: <LatestMeals></LatestMeals>,
      },
      {
        path: '/PopularIngredients',
        loader:  ()=> fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list'),
        element: <PopularIngredients></PopularIngredients>,
      },
      {
        path: '/categories',
        loader: () => fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element: <MealCatagory></MealCatagory>,
      },
      {
        path: '/categories/:idCategory',
        loader: ({params}) =>
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idCategory}`),
        element: <CategoryDetails></CategoryDetails>, 
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
