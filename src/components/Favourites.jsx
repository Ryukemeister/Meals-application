import React from "react";
import { useGlobalContext } from "../Context";

function Favourites() {
  const { randomMeal, loading, favouriteMeals, setFavouriteMeals } =
    useGlobalContext();
  // console.log(randomMeal);
  // console.log(favouriteMeals);

  function addFavouriteMeal(e) {
    const currentItem = e.target.parentNode.parentNode.children[0].innerHTML;

    setFavouriteMeals((prevFavouriteMeals) => {
      return [...prevFavouriteMeals, currentItem];
    });
    console.log(favouriteMeals);
  }

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
        className="border-[1.5px] w-[500px] border-red-500 mx-7 my-5 rounded-sm shadow-md hover:shadow-2xl"
      >
        <img
          className="w-[500px] h-48 object-center object-cover"
          src={image}
          alt="Meal image"
        />
        <footer className="flex justify-between">
          <h1 className="font-mono font-medium tracking-tight text-left text-xl leading-[25px] pl-3 py-3">
            {title}
            {/*<br /> <span className="font-bold text-red-500">{category}</span>*/}
          </h1>
          <button
            className="bg-transparent text-black text-2xl px-3 py-1"
            onClick={addFavouriteMeal}
          >
            <svg
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              // stroke-width="2"
              // stroke-linecap="round"
              // stroke-linejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
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
      {loading && (
        <h1 className="mx-7 text-xl font-mono font-semibold">Loading...</h1>
      )}
      {displayRandomMeal}
    </div>
  );
}

export default Favourites;
