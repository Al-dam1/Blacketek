import { useState } from "react";
import Header from "../componentes/Header";
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
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
      <main className="p-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Panel de Administración</h2>

        <ProductoForm onAgregar={handleAgregar} />

        <ul className="mt-6 space-y-4">
          {productos.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b pb-2">
              <span>
                {item.nombre} - ${item.precio}
              </span>
              <button
                onClick={() => {
                  if (
                    window.confirm("¿Seguro que querés eliminar este producto?")
                  ) {
                    handleEliminar(item.id);
                  }
                }}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPanel;
