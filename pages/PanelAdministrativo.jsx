import { useState } from "react";
import Header from "../componentes/Header";
import Navbar from "../componentes/Navbar";
import ProductoForm from "../componentes/ProductoForm";

const AdminPanel = ({ productos, setProductos }) => {
  const handleAgregar = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };

  const handleEliminar = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  return (
    <div>
      <Header />
      <Navbar />
     <main className="p-6 max-w-4xl mx-auto bg-black text-white rounded-lg shadow-md">
  <h2 className="text-4xl font-bold mb-6 text-center">Panel de Administración</h2>

  <ProductoForm onAgregar={handleAgregar} />

  <ul className="mt-6 space-y-4">
    {productos.map((item) => (
      <li
        key={item.id}
        className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 border-b border-white pb-4 pt-2"
      >
        <span className="text-base sm:col-span-2">
          {item.nombre} – ${item.precio.toFixed(2)}
        </span>
        <button
          onClick={() => {
            if (
              window.confirm("¿Seguro que querés eliminar este producto?")
            ) {
              handleEliminar(item.id);
            }
          }}
          className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600 transition"
        >
          Eliminar
        </button>
      </li>
    ))}
  </ul>
</main>

      </div>
  );
};

export default AdminPanel;
