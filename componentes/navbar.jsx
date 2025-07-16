import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../hoja-de-estilos/estilos.css";

const Navbar = ({ countItem, animar }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/Musica">Musica</Link></li>
        <li><Link to="/Familia">Familia</Link></li>
        <li><Link to="/Teatro">Teatro</Link></li>
        <li><Link to="/Deportes">Deportes</Link></li>
        <li><Link to="/Especiales">Especiales</Link></li>
        <li><Link to="/Contacto">Contactanos</Link></li>
        <li className="carrito-container">
          <Link to="/Carrito" className={animar ? "carrito-animado" : ""}>
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
            {countItem > 0 && <span className="contador">{countItem}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
