import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function Compras() {
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    const fetchCompras = async () => {
      try {
        const db = getFirestore();
        const comprasCollection = collection(db, "compras");
        const querySnapshot = await getDocs(comprasCollection);
        const comprasData = querySnapshot.docs.map((doc) => doc.data());
        setCompras(comprasData);
      } catch (error) {
        console.error("Error al obtener las compras:", error);
      }
    };

    fetchCompras();
  }, []);

  return (
    <div>
      <h1>Mis Compras</h1>
      <ul>
        {compras.map((compra, index) => (
          <li key={index}>
            <h3>{compra.nombre}</h3>
            <p>Descripción: {compra.descripcion}</p>
            <p>Categoría: {compra.categoria}</p>
            <p>Precio: {compra.precio}</p>
            <p>Cantidad: {compra.cantidad}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Compras