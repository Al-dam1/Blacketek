import React from 'react';
import '../hoja-de-estilos/estilos.css';
import Header from '../componentes/header';
import Navbar from '../componentes/navbar';
import Gallery from '../componentes/gallery';
import Footer from '../componentes/footer';
import ProductList from '../componentes/productList';
import Carrito from '../componentes/Carrito';
import  productsList from '../src/utiles/data.json';

const Home = ({ cart, handleAddToCart }) => {
  const countItems = cart?.length || 0;
  const productosMusica = productsList.filter(p => p.categoria === "musica").slice(0, 2);
const productosTeatro = productsList.filter(p => p.categoria === "teatro").slice(0, 2);
const productosDeportes = productsList.filter(p => p.categoria === "deportes").slice(0, 2);
const productosFamilia = productsList.filter(p => p.categoria === "familia").slice(0, 2);
const productosEspeciales = productsList.filter(p => p.categoria === "especiales").slice(0, 2);


  return (
    <div>
     <div>
  <Header />
  <Navbar countItems={countItems} />

  <h2>Música</h2>
  <ProductList products={productosMusica} addToCart={handleAddToCart} />
  
  <h2>Familia</h2>
  <ProductList products={productosFamilia} addToCart={handleAddToCart} />

  <h2>Teatro</h2>
  <ProductList products={productosTeatro} addToCart={handleAddToCart} />

  <h2>Deportes</h2>
  <ProductList products={productosDeportes} addToCart={handleAddToCart} />

 <h2>Especiales</h2>
  <ProductList products={productosEspeciales} addToCart={handleAddToCart} />

  <Carrito cartItems={cart} />
  <Gallery />
  <Footer />
</div>

    </div>
  );
};

export default Home;
