import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import MealCard from "./MealCard";
const Search = () => {
  const { name } = useParams();
  const [searchMeals, setSearchMeals] = useState([]);

  const fetchSearchMeals = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const { meals } = await api.json();
    setSearchMeals(meals);
  };

  useEffect(() => {
    fetchSearchMeals();
  }, []);

  return (
    <div className=" container p-5 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {searchMeals?.map((searchMeal) => (
          <MealCard
            key={searchMeal.idMeal}
            id={searchMeal.idMeal}
            image={searchMeal.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
