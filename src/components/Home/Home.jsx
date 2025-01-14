import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Product />
      <Footer />
    </>
  );
};

export default Home;
