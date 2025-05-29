import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "../components/item/ItemList";
import Loader from "../components/common/Loader";

const Category = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const q = query(
          collection(db, "productosCS2"),
          where("category", "==", categoryId)
        );
        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(items);
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [categoryId]);

  if (loading) return <Loader />;

  if (products.length === 0)
    return <h3>No hay skins en la categoría "{categoryId}"</h3>;

  return (
    <div>
      <h2>Skins de {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default Category;
