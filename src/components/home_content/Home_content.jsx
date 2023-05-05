import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";
// import AwesomeSlider from "react-awesome-slider";
// import withAutoplay from "react-awesome-slider/dist/autoplay";
// import "react-awesome-slider/dist/styles.css";

const Home_content = () => {
  // const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [chef, setchef] = useState([]);
  const [reciepsd, setReciepe] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ass10-server-azharul122.vercel.app/chef/")
      .then((res) => res.json())
      .then((data) => setchef(data));
  }, []);

  useEffect(() => {
    fetch(`https://ass10-server-azharul122.vercel.app/chef/0`)
      .then((res) => res.json())
      .then((data) => {
        setReciepe(data);
        setLoading(false);
      });
  }, []);

  const [showElement,setShowElement] = React.useState(true)
  useEffect(()=>{
    setTimeout(function() {
      setShowElement(false)
         }, 7000);
       },
   [])
  const popularRcipe = reciepsd.filter((rec) => rec.ispular == true);
  return (
    <div>
{
  showElement && <div className="" id="messageMe">
  <p className="text-red-500 text-2xl text-center py-5">Please wait unlit load hero data</p>
 </div>
}
     
      {/* Loader */}
      {loading && <Spinner></Spinner>}

      {/* Header */}
      <h2 className="pt-5 mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Bangladeshi Recipe
      </h2>
      {/* Banner */}
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96 container mx-auto">
          <div className="hidden duration-700 ease-in-out " data-carousel-item>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
              <div className="bg-[#374151] flex justify-center items-center py-3 md:py-0 h-[100px] md:h-full">
                <p className="text-lg md:text-3xl flex  text-white ">
                  Mutton Curry with Potatoes
                </p>
              </div>
              <div className="md:h-auto h-[200px]">
                <img
                  src="https://www.thebangladeshikitchen.com/wp-content/uploads/2020/02/khasir-mangsho-alu-diye-mutton-curry-800x475.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
              <div className="bg-[#374151] flex justify-center items-center py-3 md:py-0 h-[100px] md:h-full">
                <p className="text-lg flex md:text-3xl   text-white">
                  Spicy Dry Chicken – Kosha Murgir Mangsho
                </p>
              </div>
              <div className="md:h-auto h-[200px]">
                <img
                  src="https://www.thebangladeshikitchen.com/wp-content/uploads/2014/10/KushaMurgi-800x475.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
              <div className="bg-[#374151] flex justify-center items-center py-3 md:py-0 h-[100px] md:h-full">
                <p className="text-lg md:text-3xl  text-white">
                  Bhuna Khichuri
                </p>
              </div>
              <div className="md:h-auto h-[200px]">
                <img
                  src="https://www.thebangladeshikitchen.com/wp-content/uploads/2014/10/BhunaKhichuri-800x475.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chefs Section */}
      <h2 className="pt-5 mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Our expert Chefs
      </h2>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-3 md:py-7 w-[90%] md:w-[96%] ">
        {chef.map((ch) => (
          <div
            className="card border p-2 md:p-5 shadow shadow-blue-500"
            key={ch.chefId}
          >
            {/* {
                                console.log(ch)
                            } */}
            <LazyLoad
              threshold={1}
              onContentVisible={() => {
                "Loading";
              }}
            >
              <img
                src={ch.chefPhoto}
                alt=""
                className="mb-2 h-[200px] w-[80%] md:w-[90%] mx-auto"
              />
            </LazyLoad>

            <h2 className="text-xl md:text-2xl mb-2">{ch.chefName}</h2>
            <div className="flex justify-between items-center mb-2">
              <p>
                reciepe makes:{" "}
                {reciepsd.filter((reci) => reci.chefId == ch.chefId).length}
              </p>
              {}
              <p>Experience:{ch.chefExperience}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>Likes:{ch.likes}</p>
              <Link
                className="bg-[#1F2937] py-2 px-2 "
                to={`/chef-reciepies/${ch.chefId}`}
              >
                View reciepe
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Popular Recipe Section */}
      <h2 className="py-5 mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Popular Recipe
      </h2>
      <section className=" md:container md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {popularRcipe.map((prec) => (
          <div
            className="card border p-2 md:p-5 shadow shadow-blue-500 w-[90%] md:w-[96%] mx-auto"
            key={prec.chefId}
          >
            <img
              src={prec.photo}
              alt=""
              className="mb-2 h-[200px] w-[80%] md:w-[90%] mx-auto"
            />
            <h2 className="text-xl md:text-2xl mb-2">{prec.reciepeName}</h2>
          </div>
        ))}
      </section>

      {/* Custom Recipe Sectioon */}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact for Custom Recipe
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Let us know which type of recipe you have need!!
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Email"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Recipe Name
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Recipe Name"
                required
              ></input>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Describe About Recipe
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Describe About Recipe"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#3e4a5e] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home_content;
