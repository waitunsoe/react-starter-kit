import React, { useEffect, useState } from "react";
import MealCard from "./MealCard";

const Meal = () => {
  const [meals, setMeals] = useState([]);

  const fetchData = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    const { meals } = await api.json();
    setMeals(meals);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" container p-5 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {meals?.map((meal) => (
          <MealCard
            key={meal.idMeal}
            id={meal.idMeal}
            name={meal.strMeal}
            image={meal.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
};

export default Meal;
