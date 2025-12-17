import React from 'react'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer'
import Form from '../components/Form.jsx'

function Contacto() {
  return (
     <>
          <Header />
          <main>
            <h1 className="gluten-uniquifier">Formulario de contacto<i className="fa-solid fa-comment-dots"></i></h1>
            <p className="courier-prime-regular">Contactate con nosotras sobre cualquier duda o consulta que tengas. Tu consulta no molesta!</p>
            <Form />
          </main>
          <Footer />
        </>
  )
}

export default Contacto
