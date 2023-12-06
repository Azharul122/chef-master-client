import React from "react";
import divider2 from "../../assets/Images/divider2.png";
import fp1 from "../../assets/Images/fp1.png";
import fp2 from "../../assets/Images/fp2.png";
import fp3 from "../../assets/Images/fp3.png";
import fp4 from "../../assets/Images/fp4.png";

const FreshProduct = () => {
  return (
    <div>
      <div className="w-full py-5 md:py-10 bg-black">
        <div className="w-[97%] md:w-[90%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10">
            <div className="text-center">
              <div className=" hover:border border-[#c38e60] rounded-[60px] hover:w-[115px] hover:h-[115px] h-[120px] w-[120px] flex justify-center items-center mx-auto">
                <img
                  src={fp1}
                  className="mx-auto h-[100px] w-[100px] rounded-full bg-[#0E1317]"
                  alt=""
                />
              </div>
              <p className="py-2 font-bold text-xl">Fresh Products</p>
              <p className="pb-2">
                For each dish, the growth of every element & the selection
              </p>
              <div className="flex gap-2 items-center text-center mx-auto justify-center">
                <img src={divider2} alt="" />
                <a href="#" className="text-lg text-[#c38e60]">
                  Discover More
                </a>
                <img src={divider2} alt="" />
              </div>
            </div>
            <div className="text-center">
              <div className=" hover:border border-[#c38e60] rounded-[60px] hover:w-[115px] hover:h-[115px] h-[120px] w-[120px] flex justify-center items-center mx-auto">
                <img
                  src={fp2}
                  className="mx-auto h-[100px] w-[100px] rounded-full bg-[#0E1317]"
                  alt=""
                />
              </div>
              <p className="py-2 font-bold text-xl">Fresh Products</p>
              <p className="pb-2">
                For each dish, the growth of every element & the selection
              </p>
              <div className="flex gap-2 items-center text-center mx-auto justify-center">
                <img src={divider2} alt="" />
                <a href="#" className="text-lg text-[#c38e60]">
                  Discover More
                </a>
                <img src={divider2} alt="" />
              </div>
            </div>
            <div className="text-center">
              <div className=" hover:border border-[#c38e60] rounded-[60px] hover:w-[115px] hover:h-[115px] h-[120px] w-[120px] flex justify-center items-center mx-auto">
                <img
                  src={fp3}
                  className="mx-auto h-[100px] w-[100px] rounded-full bg-[#0E1317]"
                  alt=""
                />
              </div>
              <p className="py-2 font-bold text-xl">Fresh Products</p>
              <p className="pb-2">
                For each dish, the growth of every element & the selection
              </p>
              <div className="flex gap-2 items-center text-center mx-auto justify-center">
                <img src={divider2} alt="" />
                <a href="#" className="text-lg text-[#c38e60]">
                  Discover More
                </a>
                <img src={divider2} alt="" />
              </div>
            </div>
            <div className="text-center">
              <div className=" hover:border border-[#c38e60] rounded-[60px] hover:w-[115px] hover:h-[115px] h-[120px] w-[120px] flex justify-center items-center mx-auto">
                <img
                  src={fp4}
                  className="mx-auto h-[100px] w-[100px] rounded-full bg-[#0E1317]"
                  alt=""
                />
              </div>
              <p className="py-2 font-bold text-xl">Fresh Products</p>
              <p className="pb-2">
                For each dish, the growth of every element & the selection
              </p>
              <div className="flex gap-2 items-center text-center mx-auto justify-center">
                <img src={divider2} alt="" />
                <a href="#" className="text-lg text-[#c38e60]">
                  Discover More
                </a>
                <img src={divider2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshProduct;
