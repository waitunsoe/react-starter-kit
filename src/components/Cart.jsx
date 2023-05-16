import React, { useState } from "react";
import {
  BsFillDashCircleFill,
  BsPlusCircleFill,
  BsTrash3,
} from "react-icons/bs";
import { useStateContextCustom } from "../context/StateContext";

const Cart = ({ item, increaseTotal, decreaseTotal }) => {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useStateContextCustom();

  const increaseQty = () => {
    setQuantity(quantity + 1);
    increaseTotal(item.price);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      decreaseTotal(item.price);
    }
  };
  
  const oneItemPrice = item.price * quantity;

  const removeItem = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
    decreaseTotal(oneItemPrice);
  };


  return (
    <div className=" border shadow rounded p-3 flex flex-col md:flex-row justify-between mb-5 max-[330px]:w-72 max-[380px]:w-80 max-w-sm md:max-w-2xl lg:max-w-3xl">
      <div className="h-60 w-60 mx-auto">
        <img src={item.image} className="h-full w-full object-contain" />
      </div>
      <div className="flex flex-col flex-1 md:ml-10 mt-5 md:mt-0">
        <h1 className=" text-lg font-semibold line-clamp-1">{item.title}</h1>
        <p className="line-clamp-2 text-gray-500 mt-2">{item.description}</p>
        <div className="mt-5 md:mt-auto">
          <div className="flex justify-between items-center mb-2">
            <p className=" text-xl font-medium text-gray-500">
              <span className="mr-2">$</span>
              {oneItemPrice.toFixed(2)}
            </p>
            <button
              className="text-xl font-medium text-red-500 hover:bg-gray-100 py-2 px-5 rounded-md"
              onClick={removeItem}
            >
              <span className=" inline-block mr-2">
                <BsTrash3 />
              </span>
              remove
            </button>
          </div>
          <div className="flex justify-between items-center">
            <button
              className=" btn w-1/3 btn-primary opacity-80"
              onClick={increaseQty}
            >
              <BsPlusCircleFill />
            </button>
            <p className="  py-2  text-center  w-1/3 bg-gray-100 text-2xl font-semibold">
              {quantity}
            </p>
            <button
              className=" btn w-1/3 btn-primary opacity-80"
              onClick={decreaseQty}
            >
              <BsFillDashCircleFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
