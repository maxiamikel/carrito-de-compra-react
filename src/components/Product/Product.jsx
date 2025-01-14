import { useEffect, useState } from "react";
import ProductItem from "./ProductItem/ProductItem";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="main-product">
      {products.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Product;
