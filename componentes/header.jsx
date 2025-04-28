import React from 'react'
import login from './login'
import Logo from  '../src/assets/logo.png'


const Header = () => {
  return (
    
   <header>
   <img src={Logo} alt="logo de blacketek"/>
    <h1>
      Bienvenido a Blacketek
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
