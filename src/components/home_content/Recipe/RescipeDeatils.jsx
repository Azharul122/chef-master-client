import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";

const RescipeDeatils = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [optionalTotal, setOptionalTotal] = useState(0);

  const {
    reciepeName,
    ingredients,
    cookingMethod,
    photo,
    sort_description,
    price,
    image
  } = recipe;
  // {fr.image ? fr.image : fr.photo}
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = (event) => {
    if (quantity <= 1) {
      event.currentTarget.disabled = true;
      // event.currentTarget.style.color="white"
      return;
    }
    setQuantity(quantity - 1);
  };

  const [selectedItems, setSelectedItems] = useState({});
  console.log(selectedItems);

  const handleCheckboxChange = (e) => {
    const { id, value, checked } = e.target;

    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [id]: checked ? parseFloat(value) : 0,
    }));
  };

  const calculateGrandTotal = () => {
    return Object.values(selectedItems)
      .reduce((total, value) => total + value, 0)
      .toFixed(2);
  };

  useEffect(() => {
    fetch(`https://ass10-server-azharul122.vercel.app/recipe/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        // setLoading(false);
      });
  }, []);
  console.log(typeof calculateGrandTotal());
  return (
    <div className="w-full py-5">
      <div className="w-[96%] md:w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2   gap-3 md:gap-5">
          <div className="">
            <img src={image?image:photo} alt="" />
          </div>
          <div className="">
            <p className="font-bold text-xl mb-2">{reciepeName}</p>
            <p className="text-[#c38e60] mb-1">${price}</p>
            <p className="mb-2">{sort_description}</p>

            <p className="text-lg font-bold mb-1">Quantity</p>
            <div className="flex items-center gap-1 mb-1">
              <FaPlus
                onClick={handleIncrease}
                className="text-[#c38e60] font-bold text-lg cursor-pointer"
              />
              <input
                type="number"
                value={quantity}
                min={1}
                max={8}
                className="text-center text-black quantityData outline-none border-[#c38e60] border-[1px] rounded-3xl"
              />
              <FaMinus
                disabled={false}
                onClick={handleDecrease}
                className={`text-[#c38e60] font-bold text-lg cursor-pointer ${
                  quantity < 1 ? "disabled" : ""
                }`}
              />
            </div>

            <div className="">
              <p className="text-lg font-bold mb-2">Topping</p>

              <input
                type="checkbox"
                name="cheese"
                id="cheese"
                value={0.6}
                onChange={handleCheckboxChange}
                className="outline-none border-none"
              />
              <label htmlFor="cheese"> Extra Cheese (+$.60)</label>
              <br />
              <input
                type="checkbox"
                name="lettuce"
                id="lettuce"
                onChange={handleCheckboxChange}
                value={0.3}
                className="outline-none"
              />
              <label htmlFor="lettuce"> Lettuce (+$.30)</label>
              <br />
              <input
                type="checkbox"
                name="onion"
                id="onion"
                onChange={handleCheckboxChange}
                value={0.4}
                className="outline-none"
              />
              <label htmlFor="onion"> Fried Onion (+$.40)</label>
              <br />
              <input
                type="checkbox"
                name="tomato"
                id="tomato"
                onChange={handleCheckboxChange}
                value={0.5}
                className="outline-none"
              />
              <label htmlFor="tomato"> Tomato Slice (+$.50)</label>
              <br />
              <input
                type="checkbox"
                name="pepper"
                id="pepper"
                onChange={handleCheckboxChange}
                value={0.1}
                className="outline-none"
              />
              <label htmlFor="pepper"> Pepper (+$.10)</label>

              <div className="w-full border-[#c19977] border-[.5px] my-2"></div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Product total</p>
                <p className="text-[#c19977]">
                  ${price * quantity} * {quantity}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Optional total</p>
                <p className="text-[#c19977]">${calculateGrandTotal()}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Grand total</p>
                <p className="text-[#c19977]">
                  $
                  {parseFloat(
                    price * quantity + parseFloat(calculateGrandTotal())
                  )}
                </p>
              </div>
              <div className="mt-12 p-1 bg-transparent border-[#c19977] border w-[146px] mb-1 md:mb-3 flex justify-center items-center mx-auto">
                <button className="py-2 w-[140px] bg-[rgb(209,147,92)] text-white hover:bg-gray-500 border border-[#c19977] border-spacing-2">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RescipeDeatils;
