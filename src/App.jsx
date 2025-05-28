import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../hoja-de-estilos/estilos.css'
import Home from '../pages/home.jsx'

 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Home/>

    </div>
  
  )
}

export default App
