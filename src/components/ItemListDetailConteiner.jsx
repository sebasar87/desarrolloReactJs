import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Itemlist from "./Itemlist"

function ItemListDetailConteiner() {
    const {id}=useParams();
    console.log("esto es el id" ,id)
    const [datos,setDatos] = useState(null);
    const [producto, setProducto] = useState(null);
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
          const producto = data.find((prod) => prod.id === id);
          setProducto(producto);
        console.log("esto es producto",producto)
        console.log("esto es data",data)
        })
        .catch (error=>{
          console.error("Error:", error);
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