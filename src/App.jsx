import React from "react";
import Search from "./components/Search";
import Favourites from "./components/Favourites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import "./App.css";

function App() {
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
