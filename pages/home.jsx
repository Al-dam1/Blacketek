import React from 'react'
import '../hoja-de-estilos/estilos.css'
import Header from '../componentes/Header'
import Navbar from '../componentes/Navbar'
import Gallery from '../componentes/Gallery'
import Footer from '../componentes/Footer'

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
