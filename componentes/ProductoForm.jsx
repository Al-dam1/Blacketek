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
<form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mb-6" >
  <input
    type="text"
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}
    placeholder="Nombre"
    className="border px-4 py-2 rounded w-full h-[48px]" // <- altura uniforme
  />
  <input
    type="number"
    value={precio}
    onChange={(e) => setPrecio(e.target.value)}
    placeholder="Precio"
    className="border px-4 py-2 rounded w-full h-[48px]" // <- altura uniforme
  />
  <button
    type="submit"
    className="bg-blue-500 text-white px-4 py-2 rounded w-full h-[48px] hover:bg-blue-600 transition"
  >
    Agregar
  </button>
</form>



  );
};

export default ProductoForm;
