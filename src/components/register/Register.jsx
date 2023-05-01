import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGoogle } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    return (
        <div className="h-[100vh] flex justify-center items-center">
            <form className="w-[80%] md:w-[50%] mx-auto ">
                <div className="mb-6">
                    <label
                        for="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name='userName'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter name"
                        required
                    ></input>
                </div>
                <div className="mb-6">
                    <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your Photo URL
                    </label>
                    <input
                        type="text"
                        id="photo"
                        name='userPhoto'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter Photo URL"
                        required
                    ></input>
                </div>
                <div className="mb-6">
                    <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name='userEmail'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter email"
                        required
                    ></input>
                </div>
                <div className="mb-6">
                    <label
                        for="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name='userPassword'
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder='Enter password'
                        required
                    ></input>
                </div>
                <div className="flex items-start mb-6">
                    <p className="">Already user ? <Link to={"/login"}>Sighn In</Link></p>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Sign Up
                </button>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">Continue with</div>
                   
                      
                    <div className="flex gap-2 items-center justify-center">
                    <button className='flex justify-center items-center gap-2 py-2 px-3 bg-[#374151] rounded'>
                       <img src="https://img.freepik.com/premium-psd/google-icon-isolated_68185-565.jpg?w=360" className='w-[30px] h-[30px] ' alt="" />
                        Google
                       </button>
                       <button className='flex justify-center items-center gap-2 py-2 px-3 bg-[#374151] rounded'>
                       <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className='w-[30px] h-[30px] ' alt="" />
                        Github
                       </button>
                    </div>
                    </div>
                    
          

            </form>
        </div>
    );
};

export default Register;