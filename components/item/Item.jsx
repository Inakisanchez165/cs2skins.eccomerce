import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}>
      <Link to={`/item/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={product.img} alt={product.name} style={{ width: "100%" }} />
        <h3>{product.name}</h3>
        <p>Categoria: {product.category}</p>
        <p>Precio: ${product.price}</p>
      </Link>
    </div>
  );
};

export default Item;
