import './cuerpo-module.css'

function Cuerpo(){
    return(
        <>

        <header className='encabezado'>
            <img src="" alt="" />
            <nav className='menu'>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">CARRITO</a></li>
                    <li><a href="">CATEGORIAS</a></li>
                    <li><a href="">MAS INFORMACION</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <section>
                <h2>seccion1</h2>
            </section>
            <section>
                <h2>seccion2</h2>
            </section>
            <section>
                <h2>seccion3</h2>
            </section>
            <section>
               <h2>seccion4</h2>
            </section>
        </main>

        <footer className='pie_de_pagina'>
            <h2>contactanos</h2>
            <h2>copyright</h2>
        </footer>

        </>
    )
}

export default Cuerpo