import React, { useEffect, useState } from "react";
import { BsCart, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useStateContextCustom } from "../context/StateContext";
import Cart from "./Cart";

const Navbar = () => {
  const { search, setSearch, state } = useStateContextCustom();
  const { cart } = state;
  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="relative">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="navbar shadow-lg bg-base-100 p-5 justify-between">
            <div className="lg:hidden">
              <label
                htmlFor="my-drawer-3"
                className="btn btn-square btn-ghost text-3xl"
              >
                <BsSearch />
              </label>
            </div>
            <div className="flex-1 hidden lg:block">
              <Link to={"/"}>
                <h1 className="btn btn-ghost normal-case text-xl">SHOP</h1>
              </Link>
            </div>
            <div className="lg:hidden">
              <Link to={"/cart"}>
                <div className="btn btn-ghost btn-circle">
                  <div className="indicator text-3xl">
                    <BsCart />
                    <span className="badge badge-sm indicator-item">
                      {cart.length}
                    </span>
                  </div>
                </div>
              </Link>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="gap-10 hidden lg:flex">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered input-warning focus:border-none"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <Link to={"/carts"}>
                <div className="btn btn-ghost btn-circle">
                  <div className="indicator text-3xl">
                    <BsCart />
                    <span className="badge badge-sm indicator-item">
                      {cart.length}
                    </span>
                  </div>
                </div>
              </Link>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="drawer-side absolute top-[25%] left-[10%]  md:max-w-[50%] text-center">
            <label
              htmlFor="my-drawer-3"
              className="!bg-transparent drawer-overlay "
            ></label>
            <form>
              <input
                type="text"
                placeholder="Search"
                className=" input input-bordered input-warning"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
