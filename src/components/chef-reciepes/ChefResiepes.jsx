import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ChefResiepes = () => {
  const { id } = useParams();
  const [reciepsd, setReciepe] = useState([]);
  const [chefs, setChefs] = useState([]);
  const [hoverindex, setHoverIndex] = useState(null);

  useEffect(() => {
    fetch(`https://ass10-server-azharul122.vercel.app/chef/${id}`)
      .then((res) => res.json())
      .then((data) => setReciepe(data));
  }, []);

  useEffect(() => {
    fetch(`https://ass10-server-azharul122.vercel.app/chef/`)
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  const singChef = chefs.filter((che) => che.chefId == id);

  //disable button and display toast
  const disbleme = (event) => {
    toast("Added to favorite");
    event.currentTarget.disabled = true;
    event.currentTarget.style.backgroundColor = "red";
    event.currentTarget.style.color = "white";
  };

  //   hover effect
  const handleHover = (index) => {
    setHoverIndex(index);
  };
  const handleLeave = () => {
    setHoverIndex(null);
  };
  return (
    <div>
      {/* Toast */}
      <ToastContainer />

      {/* Chefs hero */}
      <section className="">
        {singChef.map((chef) => (
          <div
            key={chef.chefId}
            className="chef md:container md:mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-3"
          >
            <div className="">
              <img
                src={chef.chefPhoto}
                alt=""
                className="text-center h-[200px] md:h-[300px] mx-auto rounded-lg"
              />
            </div>
            <div className="">
              <p className=" font-bold text-2xl pb-3 w-[80%] ">
                {chef.chefName}
              </p>
              <p>{chef.sortBio}</p>
              <p className="pb-3">
                Chef Experience: <span>{chef.chefExperience}</span>
              </p>
              <p className="pb-3">
                Number Of Reciepes: <span>{reciepsd.length}</span>
              </p>
              <p className="">
                Likes: <span>{chef.likes}</span>
              </p>
            </div>
          </div>
        ))}

        {/* Resipies */}
      </section>

      <section className="w-[96%] md:w-[90%] mx-auto py-5">
        <div
          className={`grid  gap-3 recipeGridView grid-cols-2 md:grid-cols-4`}
        >
          {reciepsd.map((fr, index) => (
            <Link
              to={`/recipe/${fr.reciepieId}`}
              className={`cursor-pointer cards pb-2  shadow-xl border  gap-2 items-center-center overflow-hidden"
              `}
              key={fr.reciepieId}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleLeave}
            >
              <div className={`relative recipeImageMobile  h-[250px]`}>
                <img
                  src={fr.image ? fr.image : fr.photo}
                  alt=""
                  className={`h-full sm:w-full shadow-xl $h-full`}
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
                <p className="pt-2 font-bold text-[14px]">{fr.reciepeName}</p>
                <p className="text-lg text-[#c38e60]">${fr.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* <section className="recioepe md:container md:mx-auto grid grid-cols-1 md:grid-cols-2">
        {reciepsd.map((rec) => (
          <div
            className="card border p-2 md:p-5 shadow shadow-blue-500"
            key={rec.reciepieId}
          >
         
            <img
              src={rec.photo}
              alt=""
              className="mb-2 h-[200px] w-[80%] md:w-[90%] mx-auto"
            />
            <h2 className="text-xl md:text-2xl mb-2">{rec.reciepeName}</h2>
            <small>{rec.cookingMethod}</small>
            <p className="text-center text-xl py-2 ">Ingredients</p>
            {rec.ingredients.map((ingr) => (
              <ul className="list-disc px-4 md;px-9">
                <li>{ingr}</li>
              </ul>
            ))}

            <div className="flex justify-between items-center mt-2">
              <p>
                Rating:<span>{rec.rating}</span>
              </p>

              <button
                className="py-2 px-2 bg-[#374151]"
                onClick={disbleme}
                id="bttn"
              >
                Add to wishList
              </button>
            </div>
          </div>
        ))}
      </section> */}
    </div>
  );
};

export default ChefResiepes;
