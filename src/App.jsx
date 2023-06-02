import './App.css'
import Catalogo from "./assets/componentes/catalogo/catalogo"
import Header from "./assets/componentes/header/header"
import Footer from "./assets/componentes/Footer/footer"
import Home from './assets/componentes/home/Home'
import React from 'react';



function App() {
  
  return (
    <>
    <Header />
    <Home/>
    <Catalogo />
    <Footer/>
    </>
  )
}

export default App
