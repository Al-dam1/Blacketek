import { useEffect, useState } from "react";
import ProductList from "../componentes/productList";
import Header from "../componentes/header";
import Navbar from "../componentes/navbar";
import Footer from "../componentes/footer";

const Especiales = ({ addToCart, countItem }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/Utiles/data.json")
      .then((res) => res.json())
      .then((data) => {
        const productosEspeciales = data.filter(
          (p) => p.categoria.toLowerCase() === "especiales"
        );
        setProductos(productosEspeciales);
      })
      .catch((error) => {
        console.error("Error al cargar datos de Especiales:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Navbar countItem={countItem} />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">🌟 Especiales</h2>
        <ProductList products={productos} addToCart={addToCart} />
      </div>
      <Footer />
    </div>
  );
};

export default Especiales;
