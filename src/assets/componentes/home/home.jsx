import React from "react";
import "./Home.css";
import gifZapatilla from "./imagenes/gifZapatillas.gif";
import sneakers1 from "./imagenes/sneakers.jpg";
import sneakers2 from "./imagenes/sneakers2.jpg";
import Productos from "./componentes/Productos";
import zapatos from "./imagenes/AirJordanXXXVII.webp";
import zapatos1 from "./imagenes/NikeAirForce1.webp";
import zapatos2 from "./imagenes/NikeTechHera.webp";
import zapatos3 from "./imagenes/Tatum1Barbershop.webp";

const Home = () => {
  return (
    <>
      <div className="header">
        <div>
          <h1 className="titulo-tienda">¡Shooz!</h1>
          <p className="texto-tienda">
            Calzado de la mejor
            <br /> calidad y al mejor precio.
            <br />
            ¡Descubre una experiencia de
            <br />
            compra excepcional!
          </p>
        </div>
        <img src={gifZapatilla} alt="gifzapatillas" />
      </div>
      <h2 className="titulo-secundario1">Destacados</h2>
      <div className="destacados">
        <div className="productos">
          <Productos nombZapatilla="Air Jordan XXXVII" img={zapatos} />
        </div>
        <div className="productos">
          <Productos nombZapatilla="Nike Air Force 1" img={zapatos1} />
        </div>
        <div className="productos">
          <Productos nombZapatilla="Nike Tech Hera" img={zapatos2} />
        </div>
        <div className="productos">
          <Productos nombZapatilla="Tatum 1 Barbershop" img={zapatos3} />
        </div>
      </div>
      <div className="titulos-secundarios">
        <h1 className="titulo-secundario2">Ofertas</h1>
      </div>
      <div className="imagenesFinal">
        <img src={sneakers1} className="imagen-final-1" alt="zaptilla1-final" />
        <img src={sneakers2} className="imagen-final-2" alt="zaptilla2-final" />
      </div>
      <div className="Boton-final">
        <a href="#" className="btn-final">
          Ordena Ahora{" "}
        </a>
      </div>
    </>
  );
};
export default Home;
