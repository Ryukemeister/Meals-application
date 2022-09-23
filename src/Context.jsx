import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=egg";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = function ({ children }) {
  const [allMeals, setAllMeals] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favouriteMeals, setFavouriteMeals] = useState([]);
  /*
  const state = {
    name: "Rajiv Sahal",
    age: 22,
    profession: "Frontend developer",
    passion: "soccer and music",
  };
  */

  // console.log(allMeals);
  // console.log(randomMeal);

  const getUser = async function () {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const { results, info } = data;
      const [{ gender, name, email, login }] = results;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchMealByName = async function () {
    try {
      const response = await fetch(allMealsUrl);
      const data = await response.json();
      const { meals } = data;
      // console.log(data);
      // console.log(meals);
      setAllMeals(meals);
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomMeal = async function () {
    setLoading(true);
    try {
      const response = await fetch(randomMealUrl);
      const data = await response.json();
      const { meals } = data;
      // console.log(data);
      setRandomMeal(meals);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  /*
  const client = axios.create({
    baseURL: "https://www.themealdb.com/api/json/v1/1/search.php?s=Egg",
  });
  */

  const fetchMeals = async function (url) {
    setLoading(true);
    try {
      const response = await axios(url);
      const { meals } = response.data;
      setAllMeals(meals);
      // console.log(response, meals);
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  useEffect(() => {
    // getUser();
    // getSearchMealByName();
    getRandomMeal();
    fetchMeals(allMealsUrl);
  }, []);

  return (
    <AppContext.Provider
      value={{
        allMeals,
        randomMeal,
        loading,
        favouriteMeals,
        setFavouriteMeals,
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
