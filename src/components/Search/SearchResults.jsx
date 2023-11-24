import React, { useEffect, useState } from "react";
import divider from "../../../src/assets/Images/divider.png";
import { Link, NavLink, useParams } from "react-router-dom";
import { IoFilter, IoGrid, IoList } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
// import Pagination from "../Pagination";
import "../../components/home_content/Recipe/Recipe.css";
import { FaTimes } from "react-icons/fa";

const SearchResults = () => {
  const [reciepe, setReciepe] = useState([]);
  //   const [initaildata,setinitialData]=useState([])
  const [hoverindex, setHoverIndex] = useState(null);
  const [Category, setCategory] = useState(null);
  const [chefData, setChefData] = useState([]);
  const [price, setPrice] = useState(0);
  const [chef, setChef] = useState(null);
  const [sortValue, setSortValue] = useState([]);
  const [isGrid, setGrid] = useState(true);
  const {searchQuery1} = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  
    console.log(searchQuery)
  const categories = [...new Set(reciepe.map((rec) => rec.category))];
  // const searchResult=[...sortValue].includes(searchQuery.toLowerCase())

  // const filteredrecipes = reciepe.filter((r) => r.ispular == true).slice(0, 5);
  const filterRecipe = [...sortValue].filter(
    (rec) =>
      (!Category || rec.category == Category) &&
      (!chef || rec.chefId == chef) &&
      (!price || rec.price <= price) &&
      (!searchQuery || rec.reciepeName.toLowerCase().includes(searchQuery.toLowerCase()))
  );

 useEffect(()=>{
    setSearchQuery(searchQuery1)
 })
  useEffect(() => {
    fetch("https://ass10-server-azharul122.vercel.app/chef/")
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);

  useEffect(() => {
    fetch(`https://ass10-server-azharul122.vercel.app/chef/0`)
      .then((res) => res.json())
      .then((data) => {
        setReciepe(data);
        setSortValue(data);
        
        // setLoading(false);
      });
  }, []);

  const handleHover = (index) => {
    setHoverIndex(index);
  };
  const handleLeave = () => {
    setHoverIndex(null);
  };

  const handleSort = (value) => {
    if (value == "highPrice") {
      setSortValue([...filterRecipe].sort((a, b) => b.price - a.price));
    } else if (value == "lowPrice") {
      setSortValue([...filterRecipe].sort((a, b) => a.price - b.price));
    }
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = filterRecipe.length;
  const limit = 8;
  const indexOfLastPage = limit * currentPage;
  const indexOfFirstPage = indexOfLastPage - limit;

  const perPageProduct = [...filterRecipe].slice(
    indexOfFirstPage,
    indexOfLastPage
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Open filter sidebar
  const openFilterSide = () => {
    document.querySelector(".recipeFilterSide").style.display = "block";
    document.querySelector(".recipeFilterSide").style.left = "0";
  };

  // Hide fiter sidebar on mobile device
  const hideFilterMobileSidebar = () => {
    document.querySelector(".recipeFilterSide").style.display = "none";
  };

  return (
    <div>
      <div className="w-full py-5">
        <div className="w-[96%] md:w-[90%] mx-auto">
          {/* title */}
          <div className="title text-center py-3">
            <p className="  text-3xl font-bold my-2">
              Search resluts for: <span className="text-[#c38e60]">{searchQuery}</span>
            </p>
            <img src={divider} className="mx-auto w-[250px] py-3" alt="" />
          </div>

          {/* All Recipe */}
          <div className="grid grid-cols-5 gap-5">
            <div className="recipeFilterSide col-span-1  h-fit">
              {/* Filter */}
              <FaTimes
                onClick={() => hideFilterMobileSidebar()}
                className="text-white transform hover:rotate-180 md:hidden transition-transform duration-500 my-2 text-xl cursor-pointer"
              />
              <div className="w-[98%] border border-gray-300 mx-auto pl-2 mb-4 py-2">
                <p className="font-bold text-xl text-[#c38e60]">
                  Serach Filter:
                </p>
                <div className="border my-1 border-gray-300"></div>

                <div className="relativeInpit h-[40px] w-[90%] relative">
                  <input
                    className="h-full w-full rounded-3xl border-[#c38e60] border-[1px]"
                    type="text"
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 right-[5px] h-[30px] w-[50px] rounded-full bg-[#c38e60] flex justify-center items-center">
                    <BiSearch className="text-white font-bold text-lg" />
                  </div>
                </div>
              </div>

              <div className="w-[98%] border border-gray-300 mx-auto pl-2 mb-4 ">
                <p className="font-bold text-xl text-[#c38e60]">Price:</p>
                <div className="border my-1 border-gray-300"></div>

                <input
                  className="text-fuchsia-600 w-3/4"
                  type="range"
                  name="priceRange"
                  id="priceRange"
                  max={100}
                  min={0}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <p className="value">Price between: ${price}</p>
              </div>

              <div className="w-[98%] border border-gray-300 mx-auto pl-2">
                <p className="font-bold text-xl text-[#c38e60]">Category:</p>
                <div className="border my-1 border-gray-300"></div>
                {categories.map((cat) => (
                  <li
                    key={cat}
                    className={`font-bold list-none cursor-pointer my-1 ${
                      Category == cat ? "text-[#c38e60]" : ""
                    }`}
                    onClick={() => setCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </div>
              <div className="w-[98%] border border-gray-300 mx-auto pl-2 mt-2">
                <p className="font-bold text-xl text-[#c38e60]">Chef:</p>
                <div className="border my-1 border-gray-300"></div>
                {chefData.map((ch) => (
                  <li
                    key={ch.id}
                    className={`font-bold list-none cursor-pointer my-1 ${
                      chef == ch.chefName ? "text-[#c38e60]" : ""
                    }`}
                    onClick={() => setChef(ch.chefId)}
                  >
                    {ch.chefName}
                  </li>
                ))}
              </div>
            </div>
            <div className="resipeContentSide col-span-4  h-fit ">
              <div className="filterHeader flex justify-between items-center p-2">
                <div className="flex items-center gap-2">
                  <IoGrid
                    className={`text-2xl ${
                      isGrid ? "text-[#c38e60]" : "text-white"
                    }`}
                    onClick={() => setGrid(true)}
                  />
                  <IoList
                    className={`text-3xl ${
                      isGrid ? "text-white" : "text-[#c38e60]"
                    }`}
                    onClick={() => setGrid(false)}
                  />
                  <IoFilter
                    className={`text-3xl hidden rexipeMobileFilterIcon infinite-loop`}
                    onClick={() => openFilterSide()}
                  />
                </div>
                <select
                  className="p-2 bg-black text-white"
                  name=""
                  id=""
                  onChange={(e) => handleSort(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="highPrice">Price high to low</option>
                  <option value="lowPrice">Price low to high</option>
                </select>
              </div>
              <div
                className={`grid  gap-3 ${
                  isGrid
                    ? "recipeGridView grid-cols-2 md:grid-cols-4"
                    : "recipeListView grid-cols-2 gap-2"
                }`}
              >
                {perPageProduct.map((fr, index) => (
                  <Link
                    to={`/recipe/${fr.reciepieId}`}
                    className={`cursor-pointer cards  shadow-xl border ${
                      isGrid
                        ? ""
                        : "grid grid-cols-2 gap-2 items-center-center h-[140px] overflow-hidden"
                    }`}
                    key={fr.reciepieId}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={handleLeave}
                  >
                    <div
                      className={`relative recipeImageMobile  ${
                        isGrid ? "h-[250px]" : ""
                      }`}
                    >
                      <img
                        src={fr.image ? fr.image : fr.photo}
                        alt=""
                        className={`h-full sm:w-full shadow-xl ${
                          isGrid ? "" : "h-full"
                        }`}
                      />
                      <div
                        className={`absolute w-full h-full bg-[rgba(0,0,0,0.5)] top-0 z-10 ${
                          hoverindex == index ? "block" : "hidden"
                        }`}
                      >
                        <div className=" flex justify-center items-center w-full h-full">
                          <p className="font-bold text-lg shadow-lg text-[#c38e60]">
                            details
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" pl-2">
                      <p className="pt-2 font-bold text-[14px]">
                        {fr.reciepeName}
                      </p>
                      <p className="text-lg text-[#c38e60]">${fr.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="w-full">
                <div className="pt-5">
                  {totalProducts > limit && (
                    <div className="flex items-center gap-2">
                      {Array(Math.ceil(filterRecipe.length / limit))
                        .fill()
                        .map((_, index) => (
                          <NavLink key={index}>
                            <button
                              className={`px-4 text-white text-xl ${
                                index + 1 === currentPage
                                  ? "bg-[#bc865a]  font-bold"
                                  : "bg-black"
                              }`}
                              onClick={() => paginate(index + 1)}
                            >
                              {index + 1}
                            </button>
                          </NavLink>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
