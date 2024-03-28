
import logo from "../assets/img/logo.png"
import "./navbar.css"
function Navbar() {
    return (
        <nav>
            <div>
                <img src={logo} className="logo" alt=''></img>
            </div>
            <ul>
                <li>
                    <a href='#'>Inicio</a>
                </li>
                <li>
                    <a href='#'>Mis compras</a>
                </li>
                <li>
                    <a href='#'>Ofertas</a>
                </li>
                <li>
                    <a href='#'>Nosotros</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

