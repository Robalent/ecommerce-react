import React from 'react'
import '../styles/galeria.css'
import { Link } from 'react-router-dom'


function Galeria() {

    const GALERIA = [
        {id:1, imagen:"/img/galeria10.jpg"},
        {id:2, imagen:"/img/galeria8.jpg"},
        {id:3, imagen:"/img/galeria7.jpg"},
        {id:4, imagen:"/img/galeria9.jpg"},
        {id:5, imagen:"/img/galeria6.jpg"},
        {id:6, imagen:"/img/galeria12.jpg"},
        {id:7, imagen:"/img/galeria13.jpg"},
        {id:8, imagen:"/img/galeria11.jpg"},
    ]

    //evento smooth para que al cambiar a catálogo nos redirija al inicio
    const handleScroll = () => {
        window.scrollTo({top:0, behavior:'smooth'})
    }

  return (
    <>

        <h1 id="galeria" class="gluten-uniquifier">Galería - Mirá todo lo nuevo!</h1>
        <div className='grid-container'>

            {GALERIA.map((g)=>(
                <div key={g.id} className='grid-item'>
                    <img src={g.imagen} alt="" />
                </div>
            ))}
        </div>

        <div className="btn-container">
            <Link className="btn-cat" to="/Catalogo" onClick={handleScroll}>Ver Más</Link>
        </div>
    </>
  )
}

export default Galeria

//Acá obtenemos la imagen y creamos la galería  