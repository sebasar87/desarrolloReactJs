import "./main.css"
import { Link } from "react-router-dom";
function Main() {
  return (
    <div class="menuLateral">
      <h3>Filtrado</h3>
      <ul class="main-lista">
        <li class="main-lista-li">
          <Link to={"/category/Analgésicos"}>Analgésicos</Link>
        </li>
        <li class="main-lista-li">
          <Link to={"/category/Antiulcerosos"}>Antiulcerosos</Link>
        </li>
        <li class="main-lista-li">
          <Link to={"/category/Antihistamínicos"}>Antihistamínicos</Link>
        </li>
        <li class="main-lista-li">
          <Link to={"/category/Antiinflamatorios"}>Antiinflamatorios</Link>
        </li>
        <li class="main-lista-li">
          <Link to={"/category/Antibióticos"}>Antibióticos</Link>
        </li>
      </ul>
    </div>

  )
}

export default Main