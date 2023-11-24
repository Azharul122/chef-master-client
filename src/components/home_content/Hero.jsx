import React from "react";

const Hero = () => {
  return (
    <div>
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
    </div>
  );
};

export default Hero;
