import React, { useState } from "react";
import { useGlobalContext } from "../Context";

function Search() {
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();
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
    if (inputText) {
      setSearchTerm(inputText);
      setInputText("");
    }
  }

  function getRandomDish(e) {
    // console.log("Working");
    //  getRandomMeal();
    setSearchTerm("");
    setInputText("");
    fetchRandomMeal();
  }

  /*
  Some weird names for the meal app
  swiggy, zomato, zwiggy, ziggy, swomato
  */

  return (
    <header className="flex justify-between w-[100%] shadow-md fixed top-0 left-0 bg-white">
      <div className="my-5 ml-16 mr-3">
        <h1 className="font-bold text-2xl">Zwiggy</h1>
      </div>
      <div className="">
        <form
          className="my-5 ml-12 mr-20 flex flex-wrap"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            onChange={handleChange}
            value={inputText}
            placeholder="Search your dish here..."
            className="border-black border-[1.5px] rounded-full px-4 w-[350px] max-w-[350px] shadow-sm py-1 mx-3 mt-0 outline-none"
          />
          <button
            type="submit"
            className="bg-green-400 text-white mr-3 font-medium px-4 rounded-full shadow-md hover:bg-green-500 transition-[0.3s ease-in-out all]"
            // onClick={handleClick}
          >
            Search
          </button>
          <button
            type="button"
            onClick={getRandomDish}
            className="bg-yellow-400 text-white font-medium px-4 rounded-full shadow-md hover:bg-yellow-500 transition-[0.3s ease-in-out all] mr-3"
          >
            Surpise me
          </button>
        </form>
      </div>
    </header>
  );
}

export default Search;
