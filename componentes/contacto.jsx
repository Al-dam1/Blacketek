import React from "react";
import "../hoja-de-estilos/Estilos.css";
const Contacto = () => {
  return (
    <form action="https://formspree.io/f/xeogeoop" method="POST"  enctype="multipart/form-data">
      <p>Ingresa tu primer nombre:</p>
      <label>
        <input type="text" name="primer_nombre" placeholder="Ej: Juan" required />
      </label>
      <p>Ingresa tu segundo nombre:</p>
      <label>
        <input type="text" name="segundo_nombre" placeholder="Ej: Demian" required />
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
