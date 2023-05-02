import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from '../App';
import Home from '../pages/Home/Home';
import Recipe from '../pages/Recipe';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader:()=>fetch('http://localhost:3000/data')
        },
        {
          path: "recipe/:id",
          element: <Recipe></Recipe>,
          loader:({params})=>fetch(`http://localhost:3000/data/${params.id}`)
        }
      ]
      
    },
  ]);

export default router;