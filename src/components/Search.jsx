import React from "react";
import { useGlobalContext } from "../Context";

function Search() {
  const { state, allMeals } = useGlobalContext();
  // console.log(allMeals);

  const displayMeals = allMeals.map((meal) => {
    // console.table(meal);
    return (
      <div key={meal.idMeal} className="border-2 border-red-500 w-40 mx-5 my-5">
        <img className="w-40 h-32" src={meal.strMealThumb} alt="Meal image" />
        <h1 className="font-serif text-left leading-[17px] pl-2 py-3">
          — {meal.strMeal},{" "}
          <span className="font-bold text-red-500">{meal.strCategory}</span>
        </h1>
      </div>
    );
  });

  return (
    <div>
      {/*<h1>Search component number {context.age}</h1>*/}
      <h1>!-------------------!</h1>
      <div className="all-meals flex flex-wrap">{displayMeals}</div>
    </div>
  );
}

export default Search;
