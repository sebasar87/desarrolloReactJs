import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
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
      <h1>categoria de Producto</h1>
      {producto && producto.map(prod=>(<Itemlist key={prod.id}{...prod}/>))}
    </div>
  )
}
  return (
    <div>
      <h1>Datelles de Producto</h1>
      {datos && datos.map(prod=>(<Itemlist key={prod.id}{...prod}/>))}
    </div>
  )
}

export default ItemListContainer