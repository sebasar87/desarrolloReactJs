import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Main from "./Main"
import "./itemlist.css"
import Itemlist from "./Itemlist"
//import { CountContext } from "../Context"
import {collection,getDocs,getFirestore} from "firebase/firestore"

function ItemListContainer() {
  const {categoryid}=useParams();
  
  const [datos,setDatos] = useState(null);
  const [producto,setProducto] = useState(null);

  useEffect(()=>{

  const db=getFirestore();
  const itemCollection=collection(db,"productos")
  getDocs(itemCollection).then(snapshot => {
    const productos = snapshot.docs.map(docu => docu.data());
    console.log("estos son productos", productos);
    setProducto(productos);

    if (categoryid) {
      const filteredProductos = productos.filter(prod => prod.categoria === categoryid);
      setDatos(filteredProductos);
    } 
  }).catch(error => {
    console.error("Error obteniendo documentos: ", error);
  });
  
},[categoryid])
if(categoryid!=null){
  return (
    <div>
      <h1>Productos</h1>
      <div class="menu-Productos">
          {<Main />}
          <div class="contenedor-productos">          
            {datos && datos.map(prod=>(<Itemlist key={prod.id}{...prod} />))}
          </div>
      </div>
    </div>
  )
}
  return (
    <div>
      <h1>Productos</h1>
      <div class="menu-Productos">
        {<Main />}
          <div class="contenedor-productos">
          {producto && producto.map(prod=>(<Itemlist key={prod.id}{...prod} />))}
          </div>
      </div>
    </div>
  )
}

export default ItemListContainer