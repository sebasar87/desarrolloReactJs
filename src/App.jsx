import Header from "./components/Header"
import { BrowserRouter } from "react-router-dom"
import React from "react"
import Texto from "./components/Texto"
import Rutas from "./components/Rutas"
import { useState, useEffect } from "react";




function App() {
  const [count,setCount] = useState(0)
  return (
    <BrowserRouter>
      <Header count={count} setCount={setCount}/>
      <Rutas count={count} setCount={setCount}/>
      <Texto/>
    </BrowserRouter>
  )
}

export default App