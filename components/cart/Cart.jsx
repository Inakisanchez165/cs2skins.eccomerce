import React from "react";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
import { useCart } from "../../src/context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    updateQuantity(id, quantity);
  };

  const handleConfirm = (buyerInfo) => {
    console.log("Compra confirmada con datos:", buyerInfo);
    console.log("Items:", cart);
    alert("¡Gracias por tu compra!");
    clearCart();
  };

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "#FFA500",
        color: "black",
        minHeight: "100vh"
      }}
    >
      <h2>Carrito de compras</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={removeFromCart}
            onQuantityChange={handleQuantityChange}
          />
        ))
      )}

      {cart.length > 0 && <CheckoutForm onConfirm={handleConfirm} />}
    </div>
  );
};

export default Cart;
