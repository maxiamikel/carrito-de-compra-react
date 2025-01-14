import { IoIosCart } from "react-icons/io";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="nav-logo">
          <a href="#">Shop.</a>
        </h1>
        <IoIosCart className="nav-cart" />
      </nav>
    </div>
  );
};

export default Navbar;
