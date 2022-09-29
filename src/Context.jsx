import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const getFavouritesFromLocalStorage = function () {
  const favourites = localStorage.getItem("favourites");

  return favourites ? JSON.parse(localStorage.getItem("favourites")) : [];
};

const AppProvider = function ({ children }) {
  const [allMeals, setAllMeals] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favouriteMeals, setFavouriteMeals] = useState(
    getFavouritesFromLocalStorage()
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const allMealCategories = [
    "American",
    "British",
    "Canadian",
    "Chinese",
    "Croatian",
    "Dutch",
    "Egyptian",
    "French",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Jamaican",
    "Japanese",
    "Kenyan",
    "Malaysian",
    "Mexican",
    "Moroccan",
    "Polish",
    "Portuguese",
    "Russian",
    "Spanish",
    "Thai",
    "Tunisian",
    "Turkish",
    "Vietnamese",
  ];

  // console.log(favouriteMeals);

  const getMealByArea = function (area) {
    const meals = allMeals.filter((meal) => meal.strArea === area);
    // console.log(meals);
  };

  getMealByArea("Mexican");

  const fetchMeals = async function (url) {
    setLoading(true);
    try {
      const response = await axios(url);
      const { meals } = response.data;
      meals ? setAllMeals(meals) : setAllMeals([]);
      //  setAllMeals(meals);
      // console.log(response, meals);
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  const fetchRandomMeal = function () {
    fetchMeals(randomMealUrl);
  };

  const selectMeal = function (idMeal, favouriteMeal) {
    let meal;
    if (favouriteMeal) {
      meal = favouriteMeals.find((meal) => meal.idMeal === idMeal);
    } else {
      meal = allMeals.find((meal) => meal.idMeal === idMeal);
    }

    setShowModal(true);
    setSelectedMeal(meal);
    // console.log(meal, idMeal);
  };

  const closeModal = function () {
    setShowModal(false);
  };

  const selectFavouriteMeal = function (idMeal) {
    const alreadyFavourite = favouriteMeals.find(
      (meal) => meal.idMeal === idMeal
    );
    if (alreadyFavourite) return;

    const meal = allMeals.find((meal) => meal.idMeal === idMeal);
    const updatedFavourites = [...favouriteMeals, meal];

    setFavouriteMeals(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  const deleteFavouriteMeal = function (idMeal) {
    const updatedFavourites = favouriteMeals.filter(
      (meal) => meal.idMeal !== idMeal
    );

    setFavouriteMeals(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  // console.log(JSON.parse(localStorage.getItem("favouriteMeals")));

  // This useEffect only renders one time i.e. when the application loads
  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);

  // This useEffect is for all other renders i.e. based on the change in value of our searchTerm
  // If we would not have done this, we would be invoking two different api calls after every search
  useEffect(() => {
    if (!searchTerm) return;
    fetchMeals(`${allMealsUrl}${searchTerm}`);
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        allMeals,
        randomMeal,
        loading,
        favouriteMeals,
        setFavouriteMeals,
        setSearchTerm,
        fetchRandomMeal,
        selectMeal,
        selectedMeal,
        showModal,
        closeModal,
        selectFavouriteMeal,
        deleteFavouriteMeal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Creating a custom hook for using our AppContext
// This saves us a few lines of code which is suitable if we have a lot of components
const useGlobalContext = function () {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
