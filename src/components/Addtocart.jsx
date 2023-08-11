import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Addtocart = () => {
    const { totalAmount, cartItems } = useSelector((state) => state.cart);
    console.log(cartItems);
  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-100 pt-20 min-h-screen">
        <div className="bg-white shadow rounded p-5 w-2/3 mx-auto text-center">
          <h1 className="mb-10 text-center text-2xl font-bold">
            No Cart Items !
          </h1>
          <Link to={"/"}>
            <button className=" py-2 px-10 bg-sky-500 hover:bg-sky-600 duration-500 text-white rounded">
              Please Fill
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="bg-gray-100 pt-20 min-h-screen">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div>
            {cartItems.map((cartItem) => (
              <Cart key={cartItem.id} {...cartItem} />
            ))}
          </div>
          {/* Sub total */}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 md:sticky md:top-24">
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <p className="mb-1 text-lg font-bold">
                ${totalAmount.toFixed(2)}
              </p>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addtocart;
