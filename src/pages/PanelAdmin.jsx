import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom'
import '../styles/paneladmin.css'

function PanelAdmin() {
    const navigate = useNavigate();
  return (
    <>
        <Header/>

        <main>
          <div className='button-container'>
            <button className='btn-new courier-prime-regular' onClick={() => navigate("/products/create")}> Crear nuevo producto </button>
            <button className='btn-editar courier-prime-regular' onClick={() => navigate(`/ListEdit`) }>Editar y Eliminar</button>
          </div>
        </main>

        <Footer/>
      
    </>
  )
}

export default PanelAdmin
