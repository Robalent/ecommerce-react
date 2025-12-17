import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function ProductCard({product, handleEditproduct}) {
  const navigate = useNavigate();

  return (

    <div className='card'>

        <img className="card-img" src={product.imagen} alt={product.nombre} />
        <h2 className="card-title gluten-uniquifier">{product.nombre}</h2>
        <p className="card-text courier-prime-regular">{product.descripcion} </p>
        <h4 className="courier-prime-regular">${product.precio}</h4>
        <a className="btn " onClick={() => navigate(`/contacto`) }>Comprar</a>
        {/* <button onClick={() => navigate(`/products/edit/${product.id}`) }className='btn-edit'>Editar</button> */}

    </div>
  )
}
 
// En este archivo creamos la card de cada producto
