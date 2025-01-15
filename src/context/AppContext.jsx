import { createContext, useContext, useState } from "react";

const Context = createContext();

export const AppContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addProductToCart = ({ image, description, ...product }) => {
    const productExistInCart = cart.find((item) => item.id === product.id);
    if (productExistInCart) {
      setCart(
        cart.map((element) =>
          element.id === product.id
            ? { ...product, quantity: productExistInCart.quantity + 1 }
            : element
        )
      );
    } else {
      setCart([...cart, product]);
      console.log(product);
    }
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
