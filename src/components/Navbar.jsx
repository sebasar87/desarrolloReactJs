import logo from "../assets/img/logo.png"
import "./navbar.css"
import { BiCartDownload } from "react-icons/bi";
function Navbar() {
    return (
        <nav className="navBar">
            <div className="logo">
                <img src={logo} className="logo-img" alt=''></img>
            </div>
            <div className="nav-div-list">
                <ul className="nav-list">
                    <li className="nav-list-li">
                        <a href='#' target="_blank">Inicio</a>
                    </li>
                    <li className="nav-list-li">
                        <a href='#' target="_blank">Mis compras</a>
                    </li>
                    <li className="nav-list-li">
                        <a href='#' target="_blank">Ofertas</a>
                    </li>
                    <li className="nav-list-li">
                        <a href='#' target="_blank">Nosotros</a>
                    </li>
                </ul>
                <div className="nav-div-carrito">
                    <BiCartDownload className="nav-carrito" size="30px" />
                    <span className="nav-span">0</span>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar

