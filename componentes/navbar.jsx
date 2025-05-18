import React from 'react'
import { FaCheck, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><a href="">Musica </a></li>
            <li><a href="">Familia</a></li>
            <li><a href="">Teatro</a></li>
            <li><a href="">Deportes</a></li>
            <li><a href="">Especiales</a></li>
            <li><a href="./componentes/contacto">Contactanos</a></li>
          <FontAwesomeIcon className='carrito-container' icon={faCartShopping} size="lg"  />

        </ul>
    </nav>
  )
}

export default Navbar
