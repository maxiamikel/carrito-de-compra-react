import "./ProductItem.css";

const ProductItem = ({ product }) => {
  const { id, name, description, image, price } = product;
  return (
    <div className="product-card">
      <img src={image} alt={name} className="item-image" />
      <div className="product-details">
        <h1>{name}</h1>
        <p>{description}</p>
        <h2>{price}</h2>
      </div>
      <button type="button">Adicionar</button>
    </div>
  );
};

export default ProductItem;
