import { Link } from "react-router-dom";
import "./itemlist.css"

function Itemlist({ nombre,descripcion,categoria,precio,id }) {
  return (
        <div className="producto">
          <Link to={`/item/${id}`} className="link">
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <p>Categoría: {categoria}</p>
            <p>Precio: {precio}</p>
          </Link>
        </div>
  );
}

export default Itemlist