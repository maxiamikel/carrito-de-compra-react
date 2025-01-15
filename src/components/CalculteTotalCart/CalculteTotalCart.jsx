import { useAppContext } from "../../context/AppContext";
import "./CalculteTotalCart.css";

const CalculteTotalCart = () => {
  const { cart } = useAppContext();

  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return <h4>Total ....................:{total}</h4>;
};

export default CalculteTotalCart;
