import React from "react";
import "../hoja-de-estilos/Estilos.css";
const Gallery = () => {
  const images = [
    "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artists_list_featured/public/images/show-header/jenn960.png",
    "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artists_list_featured/public/images/show-header/sanson960.png",
    "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artists_list_featured/public/images/show-header/master_s.png",
  "  https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artists_list_featured/public/images/show-header/sub_25_s.png",
"  https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artists_list_featured/public/images/show-header/galaxias_s.png",
  ];

  return (
    <section>
      {images.map((src,index) => (
        <img key={index} src={src} alt={`images${index + 1}`} />
      ))}
    </section>
  );
};

export default Gallery;
