import React from "react";
import login from "../pages/login";
import Logo from "../src/assets/logo.png";
import "../hoja-de-estilos/estilos.css";

const Header = () => {
  return (
    <header>
      <a href="/">
      <img src={Logo} alt="logo de blacketek" /></a>
      <h1> Blacketek</h1>
          <a href="/login">
          <button>MI CUENTA</button>
        </a>
        
     
    </header>
  );
};

export default Header;
