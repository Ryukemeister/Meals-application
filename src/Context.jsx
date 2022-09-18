import React, { createContext } from "react";

const AppContext = createContext();

const AppProvider = function ({ children }) {
  const state = {
    name: "Rajiv Sahal",
    age: 22,
    profession: "Frontend developer",
    passion: ["Football", "Music"],
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
