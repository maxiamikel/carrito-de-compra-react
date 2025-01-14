import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div>Conteudo</div>
      <Footer />
    </>
  );
};

export default Home;
