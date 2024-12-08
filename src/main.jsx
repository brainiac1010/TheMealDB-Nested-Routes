import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import LatestMeals from './Components/Latest Meals/LatestMeals.jsx';
import PopularIngredients from './Components/Popular Ingredients/PopularIngredients.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[

      {
        path:'/LatestMeals',
        element:<LatestMeals></LatestMeals>
      },
      {
        path:'/PopularIngredients',
        element:<PopularIngredients></PopularIngredients>
      }
    ]
  },

 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
