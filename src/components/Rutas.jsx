import { Routes, Route} from "react-router-dom"
import Home from "../assets/page/Home"
import Nosotros from "../assets/page/Nosotros"
import Compras from "../assets/page/Compras"
import Ofertas from "../assets/page/Ofertas"
import NotFound from "../assets/page/NotFound"

function Rutas() {
    return (
        <>
            <Routes>          
                <Route path='/' element={<Home />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path='/compras' element={<Compras />} />
                <Route path='/ofertas' element={<Ofertas />} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </>
    )
}

export default Rutas