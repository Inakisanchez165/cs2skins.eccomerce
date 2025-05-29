// src/components/item/ItemDetail.jsx
import React, { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const { name, price, image, stock, category } = product;
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const onAdd = (qty) => {
    setAdded(true);
    setQuantity(qty);
    // Aquí puedes agregar lógica para agregar al carrito, por ej. contexto
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <img
        src={image}
        alt={name}
        style={{ width: "100%", borderRadius: 8, marginBottom: 20 }}
      />
      <h2>{name}</h2>
      <p>Categoría: {category}</p>
      <p>Precio: ${price}</p>
      <p>
        Stock disponible:{" "}
        {stock > 0 ? stock : <span style={{ color: "red" }}>Sin stock</span>}
      </p>

      {!added && stock > 0 ? (
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      ) : (
        added && <p>Has agregado {quantity} unidad(es) al carrito.</p>
      )}
    </div>
  );
};

export default ItemDetail;
