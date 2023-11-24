import React from "react";
import hero1 from "../../assets/Images/hero1.jpg";
import hero2 from "../../assets/Images/hero2.jpg";
import hereAbsolute1 from "../../assets/Images/hero-abs1.jpg";
import hereAbsolute2 from "../../assets/Images/hero-abs2.png";
import heroDivider from "../../assets/Images/divider.png";

const Hero2 = () => {
  return (
    <div className="w-full h-[50vh] md:h-[80vh] py-5">
      <div className="flex justify-between relative   h-full">
        <div className="absolute w-[92%] md:w-[80%] z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2   text-center">
          <p className="text-[#c38e60] text-lg md:text-xl mb-1 md:mb-2">
            Welcome to Our Restaurant{" "}
          </p>
          <p className="font-bold text-2xl md:text-5xl mb-1 md:mb-2">
            Taste Royale Cuisine
          </p>
          <img src={heroDivider} className="m-auto py-1 md:py-2" alt="" />
          <p className="my-1 md:my-2 sm:text-sm">
            The restaurant is an organic space reflective of nature inspired
            cuisine. The interplay of textures and colour brings life and a
            vibrance that embraces the restaurant’s place in the dress circle.
          </p>
          <div className="p-1 bg-transparent border-[#c19977] border w-[150px] mb-1 md:mb-3 m-auto">
            <button className="py-2 px-4 bg-[rgb(209,147,92)] text-white hover:bg-gray-500 border border-[#c19977] border-spacing-2">
              Discover More
            </button>
          </div>
        </div>
        <div className="left relative overflow-hidden h-full">
          <img
            src={hereAbsolute2}
            className="absolute right-[40%] z-30 h-[100px] w-[100px] bottom-0 translate-x-[50px] translate-y-[50px]"
            alt=""
          />
          <img
            src={hero1}
            className="-translate-x-[40%] md:h-full h-[90%] m-auto"
            alt=""
          />
        </div>
        <div className="right relative overflow-hidden h-full">
          <img
            src={hero2}
            className="translate-x-[40%] md:h-full h-[90%] m-auto"
            alt=""
          />
          <img src="" className="absolute" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
