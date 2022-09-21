import React from "react";
import { useGlobalContext } from "../Context";

function Search() {
  const { allMeals } = useGlobalContext();
  // console.log(allMeals);

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
        className="border-[1.5px] w-[200px] border-red-500 my-5 rounded-sm shadow-md hover:shadow-xl"
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
      {/*<h1>Search component number {context.age}</h1>*/}
      <h1>!-------------------!</h1>
      <section className="all-meals flex flex-wrap gap-8 mx-7">
        {displayMeals}
      </section>
    </div>
  );
}

export default Search;
