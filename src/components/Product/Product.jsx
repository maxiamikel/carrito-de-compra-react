import { useEffect, useState } from "react";
import "./Product.css";
import { useAppContext } from "../../context/AppContext";

const Product = () => {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useAppContext();

  useEffect(() => {
    fetch("product.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addProductToCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <div className="main-product">
      {products.map((item) => (
        <div className="product-card" key={item.id}>
          <img src={item.image} alt={item.name} className="item-image" />
          <div className="product-details">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <h2>{item.price}</h2>
          </div>
          <button
            type="button"
            onClick={() => {
              addProductToCart(item);
            }}
          >
            Adicionar
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
