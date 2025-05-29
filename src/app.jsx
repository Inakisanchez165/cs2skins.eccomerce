import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/layout/Header.jsx";  // Nuevo Header que contiene Logo y NavBar
import ItemListContainer from "../components/item/ItemListContainer.jsx";
import ItemDetailContainer from "../components/item/ItemDetailContainer.jsx";
import Cart from "../components/cart/Cart.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
    </>
  );
};

export default App;
