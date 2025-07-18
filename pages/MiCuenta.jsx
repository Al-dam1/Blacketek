import React, { useState } from "react";
import Header from "../componentes/Header";
import Navbar from "../componentes/Navbar";


const MiCuenta = () => {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [nombre, setNombre] = useState("Damian");
  const [email, setEmail] = useState("ejemplo@correo.com");

  const guardarCambios = () => {
    setModoEdicion(false);
   
  };

  return (
    <div>
      <Header />
      <Navbar />

      <main className="p-4 sm:p-6 md:p-8 max-w-xl mx-auto bg-white shadow-md rounded">
        <h2 className="text-3xl font-bold mb-6 text-center">Mi Cuenta</h2>

        {modoEdicion ? (
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium">Nombre:</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full px-6 py-4 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px6 py-4 border rounded"
              />
            </div>

            <button
              type="button"
              onClick={guardarCambios}
             className="w-full bg-green-500 text-white text-lg px-6 py-3 rounded hover:bg-green-600 transition"

            >
              Guardar cambios
            </button>
          </form>
        ) : (
          <div className="space-y-5">
            <p><strong>Nombre:</strong> {nombre}</p>
            <p><strong>Email:</strong> {email}</p>
            <button
              onClick={() => setModoEdicion(true)}
             className="w-full bg-green-500 text-white text-lg px-6 py-3 rounded hover:bg-green-600 transition"

            >
              Editar información
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default MiCuenta;
