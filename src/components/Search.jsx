import React, { useState } from "react";
import { useGlobalContext } from "../Context";

function Search() {
  const { searchQuery, setSearchQuery, fetchMeals, getRandomMeal } =
    useGlobalContext();
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    setInputText(e.target.value);
    // console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(searchQuery);
    // setSearchQuery("");
    // console.log(inputText);
    setInputText("");
    fetchMeals(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
    );
  }

  function getRandomDish(e) {
    // console.log("Working");
    getRandomMeal();
  }

  return (
    <header className="flex justify-center">
      <form className="mt-5 ml-5 mr-3 flex flex-wrap" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={inputText}
          placeholder="Search your dish here..."
          className="border-black border-[1.5px] rounded-full px-4 max-w-[200px] shadow-sm py-1 mx-3 mt-0 outline-none"
        />
        <button
          type="submit"
          className="bg-green-400 text-white mr-3 font-medium px-4 rounded-full shadow-md hover:bg-green-500"
          // onClick={handleClick}
        >
          Search
        </button>
        <button
          type="button"
          onClick={getRandomDish}
          className="bg-yellow-400 text-white font-medium px-4 rounded-full shadow-md hover:bg-yellow-500"
        >
          Surpise me
        </button>
      </form>
    </header>
  );
}

export default Search;
