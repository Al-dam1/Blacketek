import React, { createContext, useState } from "react";
import Header from "../componentes/header";
import Navbar from "../componentes/navbar";
import Footer from "../componentes/footer";
import { evento } from "../pages/data";

const Musica = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item) => {
    setCarrito([...carrito, item]);
    console.log("Carrito actualizado:", carrito);
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Carrito: {carrito.length} producto(s)</h2>
        <div className="grid grid-cols-2 gap-4">
          {evento.map((item) => (
            <div key={item.id} className="border p-4 rounded-xl shadow">
              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-bold mt-2">{item.nombre}</h2>
              <p className="text-gray-600">Precio: ${item.precio}</p>
              <p className="text-gray-500">Entradas Disponibles: {item.stock}</p>
              <button
                onClick={() => agregarAlCarrito(item)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Musica;
