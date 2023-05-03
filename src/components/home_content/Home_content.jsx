import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faExper } from '@fortawesome/free-solid-svg-icons'
const Home_content = () => {
  const [chef, setchef] = useState([]);
  const [reciepsd, setReciepe] = useState([])

  // const [chefName,chefExperience,chefId,numberOfreciepe,likes,chefPhoto]=chef
  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setchef(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/chef/0`)
        .then(res => res.json())
        .then(data => setReciepe(data))
}, [])

const popularRcipe=reciepsd.filter(rec=>rec.ispular==true)
  return (
    <div>
      <section className=" md:container md:mx-auto grid grid-cols-3 gap-4">
        {chef.map((ch) => (
          <div
            className="card border p-2 md:p-5 shadow shadow-blue-500"
            key={ch.chefId}
          >
            {/* {
                                console.log(ch)
                            } */}
            <img
              src={ch.chefPhoto}
              alt=""
              className="mb-2 h-[200px] w-[80%] md:w-[90%] mx-auto"
            />
            <h2 className="text-xl md:text-2xl mb-2">{ch.chefName}</h2>
            <div className="flex justify-between items-center mb-2">
              <p>reciepe makes: {4}</p>
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
        <div className="title container md:mx-auto">
                        <p className="text-3xl text-center py-3 md:py-8 font-bold text-white">Popular Recipe</p>
        </div>
      <section className=" md:container md:mx-auto grid grid-cols-3 gap-4">
        {popularRcipe.map((prec) => (
          <div
            className="card border p-2 md:p-5 shadow shadow-blue-500"
            key={prec.chefId}
          >
            {/* {
                                console.log(ch)
                            } */}
            <img
              src={prec.photo}
              alt=""
              className="mb-2 h-[200px] w-[80%] md:w-[90%] mx-auto"
            />
            <h2 className="text-xl md:text-2xl mb-2">{prec.reciepeName}</h2>
          

          </div>
        ))}
      </section>
      

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
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
                placeholder="name@flowbite.com"
                required
              ></input>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              ></input>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home_content;
