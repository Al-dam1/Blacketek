import React from 'react'
// import '../hoja-de-estilos.css'
import Header from '../componentes/header.jsx'
import Footer from '../componentes/footer.jsx'
import Navbar from '../componentes/navbar.jsx'
import Contacto from '../componentes/contacto.jsx'
import Gallery from '../componentes/gallery.jsx'


const Home = () => {
  return (
    <> 
    <Header/>
    <Navbar/>
    <Gallery/>
    <Contacto/>
    <Footer/>
    
    
    </>
  )
}

export default Home
