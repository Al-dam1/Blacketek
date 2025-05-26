import { useState } from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import '../hoja-de-estilos.css'
import Header from '../pages/home.jsx'
// import Footer from '../componentes/footer.jsx'
// import Navbar from '../componentes/navbar.jsx'
// import Contacto from '../componentes/contacto.jsx'
// import Gallery from '../componentes/gallery.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' 
    element={
      <>
      <Home/>
    </>
    }>

    </Route>


    </Routes>
      </BrowserRouter>
  
  )
}

export default App
