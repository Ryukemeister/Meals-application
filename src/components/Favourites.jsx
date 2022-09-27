import React from "react";
import { useGlobalContext } from "../Context";

function Favourites() {
  const { favouriteMeals } = useGlobalContext();

  const allFaveMeals = favouriteMeals.map((meal) => {
    const {
      idMeal: id,
      strMealThumb: image,
      strMeal: title,
      strCategory: category,
    } = meal;

    return (
      <section className="my-4 w-40" key={id}>
        <img src={image} className="w-32 h-32 rounded-full" alt="Meal image" />
        <h1 className="align-center">{title}</h1>
      </section>
    );
  });

  return (
    <div className="flex flex-wrap gap-10 px-12 py-5 my-5 bg-yellow-200">
      {allFaveMeals}
    </div>
  );
}

export default Favourites;
