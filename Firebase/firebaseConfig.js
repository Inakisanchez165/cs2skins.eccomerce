// Importamos solo lo necesario
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAnzcDDnHDcAN5Ln1n2_0DlwWw8epsqLlY",
  authDomain: "reactjs-inaki-ecommerce.firebaseapp.com",
  projectId: "reactjs-inaki-ecommerce",
  storageBucket: "reactjs-inaki-ecommerce.firebasestorage.app",
  messagingSenderId: "575218928942",
  appId: "1:575218928942:web:1b82a48dd5f2d1a2747ebf",
  measurementId: "G-NS5PX2S9CY"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar instancia de Firestore
export const db = getFirestore(app);
