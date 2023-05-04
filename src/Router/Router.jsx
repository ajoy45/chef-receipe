import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from '../App';
import Home from '../pages/Home/Home';
import Recipe from '../pages/Recipe';
import ErrorPage from '../pages/ErrorPage';
import Blog from '../pages/Blog';
import Register from '../pages/Register';
import Login from '../pages/Login';
import RequireAuth from '../shared/RequireAuth';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader:()=>fetch('http://localhost:3000/data')
        },
        {
          path: "blog",
          element:<Blog></Blog> ,
          
        },
        {
          path: "register",
          element:<Register></Register> ,
          
        },
        {
          path: "login",
          element:<Login></Login> ,
          
        },
        {
          path: "recipe/:id",
          element: <RequireAuth>
            <Recipe></Recipe>
          </RequireAuth>,
          loader:({params})=>fetch(`http://localhost:3000/data/${params.id}`)
        }
      ]
      
    },
  ]);

export default router;