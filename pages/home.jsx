import React from 'react';
import '../hoja-de-estilos/estilos.css';
import Header from '../componentes/header';
import Navbar from '../componentes/navbar';
import Gallery from '../componentes/gallery';
import Footer from '../componentes/footer';
import ProductList from '../componentes/productList';
import Carrito from '../PAGES.jsx/Carrito';
import productsList from '../Utiles/data.json';

const Home = ({ cart, handleAddToCart, handleRemove, handleDecrease }) => {
  const countItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

  const productosMusica = productsList.filter(p => p.categoria === "musica").slice(0, 2);
  const productosTeatro = productsList.filter(p => p.categoria === "teatro").slice(0, 2);
  const productosDeportes = productsList.filter(p => p.categoria === "deportes").slice(0, 2);
  const productosFamilia = productsList.filter(p => p.categoria === "familia").slice(0, 2);
  const productosEspeciales = productsList.filter(p => p.categoria === "especiales").slice(0, 2);

  return (
    <div>
      <Header />
      <Navbar countItem={countItems} />

      <section className="p-4">
        <h2 className="text-2xl font-bold mt-4">🎵 Música</h2>
        <ProductList products={productosMusica} addToCart={handleAddToCart} />

        <h2 className="text-2xl font-bold mt-8">👨‍👩‍👧 Familia</h2>
        <ProductList products={productosFamilia} addToCart={handleAddToCart} />

        <h2 className="text-2xl font-bold mt-8">🎭 Teatro</h2>
        <ProductList products={productosTeatro} addToCart={handleAddToCart} />

        <h2 className="text-2xl font-bold mt-8">⚽ Deportes</h2>
        <ProductList products={productosDeportes} addToCart={handleAddToCart} />

        <h2 className="text-2xl font-bold mt-8">🌟 Especiales</h2>
        <ProductList products={productosEspeciales} addToCart={handleAddToCart} />
      </section>

     
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
