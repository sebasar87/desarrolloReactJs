import { Routes, Route} from "react-router-dom"
import Home from "../assets/page/Home"
import Carrito from "../assets/page/Carrito"
import Nosotros from "../assets/page/Nosotros"
import Compras from "../assets/page/Compras"
import Ofertas from "../assets/page/Ofertas"
import NotFound from "../assets/page/NotFound"
import ItemListContainer from "./ItemListContainer"
import ItemListDetailConteiner from "./ItemListDetailConteiner"

function Rutas({ count, setCount }) {
    return (
        <>
            <Routes>          
                <Route path='/' element={<Home />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path='/compras' element={<Compras />} />
                <Route path='/ofertas' element={<Ofertas />} />
                <Route path='/carrito' element={<Carrito count={count} setCount={setCount} />} />
                <Route path='/item' element={<ItemListContainer count={count} setCount={setCount} />}/>
                <Route path='/item/:id' element={<ItemListDetailConteiner />}/>
                <Route path='/category/:categoryid' element={<ItemListContainer/>}/>
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </>
    )
}

export default Rutas