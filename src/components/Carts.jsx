import React, { useEffect, useState } from "react";
import { useStateContextCustom } from "../context/StateContext";
import Cart from "./Cart";

const Carts = () => {
  const { state, dispatch } = useStateContextCustom();
  const { cart } = state;

  const [mainTotal, setMainTotal] = useState(0);
  const total = cart?.reduce((pv, cv) => pv + cv.price, 0);

  useEffect(() => {
    setMainTotal(total);
  }, []);

  const increaseTotal = (price) => {
    setMainTotal(mainTotal + price);
  };

  const decreaseTotal = (price) => {
    setMainTotal(mainTotal - price);
  };

  return (
    <>
      {cart.length > 0 ? (
        <div className="mt-5 grid grid-cols-12 gap-5 p-5">
          <div className="col-span-9">
            {cart?.map((item) => (
              <Cart
                key={item.id}
                item={item}
                increaseTotal={increaseTotal}
                decreaseTotal={decreaseTotal}
              />
            ))}
          </div>

          <div className="col-span-3">
            <div className=" rounded p-3 border text-center shadow sticky right-0 top-[130px]">
              <h1 className="text-lg font-medium">Total</h1>
              <p className="font-extrabold text-2xl">
                <span className="mr-2">$</span>
                {mainTotal.toFixed(2)}
              </p>
              <button className="px-5 py-3 rounded text-white hover:bg-red-700 bg-red-600 border-none w-full mt-20" onClick={() => dispatch({type: "CLEAR_ALL_CARTS"})}>Clear All Carts</button>
            </div>
          </div>
        </div>
      ) : (
        "No Carts To Display!"
      )}
    </>
  );
};

export default Carts;
