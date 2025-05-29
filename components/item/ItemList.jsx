import React from "react";
import Item from "./Item";

const ItemList = ({ products = [] }) => {
  if (!products.length) return <p>No hay productos para mostrar.</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
