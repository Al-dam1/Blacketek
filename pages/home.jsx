import React from 'react'
import '../hoja-de-estilos/estilos.css'
import Header from "../componentes/header";
import Navbar from "../componentes/navbar";
import Gallery from "../componentes/gallery";
import Footer from '../componentes/footer';

const Home = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default Home
