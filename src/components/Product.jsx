import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../feature/services/cartSlice";

const Product = (pros) => {
  const { id, title, image, price } = pros;
  // const [added, setAdded] = useState(false);
  const addCart = () => {
    dispatch(addToCart(pros));
    // setAdded(true);
  };
  const removeCart = () => {
    dispatch(removeFromCart(pros));
    // setAdded(false);
  };
  const dispatch = useDispatch();
  return (
    <div className=" bg-white shadow rounded-md p-3 overflow-hidden">
      <img src={image} className="h-60 w-full object-contain mx-auto mb-2" />
      <h3 className="mb-2 text-lg font-bold line-clamp-1">{title}</h3>
      <div className=" flex justify-between items-center">
        <p className=" font-semibold">${price}</p>
        {/* {added ? (
          <button
            onClick={removeCart}
            className=" bg-red-600 hover:bg-red-700 transition-all duration-100 px-3 py-2 rounded text-white"
          >
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={addCart}
            className=" bg-blue-700 hover:bg-blue-800 transition-all duration-100 px-3 py-2 rounded text-white"
          >
            Add To Cart
          </button>
        )} */}
        <button
          onClick={addCart}
          className=" bg-blue-700 hover:bg-blue-800 transition-all duration-100 px-3 py-2 rounded text-white"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
