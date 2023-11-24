import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import divider from '../../assets/Images/divider.png'

const AllChef = () => {
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
        <div className="title text-center py-3">
          <p className="text-3xl font-bold my-2">All chefs</p>
          <img src={divider} className="mx-auto md:w-[250px] py-3" alt="" />
        </div>
        {/*  */}
        <div className="chef">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 chefCard">
            {chef.map((ec, index) => (
              <Link
                className="relative mb-4"
                key={ec.chefId}
                onMouseEnter={(e) => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                to={`/chef-reciepies/${ec.chefId}`}
               e
              >
                <img
                  src={ec.chefPhoto}
                  alt=""
                  className="mb-2 md:h-[400px] h-[300px] w-[96%] md:w-[90%] mx-auto"
                />
                <div
                  className={`${
                    HoveredItem == index
                      ? "w-[200px] flex flex-col gap-3 justify-between items-center"
                      : ""
                  } absolute bg-black -bottom-10 right-1/2 w-[200px] md:w-fit translate-x-1/2 py-2 px-3 chefDiv m-3 border-2 border-[#c38e60]`}
                >
                  <p className={`font-bold md:text-xl text-lg text-center mb-2`}>
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
         
        </div>
      </div>
    </div>
  );
};

export default AllChef;
