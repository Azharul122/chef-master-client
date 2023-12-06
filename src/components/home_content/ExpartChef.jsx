import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import divider from "../../assets/Images/divider.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Chef.css";
import { Link } from "react-router-dom";

const ExpartChef = () => {
  const [chef, setchef] = useState([]);
  const [reciepsd, setReciepe] = useState([]);

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
        // setLoading(false);
      });
  }, []);
  const expertChef = chef.slice(0, 3);

  const [HoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
    // document.querySelector(".chef_recipe").classList.add("hidden");
    // document.querySelector(".chef_social").classList.remove("hidden");
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
    // document.querySelector(".chef_recipe").classList.remove("hidden");
    // document.querySelector(".chef_social").classList.add("hidden");
  };

  return (
    <div className="w-full mt-5 mb-14">
      <div className="w-[96%] md:w-[90%] mx-auto">
        {/* title */}
        <div className="title text-center py-3 hidden">
          <p className="text-xl text-[#c38e60]">From Our Menu</p>
          <p className="text-3xl font-bold my-2">Try Our Special Offers</p>
          <img src={divider} className="mx-auto w-[250px] py-3" alt="" />
        </div>
        {/*  */}
        <div className="chef">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 chefCard ">
            {expertChef.map((ec, index) => (
              <Link
                className="relative mb-4 md:h-[400px] h-[300px] border"
                key={ec.chefId}
                onMouseEnter={(e) => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                to={`/chef-reciepies/${ec.chefId}`}
                // style={{ background: `url('${ec.chefPhoto}')` }}
              >
                <img
                  src={ec.chefPhoto}
                  alt=""
                  className=" h-full  w-[98%] mx-auto"
                />
                <div
                  className={` ${
                    HoveredItem == index
                      ? "duration-700 w-[210px] flex flex-col gap-3 justify-between items-center -bottom-[43px]"
                      : ""
                  } absolute -bottom-9 bg-black w-[150px] right-1/2 translate-x-1/2   py-2 px-3   border-2 border-[#c38e60]`}
                >
                  <p
                    className={`font-bold md:text-xl text-lg text-center mb-2`}
                  >
                    {ec.chefName}
                  </p>
                  <div className="flex">
                    <p
                      className={`${
                        HoveredItem == index ? "hidden" : "block"
                      } text-[#c38e60] chef_recipe md:text-inherit text-sm mx-auto`}
                    >
                      Reciepe makes:{" "}
                      {
                        reciepsd.filter((reci) => reci.chefId == ec.chefId)
                          .length
                      }
                    </p>
                    <div
                      className={`font-bold text-xl  ${
                        HoveredItem == index ? "block" : "hidden"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <FaFacebook className="text-xl font-bold text-[#c38e60]" />
                        <FaInstagram className="text-xl font-bold text-[#c38e60]" />
                        <FaTwitter className="text-xl font-bold text-[#c38e60]" />
                        <FaLinkedin className="text-xl font-bold text-[#c38e60]" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link
            to={"all-chef"}
            className="mt-12 p-1 bg-transparent border-[#c19977] border w-[146px] mb-1 md:mb-3 flex justify-center items-center mx-auto"
          >
            <button className="py-2 px-4 bg-[rgb(209,147,92)] text-white hover:bg-gray-500 border border-[#c19977] border-spacing-2">
              Discover More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpartChef;
