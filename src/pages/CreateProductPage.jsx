// import React from 'react'
// import {useState} from 'react'
// import usePostProduct from '../hooks/usePostProduct'
// import { useNavigate } from 'react-router-dom';

// function CreateProduct() {

//     const [form, setForm] = useState({
//         nombre:"",
//         imagen:"",
//         descripcion:"",
//         precio:0,
//     });

//     const navigate = useNavigate()
//     const {error, postProduct} = usePostProduct()

//     //Eventos 

//     const handleFormSubmit = async (e) => {
//         e.preventDefault()
//         const success = await postProduct(form)
//         if (success) {
//             setForm({
//                 nombre: "",
//                 imagen: "",
//                 descripcion: "",
//                 precio: "",
//             })

//             navigate("/catalogo")
//         }
//     }

//     const handleInputChange = (e) => {
//         const {name,value, type} = e.target
//         setForm({
//             ...form,
//             [name]: type === "number" ? parseInt(value) || 0 : value
//         })
//         console.log(form)
//     }

//   return (
//     <>
//       <h1>Crear Producto </h1>

// {/* los name y id deben ser los mismos que los de la api */}
// {/* AGREGAR ESTILOS */}
//       <form onSubmit={handleFormSubmit}>
//         <label htmlFor="nombre">Nombre del producto</label>
//         <input required type="text" name='nombre' id='nombre' value={form.nombre} onChange={handleInputChange}/>

//         <label htmlFor="imagen"> Url de imagen</label>
//         <input required type="text"  name='imagen'  id='imagen' value={form.imagen} onChange={handleInputChange}/>

//         <label htmlFor="descripcion">Descripción</label>
//         <textarea name="descripcion" id="descripcion" value={form.descripcion} onChange={handleInputChange}></textarea>

//         <label htmlFor="precio">Precio del producto</label>
//         <input required type="text" name='precio' id='precio' value={form.precio} onChange={handleInputChange}/>

//         <br />
//         <button type='submit'>Crear</button>
//         <button type='reset'>Limpiar</button>
//         {error && <p>{error.message || error}</p> }
        
//       </form>
//     </>
//   )
// }

// export default CreateProduct

import React from 'react'
import CreateProduct from '../components/CreateProduct'

function CreateProductPage() {
  return (
    <>
      <main>
        <CreateProduct />
      </main>
    </>
  )
}

export default CreateProductPage
