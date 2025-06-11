
import React, { createContext, useContext } from 'react';


const Carrito = () => {
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);

  return (
    <div>
      <h1>Tu Carrito</h1>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        carrito.map((producto, index) => (
          <div key={index}>
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button onClick={() => eliminarDelCarrito(producto.id)}>
              Eliminar
            </button>
          </div>
        
        ))
      )}
    </div>
  );
};

export default Carrito;
