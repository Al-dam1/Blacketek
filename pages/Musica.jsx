import { useEffect, useState } from "react";
import Header from "../componentes/header";
import Navbar from "../componentes/navbar";
import Footer from "../componentes/footer";
import ProductList from "../componentes/productList";

const Musica = ({ addToCart, countItem }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/Utiles/data.json")
      .then((res) => res.json())
      .then((data) => {
        const musica = data.filter((p) => p.categoria === "musica");
        setProductos(musica);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Navbar countItem={countItem} />
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">🎵 Música</h2>
        <ProductList products={productos} addToCart={addToCart} />
      </main>
      <Footer />
    </div>
  );
};

export default Musica;
