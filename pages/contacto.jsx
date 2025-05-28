import React, { useState } from 'react';
import '../hoja-de-estilos/Estilos.css';

const Contacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: '',
    cv: null,
  });

  const manejarCambio = (e) => {
    const { name, value, type, files } = e.target;

    setFormulario({
      ...formulario,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();

    const datos = new FormData();
    datos.append('nombre', formulario.nombre);
    datos.append('apellido', formulario.apellido);
    datos.append('email', formulario.email);
    datos.append('mensaje', formulario.mensaje);
    datos.append('cv', formulario.cv);

    try {
      const respuesta = await fetch('https://formspree.io/f/xeogeoop', {
        method: 'POST',
        body: datos,
      });

      if (respuesta.ok) {
        alert('Formulario enviado correctamente');
        setFormulario({
          nombre: '',
          apellido: '',
          email: '',
          mensaje: '',
          cv: null,
        });
      } else {
        alert('Error al enviar el formulario');
      }
    } catch (error) {
      alert('Error de conexión');
    }
  };

  return ( <div className="form-container">
    <form  className='form' onSubmit={manejarEnvio} encType="multipart/form-data">
      <p>Nombre:</p>
      <input
        type="text"
        name="nombre"
        value={formulario.nombre}
        onChange={manejarCambio}
        required
      />

      <p>Apellido:</p>
      <input
        type="text"
        name="apellido"
        value={formulario.apellido}
        onChange={manejarCambio}
        required 
      />

      <p>Email:</p>
      <input
        type="email"
        name="email"
        value={formulario.email}
        onChange={manejarCambio}
        required
      />

      <p>Mensaje:</p>
      <textarea
        name="mensaje"
        value={formulario.mensaje}
        onChange={manejarCambio}
        required
      />

      <p>Cargar CV:</p>
      <input
        type="file"
        name="cv"
        onChange={manejarCambio}
        accept=".pdf,.doc,.docx"
      />

      <br />
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
};

export default Contacto;
