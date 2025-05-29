import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/layout/NavBar.jsx";
import ItemListContainer from "../components/item/ItemListContainer.jsx";
import ItemDetailContainer from "../components/item/ItemDetailContainer.jsx";
import Cart from "../components/cart/Cart.jsx";

const App = () => {
  return (
    <>
      <NavBar />
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
