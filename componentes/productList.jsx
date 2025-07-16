import React from 'react';
import Product from '../componentes/product';

const ProductList = ({ products, addToCart }) => {
  if (products.length === 0) return <p className="text-center">No hay productos en esta categoría.</p>;

  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
