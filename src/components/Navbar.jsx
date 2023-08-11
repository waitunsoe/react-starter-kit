import React from "react";
import { BsCart, BsCartFill, BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className=" py-3 shadow-md sticky top-0 z-10 bg-slate-700">
      <div className="flex justify-between items-center px-10">
        <Link to={"/"}>
          <h3 className=" font-bold text-xl">Shop</h3>
        </Link>
        <div className="flex items-center gap-10">
          <div className=" flex justify-between items-center p-3 bg-slate-600 rounded-full ">
            <BsSearch className=" text-2xl" />
            <input
              type="text"
              className="px-3 outline-none bg-transparent"
              placeholder="Search product..."
            />
          </div>
          <Link to={"add-to-cart"}>
            <button className="relative">
              <span className=" absolute -right-5 -top-3 bg-cyan-700 rounded-full text-white w-6 h-6">
                {cartItems.length}
              </span>
              <BsCartFill className=" text-4xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
