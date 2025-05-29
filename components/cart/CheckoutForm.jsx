import React, { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [buyerInfo, setBuyerInfo] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setBuyerInfo({
      ...buyerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!buyerInfo.name || !buyerInfo.email || !buyerInfo.address) {
      alert("Por favor completa todos los campos");
      return;
    }
    onConfirm(buyerInfo);
  };

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
