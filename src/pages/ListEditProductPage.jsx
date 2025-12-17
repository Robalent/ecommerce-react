// import React from 'react'
// import useGetProducts from '../hooks/useGetProducts'
// import { useNavigate } from 'react-router-dom'

// function ListEditProductPage() {
//     const { products, loading, error } = useGetProducts()
//     const navigate = useNavigate()

//     const handleEdit = (productId) => {
//         navigate(`/products/edit/${productId}`)
//     }

//     if (loading) return <p>Cargando...</p>
//     if (error) return <p>Error al cargar los productos</p>
//   return (
//     <div>
//       <h1>Editar Productos</h1>

//         {/* VER ESTILOS Y AGREGAR CSS*/}
//       {products.map((p) => (
//         <div key={p.id} style={{
//           border: "1px solid #ccc",
//           padding: "10px",
//           margin: "10px",
//           width: "300px"
//         }}>
//           <h2>{p.nombre}</h2>
//           <img src={p.imagen} alt="" width="80" />
//           <h4 style={{color: "black"}}>{p.descripcion} </h4>
//           <p>${p.precio} </p>
//           <button onClick={() => handleEdit(p.id)}>Editar</button>
//           {/* AGREGAR BOTÓN ELIMINAR */}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ListEditProductPage

import React from 'react'
import ListEditProduct from '../components/ListEditProduct'

function ListEditProductPage() {
  return (
    <>
      <main>
        <ListEditProduct />
      </main>
    </>
  )
}

export default ListEditProductPage
