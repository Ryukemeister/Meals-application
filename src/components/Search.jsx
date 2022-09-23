import React from "react";
import { useGlobalContext } from "../Context";

function Search() {
  const { allMeals, loading, favouriteMeals, setFavouriteMeals } =
    useGlobalContext();
  // console.log(allMeals);
  // console.log(loading);
  function addFavouriteMeal(e) {
    const currentItem = e.target.parentNode.parentNode.children[0].innerHTML;

    setFavouriteMeals((prevFavouriteMeals) => {
      return [...prevFavouriteMeals, currentItem];
    });
    console.log(favouriteMeals);
  }

  const displayMeals = allMeals.map((meal) => {
    // console.table(meal);
    // console.log(meal.strIngredient1, typeof meal.strIngredient1);

    Object.entries(meal).forEach((item) => {
      /* if (item.startsWith("strIngredient")) {
      }
      */
      //  console.log(item);
      const [key, value] = item;
      const m = meal.strMeal;
      // console.log("Key: ", key, "--", "Value: ", value);

      if (key.startsWith("strMeasure")) {
        const itemsArr = value.split(" ");
        // const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

        itemsArr.forEach((el) => {
          // console.log(item, item[0]);
          const numsArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
          if (numsArr.includes(el[0]) && el[el.length - 1] == "g") {
            console.log(`The amount of calories in ${m} is ${el} `);
          }
        });

        // console.log(itemsArr);
      }

      // key.startsWith("strMeasure") ? console.log(value.split(" ")) : "";
      // console.log(key, value);
    });

    const {
      idMeal: id,
      strMealThumb: image,
      strMeal: title,
      strCategory: category,
    } = meal;
    return (
      <article
        key={id}
        className="border-[1.5px] w-[500px] border-red-500 my-5 rounded-sm shadow-md hover:shadow-2xl"
      >
        <img
          className="w-[500px] h-48 object-center object-cover"
          src={image}
          alt="Meal image"
        />
        <footer className="flex justify-between">
          <h1 className="font-mono font-medium tracking-tight text-left text-xl leading-[25px] pl-2 py-3">
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
      <h1 className="font-semibold font-mono text-xl text-pink-500 mx-7 mt-3">
        Search component
      </h1>
      {loading && (
        <h1 className="font-semibold font-mono text-xl mx-7">Loading...</h1>
      )}
      <section className="all-meals flex flex-wrap gap-8 mx-7">
        {/*displayMeals*/}
      </section>
    </div>
  );
}

export default Search;
