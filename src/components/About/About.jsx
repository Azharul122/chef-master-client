import React from "react";
import about2 from "../../assets/Images/about2.png";
import about1 from "../../assets/Images/about1.png";
import divider from "../../assets/Images/divider.png";

const About = () => {
  return (
    <div className="w-full">
      <div className="w-[96%] md:w-[90%] mx-auto py-5 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          <div
            className="bg-contain"
            style={{ backgroundImage: `url(${about1})` }}
          >
            <img src={about2} alt="" />
            {/* <img src={about1} alt="" /> */}
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <p className="text-xl text-[#c38e60] ">About Us</p>
            <p className="text-3xl font-bold my-2">Between Heaven & Earth</p>
            <img src={divider} className="mb-2" alt="" />
            <p className="mb-2">
              The character and philosophy of our type of cuisine, which follows
              the ancestral technique of using different types of firewood,
              fire, charcoal and the scented trace of the smoke, inherently
              results in a limitation on the number of diners that we can
              accommodate without sacrificing our essence.
            </p>
            <p className="font-bold mb-3">
              Whisper to us about your feelings, and we will prepare what you
              need now.
            </p>
            <div className="p-1 bg-transparent border-[#c19977] border w-[146px] mb-1 md:mb-3 flex justify-center items-center">
              <button className="py-2 px-4 bg-[rgb(209,147,92)] text-white hover:bg-gray-500 border border-[#c19977] border-spacing-2">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
