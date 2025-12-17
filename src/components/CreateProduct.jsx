import React from 'react'
import {useState} from 'react'
import usePostProduct from '../hooks/usePostProduct'
import { useNavigate } from 'react-router-dom';
import '../styles/createproduct.css'

function CreateProduct() {

    const [form, setForm] = useState({
        nombre:"",
        imagen:"",
        descripcion:"",
        precio:0,
    });

    const navigate = useNavigate()
    const {error, postProduct} = usePostProduct()

    //Eventos 

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const success = await postProduct(form)
        if (success) {
            setForm({
                nombre: "",
                imagen: "",
                descripcion: "",
                precio: "",
            })

            navigate("/catalogo")
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
      <h1 className='gluten-uniquifier'>Crear Producto </h1>
      <button onClick={() => navigate(`/PanelAdmin`) } className='courier-prime-regular'>Volver</button>
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
                <input required type="text" name='precio' id='precio' value={form.precio} onChange={handleInputChange} />

                <br />
                <button type='submit' className='courier-prime-regular'> Crear </button>
                <button type='reset' className='courier-prime-regular'> Limpiar </button>
                {error && <p>{error.message || error}</p>}

            </form>

        </div>
        
      
    </>
  )
}

export default CreateProduct