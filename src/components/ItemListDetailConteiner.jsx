import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Itemlist from "./Itemlist"
import { collection,getDocs,getFirestore,query,where } from "firebase/firestore";

function ItemListDetailConteiner() {
    const {id}=useParams();
    const [producto, setProducto] = useState(null);
    useEffect(()=>{
      const db=getFirestore();
      const itemCollection=collection(db,"productos")
      console.log("estos son id", id);
      const dato = query(itemCollection, where("id","==",id));
      console.log("estos son datos", dato);
      getDocs(dato).then(snapshot => {
        const productos = snapshot.docs.map(docu => docu.data());
        console.log("estos son productos", productos);
        if (productos.length > 0) {
          setProducto(productos[0]); 
        } else {
          console.log("Producto no encontrado");
        }
        console.log("esto es producto", producto);
      }).catch(error => {
        console.error("Error obteniendo documentos: ", error);
      });
     
  },[id])

  return (
    <div>
      <h1>Datelles de Producto</h1>
      <Itemlist {...producto} />
    </div>
  )
}
export default ItemListDetailConteiner