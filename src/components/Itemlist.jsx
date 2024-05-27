import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "./itemlist.css"

function Itemlist({ nombre, descripcion, categoria, precio, id }) {
  const [error, setError] = useState(null);
  const [count,setCount] = useState(0)

  const agregarAlCarrito = (item) => {
    const producto = {
      nombre: item.nombre,
      descripcion: item.descripcion,
      categoria: item.categoria,
      precio: item.precio,
      id: item.id
    };

    const db = getFirestore();
    // Actualizar el carrito del usuario en Firestore
    const compraCollection = collection(db,"usuario");
    // Agregar un nuevo documento a la colección "usuario" con los datos del producto
    addDoc(compraCollection, producto)
      .then(() => {
        console.log("Producto agregado al carrito correctamente");
        setCount(count + 1);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error al agregar producto al carrito:", error);
      });
  };

  return (
        <div className="producto">
          <Link to={`/item/${id}`} className="link">
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <p>Categoría: {categoria}</p>
            <p>Precio: {precio}</p>
          </Link>
          <button onClick={() => agregarAlCarrito({ id, nombre, descripcion, categoria, precio })}>Comprar</button>
        </div>
  );
}

export default Itemlist