import { createContext, useContext, useState } from "react";

const Context = createContext();

export const AppContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addProductToCart = ({ image, description, ...product }) => {
    setCart([...cart, product]);
    console.log(product);
  };
  return (
    <Context.Provider
      value={{
        cart,
        setCart,
        addProductToCart,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
