import React from "react";
import { BsSearch } from "react-icons/bs";
import "./mealcard.css";
import { Link } from "react-router-dom";
const MealCard = ({ id, image }) => {
  return (
    <div className="relative  card">
      <img className="w-full card-image" src={image} />
      <Link to={`/detail/${id}`}>
        <div className="card-icon cursor-pointer bg-orange-600 w-12 h-12 rounded-[50%] text-white items-center justify-center absolute top-[40%] left-[40%] hidden text-xl">
          <BsSearch />
        </div>
      </Link>
    </div>
  );
};

export default MealCard;
