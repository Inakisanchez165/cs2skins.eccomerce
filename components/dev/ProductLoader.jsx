// src/components/dev/ProductLoader.jsx

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


const productosCS2 = [
  {
    nombre: "AK-47 | Redline",
    precio: 15000,
    stock: 10,
    categoria: "rifles",
    descripcion: "Skin clásica con acabado rojo y negro en fibra de carbono.",
    imagen: "https://skinswap.com/images/csgo/ak-47-redline.png"
  },
  {
    nombre: "AWP | Asiimov",
    precio: 32000,
    stock: 5,
    categoria: "snipers",
    descripcion: "AWP futurista con diseño blanco, naranja y negro.",
    imagen: "https://skinswap.com/images/csgo/awp-asiimov.png"
  },
  {
    nombre: "M4A4 | Howl",
    precio: 95000,
    stock: 2,
    categoria: "rifles",
    descripcion: "Una de las skins más exclusivas, con diseño de lobo ardiente.",
    imagen: "https://skinswap.com/images/csgo/m4a4-howl.png"
  },
  {
    nombre: "Glock-18 | Fade",
    precio: 18000,
    stock: 12,
    categoria: "pistolas",
    descripcion: "Glock con degradado metálico entre rosa, púrpura y dorado.",
    imagen: "https://skinswap.com/images/csgo/glock-18-fade.png"
  },
  {
    nombre: "Desert Eagle | Blaze",
    precio: 21000,
    stock: 6,
    categoria: "pistolas",
    descripcion: "Desert Eagle con un diseño icónico en llamas.",
    imagen: "https://skinswap.com/images/csgo/deagle-blaze.png"
  },
  {
    nombre: "Karambit | Doppler",
    precio: 150000,
    stock: 1,
    categoria: "cuchillos",
    descripcion: "Cuchillo Karambit con acabado Doppler Fase 2.",
    imagen: "https://skinswap.com/images/csgo/karambit-doppler.png"
  }
];

const ProductLoader = () => {
  const handleUpload = async () => {
    try {
      for (const prod of productosCS2) {
        await addDoc(collection(db, "productos"), prod);
      }
      alert("✅ Productos de CS2 cargados correctamente en Firestore.");
    } catch (error) {
      console.error("❌ Error al cargar productos:", error);
      alert("Error al cargar productos. Revisá la consola.");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>⚙️ Cargar productos de CS2 en Firestore</h2>
      <button onClick={handleUpload}>Cargar Skins</button>
    </div>
  );
};

export default ProductLoader;
