import React from 'react'
import useGetProducts from '../hooks/useGetProducts'
import useDeleteProduct from '../hooks/useDeleteProduct'
import { useNavigate } from 'react-router-dom'
import '../styles/listeditproduct.css'

function ListEditProduct() {
    const { products, loading, error } = useGetProducts()
    const { deleteProduct } = useDeleteProduct()
    const navigate = useNavigate()

    const handleEdit = (productId) => {
      navigate(`/products/edit/${productId}`)
    }

    const handleDelete = async (productId) => {
      // e.stopProragation()

      const confirmDelete = window.confirm(
        "¿Seguro que querés eliminar este producto?"
      )
      if (confirmDelete === false) {
        return
      }

      const success = await deleteProduct(productId)

      if (success) {
        window.location.reload()
      }
    }

    if (loading) {
      return <p>Cargando...</p>
    }
    if (error){
      return <p>Error al cargar los productos</p>
    }
  return (
    <div>
      <h1 className='gluten-uniquifier'>Editar Productos</h1>
      <button onClick={() => navigate(`/PanelAdmin`) } className='courier-prime-regular'>Volver</button>
      
      <div className='card-container'>
        {products.map((p) => (
        <div key={p.id} className='card-edit'>
          <h2 className='gluten-uniquifier'>{p.nombre}</h2>
          <img src={p.imagen} className='edit-img' />
          <h4 className='courier-prime-regular text'>{p.descripcion} </h4>
          <p className='courier-prime-regular'>${p.precio} </p>
          <button onClick={() => handleEdit(p.id)}>Editar</button>
          <button className='btn-delete' onClick={() => handleDelete(p.id)}>Eliminar</button>
        </div>
      ))}
        
      </div>
      
    </div>
  )
}

export default ListEditProduct
