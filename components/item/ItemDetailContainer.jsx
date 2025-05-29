import React from "react";
import { useParams } from "react-router-dom";
import productosCS2 from "../../data/productosCS2";
import { useCart } from "../../src/context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = productosCS2.find((p) => p.id === id);

  if (!product) return <h2>Producto no encontrado</h2>;

  return (
    <div style={{ maxWidth: "600px", margin: "1rem auto", padding: "1rem" }}>
      <h2>{product.name}</h2>
      <img src={product.img} alt={product.name} style={{ width: "100%" }} />
      <p><b>Categoría:</b> {product.category}</p>
      <p><b>Precio:</b> ${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetailContainer;
