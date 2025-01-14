import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>Copy right &copy; {new Date().getFullYear()} . All right reserved</p>
        <p>By amikelMaxi</p>
      </div>
    </footer>
  );
};

export default Footer;
