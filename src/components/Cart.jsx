import React from "react";
import { BsDash, BsPlus, BsX } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
} from "../feature/services/cartSlice";

const Cart = (props) => {
  const { id, price, image, title, quantity } = props;
  const dispatch = useDispatch();

  return (
    <>
      <div className="rounded-lg">
        <div className="justify-between items-center mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <div className="h-40 w-40">
            <img
              src={image}
              alt="product-image"
              className="rounded-lg object-contain w-full h-full"
            />
          </div>
          <div className="sm:ml-4 sm:w-full">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-700 line-clamp-1">
                {title}
              </h2>
            </div>

            <div className="flex items-center border-gray-100 justify-between mt-4">
              <p className=" text-gray-600 text-lg">$ {price}</p>
              <div className="flex">
                <button
                  onClick={() => dispatch(decreaseItemQuantity(props))}
                  className="rounded-l bg-gray-100 py-1 px-5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  <BsDash />
                </button>
                <p className="h-8 w-16 border bg-white text-center leading-8 text-xs">
                  {quantity}
                </p>
                <button
                  onClick={() => dispatch(increaseItemQuantity(props))}
                  className="rounded-r bg-gray-100 py-1 px-5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                >
                  <BsPlus />
                </button>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(props))}
                className="rounded py-1 px-3 duration-100 bg-gray-200 hover:bg-gray-300 hover:text-red-500 text-red-600"
              >
                <BsX className=" text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
