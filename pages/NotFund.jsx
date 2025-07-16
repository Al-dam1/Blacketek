import React from "react";
import { Link } from "react-router-dom";

const NotFund = () => {
  return (
    <div>
      <h1>Not Found...</h1>
      <p>404</p>
      <button>
        <Link to="/">Volver al inicio</Link>
      </button>
    </div>
  );
};

export default NotFund;
