import React from "react";
import { useGlobalContext } from "../Context";

function Search() {
  const { searchQuery, setSearchQuery } = useGlobalContext();

  function getSearchItem(e) {
    setSearchQuery(e.target.value);
    // console.log(e.target.value);
  }

  // console.log(searchQuery);

  function getItem(e) {
    e.preventDefault();
    console.log(searchQuery);
    setSearchQuery("");
  }

  return (
    <section>
      <form className=" mt-5 mx-5 flex">
        <input
          type="text"
          onChange={getSearchItem}
          value={searchQuery}
          placeholder="Search your dish here..."
          className="border-black border-[1.5px] rounded-full px-4 w-[250px] py-1 mx-1 mt-0 outline-none"
        />
        <button
          className="bg-green-400 text-white font-medium px-4 rounded-full shadow-md hover:bg-green-500"
          onClick={getItem}
        >
          Search
        </button>
      </form>
    </section>
  );
}

export default Search;
