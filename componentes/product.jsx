import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded shadow text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={product.imagen}
        alt={product.nombre}
        className="w-32 h-32 object-cover mx-auto mb-3 transition-transform duration-300 hover:scale-110"
      />
      <h3 className="font-semibold text-lg">{product.nombre}</h3>
      <p className="text-gray-600">${product.precio}</p>
      <p className="text-sm text-gray-500">Stock: {product.stock}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-500 hover:bg-blue-900 text-white px-4 py-1 rounded"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Product;

