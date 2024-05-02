import Header from "./components/Header"
import { BrowserRouter } from "react-router-dom"
import React from "react"
import Texto from "./components/Texto"
import Rutas from "./components/Rutas"
import Main from "./components/Main"


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Rutas/> 
      <Main/>
      <Texto/>
    </BrowserRouter>
  )
}

export default App