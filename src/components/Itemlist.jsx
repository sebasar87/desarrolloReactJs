import { Link } from "react-router-dom";
import "./itemlist.css"

function Itemlist({ datos,id }) {
  return (
    <div className="contenedor-productos">
      {datos.map((item) => (
        <div key={item.id} className="producto">
          <Link to={`/producto/${id}`} className="link">
            <h2>{item.nombre}</h2>
            <p>{item.descripcion}</p>
            <p>Categoría: {item.categoria}</p>
            <p>Precio: {item.precio}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Itemlist