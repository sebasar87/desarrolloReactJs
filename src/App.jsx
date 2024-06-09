import Header from "./components/Header"
import { BrowserRouter } from "react-router-dom"
import React from "react"
import Texto from "./components/Texto"
import Rutas from "./components/Rutas"
import { CartProvider } from "./Context"




function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Rutas/>
        <Texto/>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App