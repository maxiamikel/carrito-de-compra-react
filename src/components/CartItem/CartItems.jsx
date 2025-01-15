import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useAppContext } from "../../context/AppContext";
import "./CartItems.css";
import CalculteTotalCart from "../CalculteTotalCart/CalculteTotalCart";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CartItems = () => {
  const { cart, setCart, addProductToCart } = useAppContext();
  const navigate = useNavigate();

  const descrementProductQuantityToCart = (product) => {
    const productToDescrement = cart.find((item) => item.id === product.id);
    productToDescrement.quantity > 1 &&
      setCart(
        cart.map((element) =>
          element.id === product.id
            ? { ...product, quantity: productToDescrement.quantity - 1 }
            : element
        )
      );
  };

  const removeProductFromCart = (id) => {
    const productToRemove = cart.find((item) => item.id === id);
    const newCart = cart.filter((element) => element !== productToRemove);
    setCart(newCart);
  };

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart]);

  return (
    <div className="cart-container">
      <p className="cart-info">La mejor experiencia y economia en su compra</p>

      {cart.map((item, index) => (
        <div key={index} className="cart-item-container">
          <div className="cart-item">
            <div className="cart-item-name">
              <p>{index + 1}-</p>
              <p>{item.name}</p>
            </div>
            <div className="cart-item-value">
              <p>price: {item.price}</p>
              <p>*</p>
              <p>QTD: {item.quantity}</p>
            </div>
            <p>Sub. Total: {item.price * item.quantity}</p>
          </div>
          <div className="card-controls">
            <button type="bytton" onClick={() => addProductToCart(item)}>
              <FaPlus />
            </button>
            <button
              type="bytton"
              onClick={() => descrementProductQuantityToCart(item)}
            >
              <FaMinus />
            </button>
            <button
              type="bytton"
              onClick={() => removeProductFromCart(item.id)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
      <CalculteTotalCart />
    </div>
  );
};

export default CartItems;
