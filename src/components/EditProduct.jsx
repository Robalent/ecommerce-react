import React from 'react'
import {useState, useEffect} from 'react'
import usePostProduct from '../hooks/usePostProduct'
import { useNavigate, useParams } from 'react-router-dom';
import usePutProduct from '../hooks/usePutProduct';
import useGetProductById from '../hooks/useGetProductById';
import '../styles/editproduct.css'

function EditProduct() {

    const [form, setForm] = useState({
        nombre:"",
        imagen:"",
        descripcion:"",
        precio:0,
    });

    const navigate = useNavigate()
    const {error, putProduct} = usePutProduct();
    const {error: getByIdError, getProductById} = useGetProductById()
    const {id} = useParams()
    console.log("ID recibido desde la URL:", id);

    useEffect(() => {
      const loadProduct = async () => {
        const response = await getProductById(id)
        console.log("Respuesta de la API:", response)

        if (response) {
          setForm({
            nombre: response.nombre,
            imagen: response.imagen,
            descripcion: response.descripcion,
            precio: response.precio,
          })
        }
      }
      if (id) {
        loadProduct()
      }else {
        console.log({id})
      }
    }, [id]);;

    //Eventos 

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const success = await putProduct(form, id)
        if (success) {
          //Limpieza del form
            setForm({
                nombre: "",
                imagen: "",
                descripcion: "",
                precio: 0,
            })

            navigate("/ListEdit")
        }
    }

    const handleInputChange = (e) => {
        const {name,value, type} = e.target
        setForm({
            ...form,
            [name]: type === "number" ? parseInt(value) || 0 : value
        })
        console.log(form)
    }

  return (
    <>
      <h1 className='gluten-uniquifier'>Editar Producto </h1>
      <button onClick={() => navigate(`/ListEdit`) } className='courier-prime-regular'>Volver</button>
{/* los name y id deben ser los mismos que los de la api */}
        <div className='form-container'>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="nombre" className='courier-prime-regular'>Nombre del producto</label>
                <input required type="text" name='nombre' id='nombre' value={form.nombre} onChange={handleInputChange} />

                <label htmlFor="imagen" className='courier-prime-regular'> Url de imagen</label>
                <input required type="text" name='imagen' id='imagen' value={form.imagen} onChange={handleInputChange} />

                <label htmlFor="descripcion" className='courier-prime-regular'>Descripción</label>
                <textarea name="descripcion" id="descripcion" value={form.descripcion} onChange={handleInputChange}></textarea>

                <label htmlFor="precio" className='courier-prime-regular'>Precio del producto</label>
                <input required type="number" name='precio' id='precio' value={form.precio} onChange={handleInputChange} />

                <br />
                <button type='submit'className='courier-prime-regular'>Editar</button>
                
                {error && <p>{error.message || error}</p>}

            </form>
        </div>
      
    </>
  )
}

export default EditProduct
