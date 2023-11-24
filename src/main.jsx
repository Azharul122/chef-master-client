import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Common from "./components/Common/Common.jsx";
import Home_content from "./components/home_content/Home_content.jsx";
import Blog from "./components/Blog/Blog.jsx";
import About from "./components/About/About.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

import PrivateRoute from "./route/privateRoute.jsx";
import ChefResiepes from "./components/chef-reciepes/ChefResiepes.jsx";
import Error from "./components/404/Error.jsx";
import Blog_details from "./components/home_content/Blogs/Blog_details.jsx";
import AllBlogs from "./components/home_content/Blogs/AllBlogs.jsx";
import RescipeDeatils from "./components/home_content/Recipe/RescipeDeatils.jsx";
import AllRecipe from "./components/home_content/Recipe/AllRecipe.jsx";
import AllChef from "./components/home_content/AllChef.jsx";
import SearchResults from "./components/Search/SearchResults.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Common></Common>,
    children: [
      {
        path: "/",
        element: <Home_content></Home_content>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/blogs/:id",
        element: <Blog_details></Blog_details>,
      },
      {
        path: "/recipe/:id",
        element: <RescipeDeatils></RescipeDeatils>,
      },
      {
        path: "/all-blogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/all-recipe",
        element: <AllRecipe></AllRecipe>,
      },
      {
        path: "/all-chef",
        element: <AllChef></AllChef>,
      },
      {
        path: "/chef-reciepies/:id",
        element: <ChefResiepes></ChefResiepes>,
        // loader: ({ prarams }) =>
        //   fetch(`http://localhost:5000/chef/${prarams.id}`)
      },
      {
        path:"/search-results/:searchQuery1",
        element:<SearchResults></SearchResults>
      }
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
