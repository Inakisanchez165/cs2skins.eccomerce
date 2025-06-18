// components/cart/Cart.jsx
import React, { useState } from "react";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
import { useCart } from "../../context/CartContext";
import { createOrder } from "../../firebase/ordersService";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    updateQuantity(id, quantity);
  };

  const handleConfirm = async (buyerInfo) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const orderId = await createOrder(buyerInfo, cart, total);
    setOrderId(orderId);
    clearCart();
  };

  return (
    <div style={{ padding: "1rem", backgroundColor: "#FFA500", minHeight: "100vh" }}>
      <h2>Carrito de compras</h2>

      {orderId ? (
        <h3>Gracias por tu compra. ID de orden: {orderId}</h3>
      ) : cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={removeFromCart}
              onQuantityChange={handleQuantityChange}
            />
          ))}
          <CheckoutForm onConfirm={handleConfirm} />
        </>
      )}
    </div>
  );
};

export default Cart;
