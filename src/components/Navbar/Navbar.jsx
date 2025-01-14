import { IoIosCart } from "react-icons/io";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="nav-logo">
          <Link to="/">Shop.</Link>
        </h1>
        <Link to="/cart">
          <IoIosCart className="nav-cart" />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
