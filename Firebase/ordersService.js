// src/firebase/ordersService.js
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebase";

export const createOrder = async (buyer, items, total) => {
  const order = {
    buyer,
    items,
    total,
    date: Timestamp.fromDate(new Date()),
  };

  const docRef = await addDoc(collection(db, "orders"), order);
  return docRef.id;
};
