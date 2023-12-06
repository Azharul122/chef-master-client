import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import ActiveLink from "../activeLink/ActiveLink";
import LazyLoad from "react-lazy-load";
import { FaShoppingCart, FaSearch, FaTimes } from "react-icons/fa";
import "./Header.css";
import { BiSearch } from "react-icons/bi";
import SearchResults from "../Search/SearchResults";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };

  const userDetails = document.getElementById("userDetails");
  const blockUserDetails = (event) => {
    userDetails.style.display = "block";
  };
  const hideUserDetails = () => {
    userDetails.style.display = "none";
  };

  //fixed to top
  let prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navbarFixeed").style.top = "0";
    } else {
      document.querySelector(".navbarFixeed").style.top = "-120px"; // Adjust the value based on your navbar height
    }

    prevScrollpos = currentScrollPos;
  };

  // margin bottom

  useEffect(() => {
    // const headerElement = document.querySelector(".marginHeader").offsetHeight;
    // const headerHeight = headerElement.offsetHeight;
    // headerElement.style.marginBottom = headerHeight + 'px';
    // console.log(headerElement)
  }, []);

  // if (headerElement) {
  //   const headerHeight = headerElement.clientHeight;
  //   headerElement.style.marginBottom=headerHeight

  // }

  // Search
  const openSearchContainer = () => {
    const searchContainerElement = document.querySelector(".searchContainer");
    searchContainerElement.classList.add("block");
    searchContainerElement.classList.remove("hidden");
  };
  const closeSearchContainer = () => {
    const searchContainerElement = document.querySelector(".searchContainer");
    searchContainerElement.classList.add("hidden");
    searchContainerElement.classList.remove("block");
  };
  // const history = useHistory();
  const navigate = useNavigate();
  const handleSearchData = () => {
    const searchContainerElement = document.querySelector(".searchContainer");
    searchContainerElement.classList.add("hidden");
    searchContainerElement.classList.remove("block");
    searchQuery && navigate(`/search-results/${searchQuery}`);
    const searchInputField = document.querySelector(".searchInputField");
    searchInputField.value = "";
  };

  // enter key press search result
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchData();
    }
  };

  return (
    <div className="marginHeader mb-[100px]">
      <header className="navbarFixeed fixed  w-full z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-5  dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to={"/"} className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Chefs
              </span>
            </Link>
            <div className="flex items-center lg:order-2 gap-1 md:gap-3">
              <div className="relative ">
                <FaSearch
                  onClick={() => openSearchContainer()}
                  className="text-lg text-white cursor-pointer"
                />
                <div className="searchContainer absolute md:w-[250px] w-[180px] bg-black md:h-[200px] h-[100px]  mx-auto mt-[50px] border-2 border-[#c38e60] md:left-0 left-1/2 -translate-x-1/2 hidden">
                  <div className="flex items-center justify-center h-full">
                    <FaTimes
                      onClick={() => closeSearchContainer()}
                      className="text-xl absolute text-white top-2 right-2 cursor-pointer"
                    />
                    <div className="relativeInpit h-[40px] w-[90%] relative">
                      <input
                        className="searchInputField h-full w-full rounded-3xl border-[#c38e60] border-[1px]"
                        type="text"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyPress}
                      />
                      <div
                        onClick={handleSearchData}
                        className={`cursor-pointer absolute top-1/2 -translate-y-1/2 right-[5px] h-[30px] w-[50px] rounded-full bg-[#c38e60] flex justify-center items-center ${
                          !searchQuery ? "cursor-not-allowed  opacity-50" : ""
                        }`}
                      >
                        <BiSearch className="text-white font-bold text-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <FaTimes className="text-lg text-white cursor-pointer hidden" />
              <FaShoppingCart className="text-xl text-white cursor-pointer" />
              <div className="p-1 bg-transparent border-[#c19977] border hidden md:block">
                <button className="py-2 px-3 bg-[rgb(209,147,92)] text-white hover:bg-gray-500">
                  Book a Table
                </button>
              </div>
              {user ? (
                <div className="flex gap-1 md:gap-3 items-center">
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip={user?.displayName}
                  >
                    <img
                      src={user?.photoURL}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full cursor-pointer"
                    />
                  </div>

                  <Link to={"/login"} className="" onClick={handleLogOut}>
                    Log Out
                  </Link>
                </div>
              ) : (
                <LazyLoad>
                  <Link
                    to={"login"}
                    className="text-gray-800 dark:text-white hover:white focus:ring-4 focus:ring-gray-300 font-medium text-sm md:text-md px-2 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none bg-[#374151]"
                  >
                    Log in
                  </Link>
                </LazyLoad>
              )}

              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-1 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
              className="hidden justify-between items-center w-full  lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className=" flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li className="">
                  <ActiveLink
                    to={"/"}
                    className=" nav-item block mb-5 py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </ActiveLink>
                </li>
                <li className="">
                  <ActiveLink
                    to={"about"}
                    className="nav-item block py-2 mb-5 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    to={"blog"}
                    className="nav-item block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blog
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    to={"all-recipe"}
                    className="nav-item block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    All recipe
                  </ActiveLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
