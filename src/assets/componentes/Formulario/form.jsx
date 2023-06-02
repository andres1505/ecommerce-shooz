import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from './form.module.css'

// Definir el esquema de validación con Yup
const validationSchema = Yup.object().shape({
  nombre: Yup.string().required('El nombre es obligatorio'),
  correo: Yup.string().email('El correo electrónico no es válido').required('El correo electrónico es obligatorio'),
  pais: Yup.string().min(6, 'El país debe tener al menos 4 caracteres').required('El país es obligatorio'),
});

const MyForm = () => {
  const initialValues = {
    nombre: '',
    correo: '',
    pais: '',
  };

  const handleSubmit = (values) => {
    // Lógica para enviar los datos del formulario
    console.log(values);
  };

  return (
    <div className={style.loginbox}>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <div className={style.userbox}>
          <label className={style.label} htmlFor="nombre">Nombre:</label>
          <Field type="text" id="nombre" name="nombre" />
          <ErrorMessage name="nombre" component="div" />
        </div>
        <div className={style.userbox}>
          <label className={style.label}  htmlFor="correo">Correo electrónico:</label>
          <Field type="correo" id="correo" name="correo" />
          <ErrorMessage name="correo" component="div" />
        </div>
        <div className={style.userbox}>
          <label className={style.label}  htmlFor="pais">País:</label>
          <Field type="pais" id="pais" name="pais" />
          <ErrorMessage name="pais" component="div" />
        </div>
        <button type='submit' className={style.button}>
            <span className={style.btntxt}>Hello</span>
            </button>
      </Form>
    </Formik>
    </div>
  );
};

export default MyForm;
