import React, { createContext, useState } from "react";
export const StateContext = createContext();
export const StateProvider = ({ children }) => {
  const [state, setState] = useState({
    movies: [],
    text: "",
    isSearching: false,
    searchTitle: ""
  });
  return (
    <StateContext.Provider value={[state, setState]}>
      {children}
    </StateContext.Provider>
  );
};
