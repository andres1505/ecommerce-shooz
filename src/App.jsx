import Cuerpo from "./assets/componentes/cuerpo/cuerpo"
import './App.css'
import Catalogo from "./assets/componentes/catalogo/catalogo"
import Header from "./assets/componentes/header/header"
import Footer from "./assets/componentes/Footer/footer"
import Carro from "./assets/componentes/carro/carro"
import Home from "./assets/componentes/home/home"

function App() {
  
  return (
    <>
    <Header />
    <Home/>
    <Catalogo />
    <Footer/>
    <Carro></Carro>
    </>
  )
}

export default App
