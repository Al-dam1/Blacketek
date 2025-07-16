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
      {product.stock === 0 ? (
        <p className="text-red-500">Sin stock</p>
      ) : (
        <p className="text-sm text-gray-500">Stock: {product.stock}</p>
      )}
      <button
        onClick={() => addToCart(product)}
        disabled={product.stock === 0}
        className={`mt-2 px-4 py-1 rounded text-white 
          ${product.stock === 0 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-blue-500 hover:bg-blue-900"}
        `}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Product;
