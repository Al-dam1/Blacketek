import { useState, useEffect } from "react";
import "../hoja-de-estilos/Estilos.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Header from "../componentes/header";
import Navbar from "../componentes/navbar";
import Gallery from "../componentes/gallery";
import Footer from "../componentes/footer";
import NotFund from "../componentes/NotFund";

function App() {
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false); 

  useEffect(() => {
    fetch("/utiles/data.json") 
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos);
        setProductos(datos);
        setCargando(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setCargando(false);
      });
  }, []);

  return (
  
      <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/NotFund" element={<NotFund />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/NotFund" element={<NotFund />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
