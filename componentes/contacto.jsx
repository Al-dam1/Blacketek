import React from "react";
import "../hoja-de-estilos/Estilos.css";
const Contacto = () => {
  return (
    <form action="https://formspree.io/f/xeogeoop" method="POST"  enctype="multipart/form-data">
      <p>Ingresa tu  nombre:</p>
      <label>
        <input type="text" name="tu_nombre" placeholder="Ej: Juan" required />
      </label>
      <p>Ingresa tu apellido:</p>
      <label>
        <input type="text" name="tu_apellido" placeholder="Ej: Ybarra" required />
      </label>
      <p>Ingresa tu email:</p>
      <label>
        <input type="email" name="email"  placeholder="Ej: contacto@Blacketek"required />
      </label>
      <p>Carga tu cv:</p>
      <label>
         <input type="file" name="cv" /* required/ */ />
      </label>
      <p>Tu mensaje:</p>
      <label>
       <textarea name="mensaje" id="mensaje" required></textarea>
      </label>
      <br />
      <button type="submit">Enviar formulario</button>
    </form>
  );
};

export default Contacto;
