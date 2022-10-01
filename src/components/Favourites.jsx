import React from "react";
import { useGlobalContext } from "../Context";

function Favourites() {
  const { favouriteMeals, deleteFavouriteMeal, selectMeal } =
    useGlobalContext();

  const allFaveMeals = favouriteMeals.map((meal) => {
    const {
      idMeal: id,
      strMealThumb: image,
      strMeal: title,
      strCategory: category,
    } = meal;

    return (
      <div className="flex flex-col items-center w-24" key={id}>
        <img
          src={image}
          className="h-16 lg:h-24 rounded-full cursor-pointer mb-1 border-2 border-red-500"
          onClick={() => selectMeal(id, true)}
          alt="Meal image"
        />
        <button
          onClick={() => deleteFavouriteMeal(id)}
          className="text-white hover:text-red-300 transition-[0.3s ease-in-out all]"
        >
          Remove
        </button>
      </div>
    );
  });

  return (
    <section className="flex flex-col flex-wrap py-3 lg:py-8 bg-black">
      <h1 className="font-semibold px-6 sm:px-8 lg:pt-14 lg:px-16 text-xl lg:text-3xl mb-3 text-white">
        Favourites
      </h1>
      <div className="flex flex-wrap px-3 gap-x-2 sm:px-4 lg:px-16 sm:gap-x-3 lg:gap-x-10 lg:gap-y-5 mb-2">
        {allFaveMeals}
      </div>
    </section>
  );
}

export default Favourites;
