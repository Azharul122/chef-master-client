import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import ActiveLink from "../../activeLink/ActiveLink";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };
  //    console.log(user?.displayName)
  const userDetails = document.getElementById("userDetails");
  const blockUserDetails = () => {
    userDetails.style.display = "block";
  };
  const hideUserDetails = () => {
    userDetails.style.display = "none";
  };
  return (
    <div>
      <header className=" relative">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to={"/"} className="flex items-center">
       
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Chefs
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              {user ? (
                <div className="flex">
                  <img
                    onMouseOver={blockUserDetails}
                    src={user?.photoURL}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full"
                  />
                </div>
              ) : (
                <Link
                  to={"login"}
                  className="text-gray-800 dark:text-white hover:white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm md:text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none bg-[#374151]"
                >
                  Log in
                </Link>
              )}

              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <ActiveLink
                    to={"/"}
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    to={"about"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    to={"blog"}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blog
                  </ActiveLink>
                </li>
                {/* <li>
                                    <Link to="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</Link>
                                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div
        className="hidden userInfo absolute bg-black text-white py-5 px-3 right-9 text-center"
        id="userDetails"
        onMouseLeave={hideUserDetails}
      >
        <p className="text-md mb-4 z-40">{user?.displayName}</p>
        <Link
          to={"/"}
          onClick={handleLogOut}
          className="text-gray-800 dark:text-white hover:white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm md:text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none bg-[#374151]"
        >
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default Header;
