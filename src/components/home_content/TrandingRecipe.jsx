import React from "react";
import divider from "../../assets/Images/divider.png";
import { useState } from "react";
import { useEffect } from "react";
import "./Recipe.css";
import { Link } from "react-router-dom";

const TrandingRecipe = () => {
  const [reciepe, setReciepe] = useState([]);
  const [hoverindex, setHoverIndex] = useState(null);
  const filteredrecipes = reciepe.filter((r) => r.ispular == true).slice(0, 5);

  useEffect(() => {
    fetch(`https://ass10-server-azharul122.vercel.app/chef/0`)
      .then((res) => res.json())
      .then((data) => {
        setReciepe(data);
        // setLoading(false);
      });
  }, []);

  const handleHover = (index) => {
    setHoverIndex(index);
  };
  const handleLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="w-full py-5">
      <div className="w-[96%] md:w-[90%] mx-auto">
        {/* title */}
        <div className="title text-center py-3">
          <p className=" text-[#c38e60] text-3xl font-bold my-2">
            Most tranding recipe
          </p>
          <img src={divider} className="mx-auto w-[250px] py-3" alt="" />
        </div>
        {/* Tranding */}
        <section>
          <div className="trannding-recipe-container  grid grid-cols-1 md:grid-cols-5 gap-10">
            {filteredrecipes.map((fr, index) => (
              <Link
                to={`recipe/${fr.reciepieId}`}
                className="cursor-pointer cards md:even:translate-y-14 shadow-xl "
                key={fr.reciepieId}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleLeave}
              >
                <div className="relative h-[300px] ">
                  <img
                    src={fr.image ? fr.image : fr.photo}
                    alt=""
                    className="h-full sm:w-full shadow-xl "
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

                <p className="pt-2 font-bold text-[14px]">{fr.reciepeName}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrandingRecipe;
