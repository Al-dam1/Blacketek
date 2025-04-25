import React from 'react'
import login from './login'
const Header = () => {
  return (
   <header>
   
    <h1>
      Bienvenido a Refloxs
    </h1>
    <p>
      Podras comprar tus entradas favoritas!!
    </p>

   <a href="https://www.ticketek.com.ar/websource/auth/login/?next=/websource/profiles/history/">
   <button>
    MI CUENTA
    </button>
    </a>
   </header>
  )
}

export default Header
