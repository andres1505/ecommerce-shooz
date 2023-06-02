import React from "react";
import "./Home.css";
import gifZapatilla from "./imagenes/gifZapatillas.gif";
import sneakers1 from "./imagenes/sneakers.jpg"
import sneakers2 from "./imagenes/sneakers2.jpg"
import Productos from "./componentes/Productos";

const Home = () =>{
    return(
        <>
        <div className="contenedor" >
            <div className="descripcion-tienda">
                <span className="titulo-tienda">Shooz, </span>
                <span className="texto-tienda">calzado de la mejor<br/> calidad y al 
                mejor precio.<br/>¡Descubre
                una experiencia de<br/> 
                compra excepcional!</span>

            </div>
            <div className="gif-zaptillas">
                <div className="gif">
                    <img src={gifZapatilla} alt="gifzapatillas" />

                </div>
            </div>          
        </div>
        <div >
            <h1 className="titulo-secundario1">Destacados</h1>
        </div>
        <Productos nombZapatilla="Jordan 3" />
        <Productos nombZapatilla ="Airmax 97" />
        <Productos nombZapatilla ="Airmax " />  
        <Productos nombZapatilla ="yeezy 700" /> 
        <div className="titulos-secundarios">
            <h1 className="titulo-secundario2">Ofertas🔥</h1>
        </div>
        <div className="imagenesFinal">
           <img src={sneakers1} className="imagen-final-1" alt="zaptilla1-final" />
           <img src={sneakers2} className="imagen-final-2" alt="zaptilla2-final" /> 
        </div>
        <div className="Boton-final">
            <a
            href="#" className="btn-final">Ordena Ahora </a>
        </div>

        
        </>        
    );
}
export default Home;
