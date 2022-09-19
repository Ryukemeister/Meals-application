import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = function ({ children }) {
  const state = {
    name: "Rajiv Sahal",
    age: 22,
    profession: "Frontend developer",
    passion: "soccer and music",
  };
  const [allMeals, setAllMeals] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);
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
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken"
      );
      const data = await response.json();
      const { meals } = data;
      console.log(data);
      // console.log(meals);
      setAllMeals(meals);
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomMeal = async function () {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      const { meals } = data;
      // console.log(data);
      setRandomMeal(meals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getUser();
    getSearchMealByName();
    getRandomMeal();
  }, []);

  return (
    <AppContext.Provider value={{ state, allMeals, randomMeal }}>
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
