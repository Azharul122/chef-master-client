import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
const {signIn}=useContext(AuthContext)
const navigate=useNavigate()
const [message,setMessage]=useState("")


    const handleLogin=event=>{
        event.preventDefault()
        const email=event.target.email.value;
        const password=event.target.password.value;
      
        console.log(email,password)
        signIn(email,password)
       .then(result=>{
        const loggeduser=result.user;
        navigate("/")
        console.log(loggeduser)
       })
       .catch(error=>{
            setMessage("Email Password didin't matched")
       })
    }


    return (
        <div className="h-[100vh] flex justify-center items-center">
            <form className="w-[80%] md:w-[50%] mx-auto " onSubmit={handleLogin}>
                <div className="mb-6">
                    <p className="text-center text-red-400 py-3 font-bold">{ message }</p>
                    <label
                    htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com"
                        required
                    ></input>
                </div>
                <div className="mb-6">
                    <label
                    htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    ></input>
                </div>
                <div className="flex items-start mb-6">
                <p className="">new to chef ? <Link to={"/register"}>Sighn Up</Link></p>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    SignIn
                </button>
            </form>
        </div>
    );
};

export default Login;
