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
    <header className="flex flex-col py-3 lg:py-0 lg:flex-row justify-between w-[100%] shadow-md lg:fixed lg:top-0 lg:left-0 bg-white">
      <div className="ml-4 pb-1 lg:py-5 lg:ml-16 lg:mr-3">
        <h1 className="font-bold text-xl lg:text-2xl">Zwiggy</h1>
      </div>
      <div className="flex">
        <form
          className="flex lg:flex-row flex-wrap lg:my-5 lg:ml-12 lg:mr-20"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            onChange={handleChange}
            value={inputText}
            placeholder="Search your dish here..."
            className="border-black w-[180px] ml-4 mr-2 lg:ml-0 border-[1.5px] rounded-full lg:px-4 lg:w-[350px] max-w-[350px] shadow-sm py-[1px] pl-[13px] pr-[2px] lg:mx-3 lg:mt-0 lg:py-1 outline-none"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-400 text-sm lg:text-base text-white mr-2 lg:mr-3 font-medium px-2 py-[1.5px] lg:px-4 rounded-full shadow-md hover:bg-green-500 transition-[0.3s ease-in-out all]"
            >
              Search
            </button>
            <button
              type="button"
              onClick={getRandomDish}
              className="bg-yellow-400 text-sm lg:text-base text-white font-medium px-2 lg:px-4 rounded-full shadow-md hover:bg-yellow-500 transition-[0.3s ease-in-out all] lg:mr-3"
            >
              Surpise me
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Search;
