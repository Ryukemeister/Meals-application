import React, { useEffect, useContext } from "react";
import Search from "./components/Search";
import Favourites from "./components/Favourites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  /*
  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch(
        "www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await data.json();
      console.log(data);
    };

    fetchData();
  }, []);
*/

  return (
    <div className="App">
      <Search />
      <Favourites />
      <Meals />
      <Modal />
    </div>
  );
}

export default App;
