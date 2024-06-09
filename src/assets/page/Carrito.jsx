import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../Context";
import { collection, getDocs, getFirestore, deleteDoc, query, where, addDoc } from "firebase/firestore";

function Carrito() {
  const { cart, count, removeFromCart } = useContext(CartContext);
  const [compra, setCompra] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "usuario");
    getDocs(itemCollection).then(snapshot => {
      const compra = snapshot.docs.map(docu => docu.data());
      console.log("estos son compra", compra);
      setCompra(compra);
    }).catch(error => {
      console.error("Error obteniendo documentos: ", error);
    });
  }, []);

  const eliminarProducto = (productoId) => {
    const db = getFirestore();
    const itemCollection = collection(db, "usuario");
    const q = query(itemCollection, where("id", "==", productoId));

    getDocs(q)
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          deleteDoc(doc.ref)
            .then(() => {
              console.log("Producto eliminado correctamente");
              setCompra(compra.filter(producto => producto.id !== productoId));
              removeFromCart(productoId);
            })
            .catch((error) => {
              console.error("Error al eliminar producto: ", error);
            });
        });
      })
      .catch((error) => {
        console.error("Error al buscar documento: ", error);
      });
  };

  const comprarProductos = async () => {
    try {
      const db = getFirestore();
      const compraCollection = collection(db, "compras");

      // Iterar sobre cada producto en el carrito y agregarlo a la colección de compras
      await cart.forEach(async (producto) => {
        await addDoc(compraCollection, producto);
      });

      // Limpiar el carrito después de realizar la compra
      setCompra([]);
      removeFromCart(null); // Limpiar el carrito
      console.log("Compra realizada correctamente.");
    } catch (error) {
      console.error("Error al realizar la compra:", error);
    }
  };

  return (
    <div>
      <h1>Productos en el carrito:</h1>
      <ul>
        {cart && cart.map((producto, index) => (
          <li key={index}>
            <h3>{producto.nombre}</h3>
            <p>Descripción: {producto.descripcion}</p>
            <p>Categoría: {producto.categoria}</p>
            <p>Precio: {producto.precio}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={comprarProductos}>Comprar Productos</button>
    </div>
  );
}

export default Carrito;