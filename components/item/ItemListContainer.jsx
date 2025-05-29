import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import productosCS2 from "../../data/productosCS2";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const filteredProducts = categoryId
    ? productosCS2.filter((p) => p.category === categoryId)
    : productosCS2;

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Todos los skins"}</h2>
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;
