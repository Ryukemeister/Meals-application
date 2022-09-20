import React from "react";
import { useGlobalContext } from "../Context";

function Meals() {
  const { randomMeal } = useGlobalContext();
  const displayRandomMeal = randomMeal.map((meal) => {
    // console.table(meal);
    return (
      <div key={meal.idMeal}>
        <h1>
          {meal.strMeal}, {meal.strArea}, {meal.strCategory}
        </h1>
      </div>
    );
  });
  // console.log(randomMeal);

  return (
    <div>
      {/*Meals component*/}
      <h1>|||||||||||||||</h1>
      {displayRandomMeal}
      <h1>|||||||||||||||</h1>
    </div>
  );
}

export default Meals;
