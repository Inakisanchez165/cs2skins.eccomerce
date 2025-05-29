import React from "react";

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const { id, name, price, quantity } = item;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "0.5rem",
        backgroundColor: "white",
        padding: "0.5rem",
        borderRadius: "4px",
      }}
    >
      <div>
        <strong>{name}</strong>
        <p>Precio: ${price}</p>
      </div>

      <div>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => onQuantityChange(id, parseInt(e.target.value))}
          style={{ width: "50px", marginRight: "0.5rem" }}
        />
        <button onClick={() => onRemove(id)} style={{ cursor: "pointer" }}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
