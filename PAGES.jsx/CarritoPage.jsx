import Header from "../componentes/Header";
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
import Carrito from "../PAGES.jsx/Carrito";

const CarritoPage = ({ cartItems, onRemove, onDecrease, onIncrease, countItem }) => {
  return (
    <div>
      <Header />
      <Navbar countItem={countItem} />
      <main className="p-4 max-w-3xl mx-auto">
        <Carrito
          cartItems={cartItems}
          onRemove={onRemove}
          onDecrease={onDecrease}
          onIncrease={onIncrease}
        />
      </main>
      <Footer />
    </div>
  );
};

export default CarritoPage;
