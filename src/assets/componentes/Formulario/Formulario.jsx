import React, {useState} from 'react';
import { Formik } from 'formik';


const Formulario = () => {
    return(
       <>

       <Formik
       onSubmit={() => {
        console.log('formulario enviado');
       }}
       >
        {(handelsubmit) => (
            <form className='formulario'>

            <div>

            <label htmlFor="nombre">Nombre</label> 
            <input type="text" id="nombre" name="nombre" placeholder="shooz doe" />

            </div>

            <div>

             <label htmlFor="correo">Correo</label> 
            <input type="email" id="correo" name="nombre" placeholder="shooz@gmail.com" />

            </div>


            <div>

           <label htmlFor="correo">Telefono</label> 
           <input type="text" id="telefono" name="nombre" placeholder="9617840" />

           </div>


           <div>

           <label htmlFor="correo">Pais</label> 
           <input type="text" id="correo" name="nombre" placeholder="Colombia" />

            </div>

            <button type="submit">Enviar</button >
 

            </form>       


        )}

            </Formik>

                   
       </>

    )

}

export default Formulario;