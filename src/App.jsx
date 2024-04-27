import Header from "./components/Header"
import { BrowserRouter } from "react-router-dom"
import React from "react"
import Texto from "./components/Texto"
import Rutas from "./components/Rutas"
import ItemListContainer from "./components/ItemListContainer"


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Rutas/>  
      <Texto/>
    </BrowserRouter>
  )
}

export default App