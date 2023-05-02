import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Common from './components/Common/Common.jsx';
import Home_content from './components/home_content/Home_content.jsx';
import Blog from './components/Blog/Blog.jsx';
import About from './components/About/About.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

import PrivateRoute from './route/privateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Common></Common>,
    children:[
      {
        path:"/",
        element:<Home_content></Home_content>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/blog",
        element:<PrivateRoute><Blog></Blog></PrivateRoute>
      }
    ]
  },
  {
    path: "login",
    element: <Login></Login>
  },
  {
    path: "register",
    element: <Register></Register>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
