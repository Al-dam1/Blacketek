import { useState } from "react";

const ProductoForm = ({ onAgregar }) => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !precio) return;

    const nuevoProducto = {
      id: Date.now(), // podés usar un uuid si querés
      nombre,
      precio: parseFloat(precio),
    };

    onAgregar(nuevoProducto);
    setNombre("");
    setPrecio("");
  };

  return (
 <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mb-6">
  <input
    type="text"
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}
    placeholder="Nombre"
    className="border px-3 py-2 rounded w-[30%] min-w-[100px] flex-1"
  />
  <input
    type="number"
    value={precio}
    onChange={(e) => setPrecio(e.target.value)}
    placeholder="Precio"
    className="border px-3 py-2 rounded w-[30%] min-w-[100px] flex-1"
  />
  <button
    type="submit"
    className="bg-blue-500 text-white px-4 py-2 rounded w-[30%] min-w-[100px] flex-1 hover:bg-blue-600 transition"
  >
    Agregar
  </button>
</form>


  );
};

export default ProductoForm;
