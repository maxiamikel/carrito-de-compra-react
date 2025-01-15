import { useNavigate } from "react-router-dom";
import CartItems from "../../components/CartItem/CartItems";
import Navbar from "../../components/Navbar/Navbar";
import "./Cart.css";
import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useAppContext();

  useEffect(() => {
    if (cart.length === 0) {
      return navigate("/");
    }
  }, []);
  return (
    <>
      <Navbar />
      <CartItems />
    </>
  );
};

export default Cart;
