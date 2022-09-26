import React from "react";
import Search from "./components/Search";
import Favourites from "./components/Favourites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import { useGlobalContext } from "./Context";
import "./App.css";

function App() {
  const { showModal } = useGlobalContext();

  return (
    <div className="App">
      <Search />
      <Meals />
      {/* <Favourites />*/}
      {showModal && <Modal />}
    </div>
  );
}

export default App;
