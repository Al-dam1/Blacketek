import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../componentes/header.jsx'
import Footer from '../componentes/footer.jsx'
import Navbar from '../componentes/navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <Navbar/>

   <Footer/>
   </>
  )
}

export default App
