// import React from 'react'
// import {useState, useEffect} from 'react'
// import usePostProduct from '../hooks/usePostProduct'
// import { useNavigate, useParams } from 'react-router-dom';
// import usePutProduct from '../hooks/usePutProduct';
// import useGetProductById from '../hooks/useGetProductById';

// function EditProductPage() {

//     const [form, setForm] = useState({
//         nombre:"",
//         imagen:"",
//         descripcion:"",
//         precio:0,
//     });

//     const navigate = useNavigate()
//     const {error, putProduct} = usePutProduct();
//     const {error: getByIdError, getProductById} = useGetProductById()
//     const {id} = useParams()
//     console.log("ID recibido desde la URL:", id);

//     useEffect(() => {
//       const loadProduct = async () => {
//         const response = await getProductById(id)
//         console.log("Respuesta de la API:", response)

//         if (response) {
//           setForm({
//             nombre: response.nombre,
//             imagen: response.imagen,
//             descripcion: response.descripcion,
//             precio: response.precio,
//           })
//         }
//       }
//       if (id) {
//         loadProduct()
//       }else {
//         console.log({id})
//       }
//     }, [id]);;

//     //Eventos 

//     const handleFormSubmit = async (e) => {
//         e.preventDefault()
//         const success = await putProduct(form, id)
//         if (success) {
//           //Limpieza del form
//             setForm({
//                 nombre: "",
//                 imagen: "",
//                 descripcion: "",
//                 precio: 0,
//             })

//             navigate("/ListEdit")
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
//       <h1>Editar Producto </h1>

// {/* los name y id deben ser los mismos que los de la api
// AGREGAR ESTILOS */}
//       <form onSubmit={handleFormSubmit}>
//         <label htmlFor="nombre">Nombre del producto</label>
//         <input required type="text" name='nombre' id='nombre' value={form.nombre} onChange={handleInputChange}/>

//         <label htmlFor="imagen"> Url de imagen</label>
//         <input required type="text"  name='imagen'  id='imagen' value={form.imagen} onChange={handleInputChange}/>

//         <label htmlFor="descripcion">Descripción</label>
//         <textarea name="descripcion" id="descripcion" value={form.descripcion} onChange={handleInputChange}></textarea>

//         <label htmlFor="precio">Precio del producto</label>
//         <input required type="number" name='precio' id='precio' value={form.precio} onChange={handleInputChange}/>

//         <br />
//         <button type='submit'>Editar</button>
//         {error && <p>{error.message || error}</p> }
        
//       </form>
//     </>
//   )
// }

// export default EditProductPage


import React from 'react'
import EditProduct from '../components/EditProduct'

function EditProductPage() {
  return (
    <>
      <main>
        <EditProduct />
      </main>
    </>
  )
}

export default EditProductPage
