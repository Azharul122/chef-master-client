import React from "react";
import divider from "../../assets/Images/divider.png";
import menuBg from "../../assets/Images/menu-bg.png";
import "./REcipe_menu.css";
const Reciepe_menu = () => {
  return (
    <div
      className={`w-full bg-[url(${menuBg})]`}
      style={{ backgroundImage: `url(${menuBg})` }}
    >
      <div className="w-[96%] md:w-[90%] mx-auto ">
        <div className="title text-center py-3">
          <p className="text-xl text-[#c38e60]">From Our Menu</p>
          <p className="text-3xl font-bold my-2">Try Our Special Offers</p>
          <img src={divider} className="mx-auto w-[250px] py-3" alt="" />
        </div>
        <div className="rmenu grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
          <div className="flex flex-col gap-3">
            <div className="">
              <div className="menu_item flex  items-baseline gap-2">
                <p className=" order-1 font-bold text-xl">
                  Raw Scallops from Erquy
                </p>
                <p className="text-xl text-[#c38e60] order-3">$38</p>
              </div>
              <p>Candied Jerusalem artichokes, truffle</p>
            </div>
            <div className="">
              <div className="menu_item flex  items-baseline gap-2">
                <p className=" order-1 font-bold text-xl">Sea Bass Ceviche</p>
                <p className="text-xl text-[#c38e60] order-3">$38</p>
              </div>
              <p>Avocado, butternut, lime</p>
            </div>
            <div className="">
              <div className="menu_item flex  items-baseline gap-2">
                <p className=" order-1 font-bold text-xl">
                  Tender Octopus and Fennel
                </p>
                <p className="text-xl text-[#c38e60] order-3">$38</p>
              </div>
              <p>Citrus, wild rocket condiment</p>
            </div>
            <div className="">
              <div className="menu_item flex  items-baseline gap-2">
                <p className=" order-1 font-bold text-xl">
                  Thinly Sliced Brittany Artichokes
                </p>
                <p className="text-xl text-[#c38e60] order-3">$38</p>
              </div>
              <p>Citrus, wild rocket condiment</p>
            </div>
            <div className="">
              <div className="menu_item flex  items-baseline gap-2">
                <p className=" order-1 font-bold text-xl">
                  Celeriac and Truffle Ravioli
                </p>
                <p className="text-xl text-[#c38e60] order-3">$38</p>
              </div>
              <p>Roasted langoustine, consommé</p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-3">
              <div className="">
                <div className="menu_item flex  items-baseline gap-2">
                  <p className=" order-1 font-bold text-xl">
                    Viennese Veal Cutlet
                  </p>
                  <p className="text-xl text-[#c38e60] order-3">$38</p>
                </div>
                <p>Ricotta and spinach gnocchi, Caccio de Pepe</p>
              </div>
              <div className="">
                <div className="menu_item flex  items-baseline gap-2">
                  <p className=" order-1 font-bold text-xl">
                    Corrèze Pan-seared Veal Liver
                  </p>
                  <p className="text-xl text-[#c38e60] order-3">$38</p>
                </div>
                <p>Olive oil mashed potato, onion jus</p>
              </div>
              <div className="">
                <div className="menu_item flex  items-baseline gap-2">
                  <p className=" order-1 font-bold text-xl">
                    Cod Filet Cooked on One Side
                  </p>
                  <p className="text-xl text-[#c38e60] order-3">$38</p>
                </div>
                <p>Chorizo, chickpea espuma, pequillos</p>
              </div>
              <div className="">
                <div className="menu_item flex  items-baseline gap-2">
                  <p className=" order-1 font-bold text-xl">
                    Grilled Veal Filet Mignon
                  </p>
                  <p className="text-xl text-[#c38e60] order-3">$38</p>
                </div>
                <p>Pumpkin, endives with hazelnuts</p>
              </div>
              <div className="">
                <div className="menu_item flex  items-baseline gap-2">
                  <p className=" order-1 font-bold text-xl">
                    Grilled Black Angus Sirloin Steak
                  </p>
                  <p className="text-xl text-[#c38e60] order-3">$38</p>
                </div>
                <p>Coin de rue’ potatoes, Béarnaise sauce</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-1 bg-transparent border-[#c19977] border w-[146px] mb-1 md:mb-3 flex justify-center items-center mx-auto">
          <button className="py-2 px-4 bg-[rgb(209,147,92)] text-white hover:bg-gray-500 border border-[#c19977] border-spacing-2">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reciepe_menu;
