import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../hoja-de-estilos/Estilos.css";
import Home from "../pages/home";
import Header from "../componentes/header";
import Navbar from "../componentes/navbar";
import Footer from "../componentes/footer";
import NotFund from "../pages/NotFund";
import Musica from "../pages/Musica";
import Teatro from "../pages/Teatro";
import Deportes from "../pages/Deportes";
import Familia from "../pages/Familia";
import Especiales from "../pages/Especiales";
import Contacto from "../pages/Contacto";
import Carrito from "../PAGES.jsx/Carrito";
import CarritoPage from "../PAGES.jsx/CarritoPage";
import PanelAdministrativo from "../pages/PanelAdministrativo";
import MiCuenta from "../pages/MiCuenta";

function App() {
  const [cart, setCart] = useState([]);
  const [animarCarrito, setAnimarCarrito] = useState(false);
  const [mensaje, setMensaje] = useState(null);
  const [productos, setProductos] = useState([]);


  const mostrarMensaje = (texto) => {
    setMensaje(texto);
    setTimeout(() => setMensaje(null), 2000);
  };

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existe = prev.find((p) => p.id === item.id);
      if (existe) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        return [...prev, { ...item, cantidad: 1 }];
      }
    });

    setAnimarCarrito(true);
    setTimeout(() => setAnimarCarrito(false), 400);
    mostrarMensaje("✅ Producto agregado al carrito");
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    mostrarMensaje("🗑️ Producto eliminado del carrito");
  };

  const handleDecrease = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };
  const handleIncrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const totalUnidades = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <>
      {mensaje && <div className="mensaje-flotante">{mensaje}</div>}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              handleAddToCart={handleAddToCart}
              handleRemove={handleRemoveFromCart}
              handleDecrease={handleDecrease}
            />
          }
        />
        <Route path="/MiCuenta" element={<MiCuenta />} />

        <Route
          path="/Musica"
          element={<Musica addToCart={handleAddToCart} />}
        />
        <Route
          path="/Teatro"
          element={<Teatro addToCart={handleAddToCart} />}
        />
        <Route
          path="/Deportes"
          element={<Deportes addToCart={handleAddToCart} />}
        />
        <Route
          path="/Familia"
          element={<Familia addToCart={handleAddToCart} />}
        />
        <Route
          path="/Especiales"
          element={<Especiales addToCart={handleAddToCart} />}
        />
        <Route path="/Contacto" element={<Contacto />} />
        <Route
          path="/Carrito"
          element={
            <CarritoPage
              cartItems={cart}
              onRemove={handleRemoveFromCart}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
              countItem={totalUnidades}
            />
          }
        />
        <Route
          path="/admin"
          element={
            <PanelAdministrativo
              productos={productos}
              setProductos={setProductos}
            />
          }
        />

        <Route path="*" element={<NotFund />} />
      </Routes>
    </>
  );
}

export default App;
