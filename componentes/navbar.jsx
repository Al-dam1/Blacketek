import React from 'react'
import { FaCheck, FaTimes } from "react-icons/fa";
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
           
            <FaTimes  color="grey" size="2.5em" />
        </ul>
    </nav>
  )
}

export default Navbar
