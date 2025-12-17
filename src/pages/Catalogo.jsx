import React from 'react'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer'
import Products from '../components/Products.jsx'

function Catalogo() {
  return (
    <>
      <Header />
      <main>
        <Products />
      </main>
      <Footer />
    </>
  )
}

export default Catalogo
