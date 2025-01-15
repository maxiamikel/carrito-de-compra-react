import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useAppContext } from "../../context/AppContext";
import "./CartItems.css";
import CalculteTotalCart from "../CalculteTotalCart/CalculteTotalCart";

const CartItems = () => {
  const { cart, addProductToCart } = useAppContext();

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
            <button type="bytton" onClick={() => {}}>
              <FaMinus />
            </button>
            <button type="bytton" onClick={() => {}}>
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
