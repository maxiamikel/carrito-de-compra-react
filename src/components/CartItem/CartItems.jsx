import { useAppContext } from "../../context/AppContext";
import "./CartItems.css";

const CartItems = () => {
  const { cart } = useAppContext();
  return cart.map((item) => {
    return (
      <div key={item.id} className="cart-item-container">
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    );
  });
};

export default CartItems;
