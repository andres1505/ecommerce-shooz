import './App.css'
import Catalogo from "./assets/componentes/catalogo/catalogo"
import Header from "./assets/componentes/header/header"
import Footer from "./assets/componentes/Footer/footer"
import Home from "./assets/componentes/home/home"
import React from 'react';
import MyForm from './assets/componentes/Formulario/form'


function App() {
  
  return (
    <>
    <Header />
    <Home />
    <Catalogo />
    <MyForm/>
    <Footer/>

    </>
  )
}

export default App
