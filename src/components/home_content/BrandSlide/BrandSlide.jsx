import React from "react";
import Slider from "react-infinite-logo-slider";
import brand1 from "../../../assets/Images/b11.png";
import brand2 from "../../../assets/Images/b2.png";
import brand3 from "../../../assets/Images/b3.png";
import brand4 from "../../../assets/Images/b4.png";
import brand5 from "../../../assets/Images/b5.png";
import divider from "../../../assets/Images/divider.png";

const BrandSlide = () => {
  return (
    <div className="w-full py-5">
      <div className="w-[96%] md:w-[90%] mx-auto">
        {/* title */}
        <div className="title text-center py-3">
          <p className=" text-[#c38e60] text-3xl font-bold my-2">Our sponcer</p>
          <img src={divider} className="mx-auto w-[250px] py-3" alt="" />
        </div>
        {/* Slider */}
        <Slider
          width="250px"
          duration={40}
          pauseOnHover={true}
          blurBorders={false}
          blurBoderColor={"#fff"}
        >
          <Slider.Slide>
            <img src={brand1} alt="any" className="w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={brand2} alt="any2" className="w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={brand3} alt="any3" className="w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={brand4} alt="any4" className="w-36" />
          </Slider.Slide>
          <Slider.Slide>
            <img src={brand5} alt="any5" className="w-36" />
          </Slider.Slide>
        </Slider>
      </div>
    </div>
  );
};

export default BrandSlide;
