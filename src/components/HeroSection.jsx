import React from 'react'
import '../styles/herosection.css'
import portada1 from '../assets/portada1.png'

export default function HeroSection() {
  return (
    <>
        {/* FOTO PORTADA + TEXTO */}
        <div>
          <a className="portada">
            <img src={portada1} alt="portada"/>
          </a>
        </div>
        <div className='portada-txt'>
          <h2 className="courier-prime-regular">¡Bienvenidx a <span>Merch Oficial</span>! donde transformamos tu fanatismo en estilo. Explora nuestra colección de merchandising oficial: remeras, buzos, gorros, tote bags y más. Elegí tus favoritos y disfrutá de productos con la mejor calidad y precio del mercado.</h2>
          <h2 className="courier-prime-regular">Llevá tu pasión a todas partes!</h2>
        </div> 

        <h1 className="gluten-uniquifier">¿No nos conoces? ¿Queres saber más sobre nosotras?</h1>

        <h2 className="courier-prime-regular portada-txt" id="preg-index" >Conocenos!</h2>
      
    </>
  )
}

