import React from "react";

const Gallery = () => {
  const images = [
    "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artists_list_featured/public/images/show-header/jenn960.png",
    "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artists_list_featured/public/images/show-header/sanson960.png",
    "https://prod-cms-static.ticketek.com.ar/sites/default/files/styles/artists_list_featured/public/images/show-header/master_s.png",
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
