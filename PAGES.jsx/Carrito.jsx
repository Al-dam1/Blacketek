import React from "react";
import { Link } from "react-router-dom";

const Carrito = ({ cartItems = [], onRemove, onDecrease, onIncrease }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <div className="carrito p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🛒 Carrito de compras</h2>

      {cartItems.length === 0 ? (
        <>
          <p className="mb-4">El carrito está vacío</p>
          <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
            ⬅️ Volver a la tienda
          </Link>
        </>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-4 border-b pb-2">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-semibold">{item.nombre}</p>
                  <p>
                    ${item.precio} x {item.cantidad} = $
                    {(item.precio * item.cantidad).toFixed(2)}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => onDecrease(item.id)}
                    className="bg-yellow-400 px-2 rounded mb-2"
                    title="Quitar uno">
                    ➖
                  </button>
                  <button
                    onClick={() => onIncrease(item.id)}
                    className="bg-green-500 text-white px-2 rounded mb-2"
                    title="Agregar uno más">
                    ➕
                  </button>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="bg-red-500 text-white px-2 rounded mb-2"
                    title="Eliminar del carrito">
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-lg font-bold">Total: ${total.toFixed(2)}</p>

          <Link
            to="/"
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
            ⬅️ Seguir comprando
          </Link>
        </>
      )}
    </div>
  );
};

export default Carrito;
