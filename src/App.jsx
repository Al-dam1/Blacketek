import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Home from '../pages/home.jsx'
import Musica from '../pages/Musica.jsx'
import Teatro from '../pages/Teatro.jsx'
import Deportes from '../pages/Deportes.jsx'
import Familia from '../pages/Familia.jsx'
import Especiales from '../pages/Especiales.jsx'
import Contacto from '../pages/contacto.jsx'
import viteLogo from '/vite.svg'
import '../hoja-de-estilos/estilos.css'
import Carrito from '../componentes/carrito.jsx'


 

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Musica" element={<Musica />} />
      <Route path="/Teatro" element={<Teatro/>} />
      <Route path="/Deportes" element={<Deportes />} />
      <Route path="/Familia" element={<Familia />} />
      <Route path="/Especiales" element={<Especiales />} />
      <Route path="/Contacto" element={<Contacto />} />
      {/* Agregá las demás páginas acá */}
    </Routes>
  
  )
}

export default App
