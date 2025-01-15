import { IoIosCart } from "react-icons/io";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const Navbar = () => {
  const { cart } = useAppContext();

  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="nav-logo">
          <Link to="/">Shop.</Link>
        </h1>
        <div className="cart-info">
          <Link to={`${cart.length > 0 ? "/cart" : "/"}`}>
            <IoIosCart className="nav-cart" />
          </Link>
          <p>{cart.length}</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
