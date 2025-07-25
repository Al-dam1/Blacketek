import React from "react";
import "../hoja-de-estilos/Estilos.css";
const Gallery = () => {
  const images = [
    "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/custom_image/public/images/custom-image/piojos_parque_ciudad_25_de_mayo-960x400.jpg",
    "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artists_list_featured/public/images/show-header/jenn960.png",
    "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artists_list_featured/public/images/show-header/sanson960.png",
    "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artists_list_featured/public/images/show-header/master_s.png",
    "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artists_list_featured/public/images/show-header/infi960.png",
    "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artists_list_featured/public/images/show-header/galaxias_s.png",
    "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artists_list_featured/public/images/show-header/amer960.png",
    "https://prod-cms-static.ticketek.com.ar/sites/default/files/images/show-header/padelba960.png",
    "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artists_list_featured/public/miranda_generica_s.png",
  ];

  return (
    <section className="Eventos">
    {images.map((src, index) => (
      <div key={index} className="card">
        <img src={src} alt={`images${index + 1}`} />
        
      </div>
    ))}
  </section>
  
  );
};

export default Gallery;
