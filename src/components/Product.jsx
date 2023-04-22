import React from "react";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsCartPlus } from "react-icons/bs";
import "./product.css";

const Product = ({ id, image, title, price }) => {
  return (
    <div className="relative shadow hover:shadow-md p-5 card">
      <img
        className=" h-52 w-52 object-contain card-image hover:scale-105 duration-500 mx-auto"
        src={image}
      />
      <Link to={`/detail/${id}`}>
        <div className="card-icon cursor-pointe bg-slate-300 hover:bg-orange-400 hover:text-white w-12 h-12 rounded-[50%]  items-center justify-center absolute top-[30%] left-[40%] hidden text-xl">
          <BsFillEyeFill />
        </div>
      </Link>
      <h3 className=" text-sky-900 text-xl font-bold my-3">
        {title.substring(0, 25)} ...{" "}
      </h3>
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">$ {price}</p>
        <button className="btn btn-warning">
          <BsCartPlus className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Product;
