import React, { useEffect, useState } from "react";
import { BsYoutube } from "react-icons/bs";
import { useParams } from "react-router-dom";

const DetailMeal = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  const fetchMeal = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await api.json();
    console.log(meals[0]);
    setMeal(meals[0]);
  };
  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <div className="container p-5 md:p-10">
      <div className="flex flex-wrap md:flex-nowrap justify-center items-start gap-10">
        <img
          src={meal.strMealThumb}
          className="h-[300px] rounded-md object-cover"
        />
        <div className="max-w-xl shadow-md p-4 rounded-md">
          <h2 className=" text-xl font-bold text-orange-600 tracking-wide">
            {meal.strMeal}
          </h2>
          <div className="flex justify-between mt-2 mb-4 text-sm font-semibold text-gray-400">
            <h3>{meal.strCategory}</h3>
            <h3>{meal.strArea}</h3>
          </div>
          <p className=" text-gray-600 tracking-wide leading-8">
            {meal.strInstructions}
          </p>
          <a
            href={meal.strYoutube}
            target="_blank"
            className=" text-red-500 text-3xl mt-4 block"
          >
            <BsYoutube className=" hover:scale-110 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailMeal;
