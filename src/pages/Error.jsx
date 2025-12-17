import React from 'react'
import '../styles/error.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
      <div className="error-container">
          <h1 className='finger-paint-regular'>Error </h1>
          <h1 className='finger-paint-regular'>404 </h1>
          <p className='courier-prime-regular'>Lo sentimos la página no fue encontrada!</p>
          <Link className='btn-back' to='/' >Volver al Inicio</Link>
      </div>
  )
}

export default Error
