import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Itemlist from "./Itemlist"

function ItemListContainer() {
  const [datos,setDatos] = useState(null);
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
        
      })
      .catch (error=>{
        console.error("Error:", error);
        });  
},[])
  return (
    <div>
      <h1>Datelles de Producto</h1>
      {datos && <Itemlist datos={datos}/>}
    </div>
  )
}

export default ItemListContainer