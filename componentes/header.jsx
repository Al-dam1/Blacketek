import React from "react";
import login from "./login";
import Logo from "../src/assets/logo.png";
import "../hoja-de-estilos/Estilos.css";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo de blacketek" />
      <h1> Blacketek</h1>
          <a href="https://www.ticketek.com.ar/websource/auth/login/?next=/websource/profiles/history/">
          <button>MI CUENTA</button>
        </a>
     
    </header>
  );
};

export default Header;
