import React from "react";
import { useGlobalContext } from "../Context";

/*
    return (
      <div key={meal.idMeal}>
        <h1 className="">
          {meal.strMeal}, {meal.strArea}, {meal.strCategory}
        </h1>
      </div>
    );

*/

function Meals() {
  const { randomMeal } = useGlobalContext();
  // console.log(randomMeal);
  const displayRandomMeal = randomMeal.map((meal) => {
    const {
      idMeal: id,
      strMealThumb: image,
      strMeal: title,
      // strCategory: category,
    } = meal;
    // console.log(meal);
    return (
      <article
        key={id}
        className="border-[1.5px] w-[200px] border-red-500 my-5 rounded-sm shadow-md hover:shadow-xl mx-7"
      >
        <img
          className="w-[200px] h-32 bg-center bg-cover rounded-sm"
          src={image}
          alt="Meal image"
        />
        <footer>
          <h1 className="font-mono font-medium tracking-tight text-left leading-[17px] pl-2 py-3">
            {title}
            {/*<br /> <span className="font-bold text-red-500">{category}</span>*/}
          </h1>
          <button className="bg-green-500 text-white rounded-sm px-2 py-1 font-semibold mx-2 mb-4 drop-shadow-md hover:bg-green-600">
            Click me
          </button>
        </footer>
      </article>
    );
  });

  return (
    <div>
      {/* <h1 className="text-xl text-orange-500 font-mono font-semibold mx-3">
        Meals component
      </h1>*/}
      <h1 className="text-xl text-orange-500 font-mono font-semibold mx-7">
        Random meal
      </h1>
      {displayRandomMeal}
    </div>
  );
}

export default Meals;
