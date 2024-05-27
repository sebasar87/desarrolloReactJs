import {useEffect ,useState } from "react"
import {collection,getDocs,getFirestore, deleteDoc,query,where} from "firebase/firestore"

function Carrito() {
  const [compra,setCompra] = useState(null);

  useEffect(()=>{

  const db=getFirestore();
  const itemCollection=collection(db,"usuario")
  getDocs(itemCollection).then(snapshot => {
    const compra = snapshot.docs.map(docu => docu.data());
    console.log("estos son compra", compra)
    setCompra(compra);
    }).catch(error => {
        console.error("Error obteniendo documentos: ", error);
    });
},[])

const eliminarProducto = (productoId) => {
    const db = getFirestore();
  
    // Realizar la consulta para encontrar el documento a eliminar
    const itemCollection = collection(db, "usuario");
    const q = query(itemCollection, where("id", "==", productoId));
  
    getDocs(q)
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          // Eliminar el documento encontrado
          deleteDoc(doc.ref)
            .then(() => {
              console.log("Producto eliminado correctamente");
              // Actualizar la lista de productos después de eliminar
              setCompra(compra.filter(producto => producto.id !== productoId));
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

  return (
    <>
        <div>
      <h1>Productos en el carrito:</h1>
      <ul>
        {compra && compra.map((producto, index) => (
          <li key={index}>
            <h3>{producto.nombre}</h3>
            <p>Descripción: {producto.descripcion}</p>
            <p>Categoría: {producto.categoria}</p>
            <p>Precio: {producto.precio}</p>
            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}


export default Carrito;