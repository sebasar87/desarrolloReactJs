import "./main.css"
import { Link } from "react-router-dom";
function Main() {
  return (
    <div class="menuLateral">
      <h3>Filtrado</h3>
      <ul class="main-lista">
        <li class="main-lista-li">
          <Link to={"/category/Refined"}>refined</Link>
        </li>
        <li class="main-lista-li">
          <Link to={"/category/Ergonomic"}>ergonomic</Link>
        </li>
      </ul>
    </div>

  )
}

export default Main