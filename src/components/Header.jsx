import Navbar from "./Navbar"
import Myitems from "./Myitems"

function Header() {
    return (
        <>
            <Navbar/>            
            <Myitems greeting={"Hola, bienvenido al mundo del mañana "}/>           
        </>        
    )
}

export default Header