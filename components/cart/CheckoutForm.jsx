import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { createOrder } from "../firebase/ordersService.js";

const CheckoutForm = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [buyerInfo, setBuyerInfo] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setBuyerInfo({
      ...buyerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!buyerInfo.name || !buyerInfo.email || !buyerInfo.address) {
      alert("Por favor completa todos los campos");
      return;
    }

    setLoading(true);
    setError(null);

    const orderData = {
      buyer: buyerInfo,
      items: cart.items,
      total: cart.total,
    };

    try {
      const id = await createOrder(orderData);
      setOrderId(id);
      clearCart();
    } catch (err) {
      setError("Error al crear la orden, intenta más tarde");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Procesando compra...</p>;

  if (orderId)
    return (
      <div>
        <h2>Compra exitosa</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <h3>Formulario de compra</h3>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={buyerInfo.name}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "0.5rem", width: "100%" }}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={buyerInfo.email}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "0.5rem", width: "100%" }}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Dirección"
        value={buyerInfo.address}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "0.5rem", width: "100%" }}
        required
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button
        type="submit"
        style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
      >
        Confirmar compra
      </button>
    </form>
  );
};

export default CheckoutForm;
