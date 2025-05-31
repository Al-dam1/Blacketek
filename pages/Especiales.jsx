import React from "react";
import Header from "../componentes/header";
import Navbar from "../componentes/navbar";
import Footer from "../componentes/footer";

const Especiales = () => {
  const evento = [
    {
      nombre: "Oriental Ceramic Shirt",
      precio: "964.09",
      stock: 21,
      imagen:
        "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/49.jpg",
      id: "1",
    },
    {
      nombre: "Refined Metal Fish",
      precio: "946.39",
      stock: 2,
      imagen:
        "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/80.jpg",
      id: "2",
    },
    {
      nombre: "Handmade Concrete Sausages",
      precio: "149.19",
      stock: 83,
      imagen: "https://avatars.githubusercontent.com/u/95230351",
      id: "3",
    },
    {
      nombre: "Ergonomic Marble Chair",
      precio: "62.79",
      stock: 80,
      imagen: "https://avatars.githubusercontent.com/u/22224905",
      id: "4",
    },
    {
      nombre: "Modern Wooden Soap",
      precio: "589.79",
      stock: 88,
      imagen:
        "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/1.jpg",
      id: "5",
    },
    {
      nombre: "Frozen Granite Chicken",
      precio: "264.69",
      stock: 90,
      imagen: "https://avatars.githubusercontent.com/u/76354189",
      id: "6",
    },
    {
      nombre: "Refined Steel Computer",
      precio: "159.49",
      stock: 31,
      imagen:
        "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/2.jpg",
      id: "7",
    },
    {
      nombre: "Oriental Concrete Table",
      precio: "655.55",
      stock: 73,
      imagen: "https://avatars.githubusercontent.com/u/3905720",
      id: "8",
    },
    {
      nombre: "Tasty Granite Table",
      precio: "667.15",
      stock: 3,
      imagen:
        "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/69.jpg",
      id: "9",
    },
    {
      nombre: "Practical Gold Gloves",
      precio: "745.39",
      stock: 54,
      imagen: "https://avatars.githubusercontent.com/u/23060094",
      id: "10",
    },
    {
      nombre: "Incredible Aluminum Towels",
      precio: "831.89",
      stock: 91,
      imagen:
        "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/75.jpg",
      id: "11",
    },
    {
      nombre: "Intelligent Bamboo Tuna",
      precio: "454.25",
      stock: 49,
      imagen: "https://avatars.githubusercontent.com/u/65999663",
      id: "12",
    },
    {
      nombre: "Ergonomic Bamboo Table",
      precio: "123.45",
      stock: 10,
      imagen: "https://avatars.githubusercontent.com/u/45886215",
      id: "13",
    },
    {
      nombre: "Soft Granite Keyboard",
      precio: "233.69",
      stock: 98,
      imagen: "https://avatars.githubusercontent.com/u/88537172",
      id: "14",
    },
    {
      nombre: "Rustic Cotton Towels",
      precio: "801.59",
      stock: 45,
      imagen: "https://avatars.githubusercontent.com/u/42105985",
      id: "15",
    },
    {
      nombre: "Modern Granite Computer",
      precio: "261.39",
      stock: 50,
      imagen:
        "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/46.jpg",
      id: "16",
    },
    {
      nombre: "Luxurious Rubber Salad",
      precio: "873.39",
      stock: 74,
      imagen: "https://avatars.githubusercontent.com/u/62281484",
      id: "17",
    },
    {
      nombre: "Small Bronze Bacon",
      precio: "95.25",
      stock: 28,
      imagen: "https://avatars.githubusercontent.com/u/65685843",
      id: "18",
    },
    {
      nombre: "Licensed Cotton Gloves",
      precio: "100.79",
      stock: 60,
      imagen:
        "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/26.jpg",
      id: "19",
    },
    {
      nombre: "Unbranded Ceramic Computer",
      precio: "525.09",
      stock: 59,
      imagen:
        "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/82.jpg",
      id: "20",
    },
    {
      nombre: "Intelligent Steel Car",
      precio: "362.55",
      stock: 64,
      imagen: "https://avatars.githubusercontent.com/u/24602494",
      id: "21",
    },
  ];
  return (
    <>
      <Header />
      <Navbar />
       <div className="grid grid-cols-2 gap-4">
      {evento.map((evento) =>(
          <div key={evento.id} className="border p-4 rounded-xl shadow">
          <img
            src={evento.imagen}
            alt={evento.nombre}
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-xl font-bold mt-2">{evento.nombre}</h2>
          <p className="text-gray-600">Precio: ${evento.precio}</p>
          <p className="text-gray-500">Entradas disponibles: {evento.stock}</p>
        </div>
      )
      
      
      )}
      </div>
      <Footer />
    </>
  );
};

export default Especiales;
