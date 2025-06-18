// components/item/ItemListContainer.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const productsRef = collection(db, "products");
    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
      .then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(items);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Productos"}</h2>
      {loading ? <p>Cargando productos...</p> : <ItemList products={products} />}
    </>
  );
};

export default ItemListContainer;
