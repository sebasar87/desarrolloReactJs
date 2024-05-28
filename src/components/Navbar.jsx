import logo from "../assets/img/logo.png"
import "./navbar.css"
import { BiCartDownload } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar({ count, setCount }) {
    console.log("en el navbar count es ",count)
    return (
        <>
            <nav className="navBar">
                <div className="logo">                    
                    <Link to={"/"}><img src={logo} className="logo-img" alt=''></img></Link>
                </div>
                <div className="nav-div-list">
                    <ul className="nav-list">                        
                        <li className="nav-list-li">
                            <Link to={"/item"}>Productos</Link>
                        </li>
                        <li className="nav-list-li">
                            <Link to={"/compras"}>Mis compras</Link>
                        </li>
                        <li className="nav-list-li">
                            <Link to={"/ofertas"}>Ofertas</Link>
                        </li>
                        <li className="nav-list-li">
                            <Link to={"/nosotros"}>Nosotros</Link>
                        </li>
                    </ul>
                    <div className="nav-div-carrito">
                        <Link to={"/carrito"}>
                            <BiCartDownload className="nav-carrito" size="30px" />
                            <span className="nav-span">{count}</span>
                        </Link>                    
                    </div>
                </div>
                
            </nav>
        </>
    )
}

export default Navbar

