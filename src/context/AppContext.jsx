import { createContext, useContext, useState } from "react";

const Context = createContext();

export const AppContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <Context.Provider value={{ cart, setCart }}>{children}</Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
