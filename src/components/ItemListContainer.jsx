import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Main from "./Main"
import "./itemlist.css"
import Itemlist from "./Itemlist"

function ItemListContainer() {
  const {categoryid}=useParams();
  const [datos,setDatos] = useState(null);
  const [producto,setProducto] = useState(null);
  useEffect(()=>{
  const urlJson = "https://662d82f3a7dda1fa378ac0a6.mockapi.io/api/v1/Articulos"
  fetch(urlJson)
  
  .then(respuesta => {
    if (!respuesta.ok) {
        throw new Error("No hay información");
    }
    return respuesta.json();
})
      .then(data=>{
        setDatos(data);        
        if(categoryid){
          console.log("esto es categoryid", categoryid )
          const productos = data.filter((prod) => prod.categoria === categoryid);
          console.log("esto es producto", productos )
          setProducto(productos);          
        }
        
      })
      .catch (error=>{
        console.error("Error:", error);
        });  
},[categoryid])
if(categoryid!=null){
  return (
    <div>
      <h1>Productos</h1>
      <div class="menu-Productos">
          {<Main />}
          <div class="contenedor-productos">          
            {producto && producto.map(prod=>(<Itemlist key={prod.id}{...prod}/>))}
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
            {datos && datos.map(prod=>(<Itemlist key={prod.id}{...prod}/>))}
          </div>
      </div>
    </div>
  )
}

export default ItemListContainer