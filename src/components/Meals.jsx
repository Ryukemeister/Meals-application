import React from "react";
import { useGlobalContext } from "../Context";

function Meals() {
  const { allMeals, loading, favouriteMeals, setFavouriteMeals, setShowModal } =
    useGlobalContext();
  // console.log(allMeals.length);
  // console.log(loading);

  function showModalOnScreen(e) {
    /*console.log(
      e.target.parentNode,
      e.target.parentNode.children[0].src,
      e.target.parentNode.children[1].children[0].innerHTML
    );
    */

    const modalMeal = allMeals.filter((meal) => {
      return meal.strMeal ===
        e.target.parentNode.children[1].children[0].innerHTML
        ? meal
        : "";
    });
    console.log(modalMeal[0]);
    setShowModal(true);
  }

  function addFavouriteMeal(e) {
    const currentItem = e.target.parentNode.parentNode.children[0].innerHTML;

    setFavouriteMeals((prevFavouriteMeals) => {
      return [...prevFavouriteMeals, currentItem];
    });
    console.log(favouriteMeals);
  }

  if (loading) {
    return (
      <section>
        <h1 className="font-semibold font-mono justify-center text-xl mx-16 mt-5 mb-3">
          Loading...
        </h1>
      </section>
    );
  }

  if (allMeals.length < 1) {
    return (
      <section>
        <h1 className="font-semibold font-mono text-xl mx-16 mt-6 mb-3 text-green-500">
          Sorry, we couldn't find the specific meal that you were looking for.
          Please try again.
        </h1>
      </section>
    );
  }

  return (
    <section className="flex gap-7 flex-wrap justify-start mx-16 mt-7">
      {allMeals.map((meal) => {
        // console.table(meal);
        // console.log(meal.strIngredient1, typeof meal.strIngredient1);

        /*
Object.entries(meal).forEach((item) => {
// if (item.startsWith("strIngredient")) {}
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
      // console.log(`The amount of calories in ${m} is ${el} `);
    }
  });

  // console.log(itemsArr);
}

// key.startsWith("strMeasure") ? console.log(value.split(" ")) : "";
// console.log(key, value);
});
*/

        const {
          idMeal: id,
          strMealThumb: image,
          strMeal: title,
          strCategory: category,
        } = meal;

        return (
          <article
            key={id}
            onClick={showModalOnScreen}
            className="shadow-lg cursor-pointer w-[350px] my-5 rounded-md hover:shadow-2xl transition-[0.3s ease-in-out all]"
          >
            <img
              className="w-[350px] h-[240px] rounded-t-md object-center object-cover"
              src={image}
              alt="Meal image"
            />
            <footer className="flex justify-between">
              <h1 className="font-mono font-medium tracking-tight text-left text-xl leading-[25px] pl-3 py-3">
                {title}
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
      })}
    </section>
  );

  /*
return (
<section>
  <h1 className="font-mono font-semibold text-xl text-blue-500 mx-7 my-3">
    Search component
  </h1>
  <div>
    {loading && (
      <h1 className="font-semibold font-mono text-xl mx-7 mt-5 mb-3 text-green-500">
        Loading...
      </h1>
    )}
    {displayMeals}
    {allMeals.length < 1 && (
      <h1 className="font-semibold font-mono text-xl mx-7 mt-5 mb-3 text-green-500">
        Sorry, we couldn't find the specific meal that you were looking for.
        Please try again.
      </h1>
    )}
  </div>
</section>
);
*/
}

export default Meals;
