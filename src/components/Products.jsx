import React from 'react'
import ProductCard from './ProductCard'
import '../styles/products.css'
import { useState } from 'react'
import useGetProducts from '../hooks/useGetProducts'
import { useNavigate } from 'react-router-dom'; 

function Products() {
   
    const [orden, setOrden] = useState("desc")
    const { error, loading, setProducts, products, initialProducts } = useGetProducts()
    const navigate = useNavigate()

    if (error) {
        return<>
            <h2 className='ourier-prime-regular'>Error al cargar los productos </h2>
            <p>{error?.message || String(error)}</p>
        </>
    }

    if (loading) {
        return<>
            <h2 className='courier-prime-regular'>Cargando productos... </h2>
        </>
    }

    function cambiarOrden () {
        const newProducts = [...products]

        if (orden === "desc") {
            newProducts.sort((a,b) => Number(a.precio) - Number(b.precio));
            setOrden ("asc")
        }
        if (orden === "asc") {
            newProducts.sort((a,b) => Number(b.precio) - Number(a.precio));
            setOrden("desc")
        }

        setProducts (newProducts)
    }

    function borrarOrden (){
        setProducts(initialProducts)
        setOrden("desc")
    }
    
    const handleEditproduct = (e, productId) => {
        e.stopPropagation()
        //navegación hacia la vista de edición
        navigate(`/products/edit/${productId}`)
    }

  return (
    <>
        <br/>
        <h1 className="gluten-uniquifier">Catálogo</h1>
        <p className="courier-prime-regular">Acá encontraras todo el merchandising de tus artistas favoritos, no te pierdas todas las opciones!</p>

        <button className="btn-catalogo" onClick={cambiarOrden}>Ordenar por precio ↑↓</button>
        <br />
        <button className="btn-catalogo" onClick={borrarOrden} >Borrar</button>

        <section  className="card-container">
            {products.map ((product) => (
                <ProductCard product={product} key={product.id} handleEditproduct={handleEditproduct} />
            ))}
            
        </section>

        {/* <section  className="card-container">
            {PRODUCTS.map ((product) => (
                <ProductCard product={product} key={product.id}  />
            ))}
        </section> */}
    </>
  )
}

export default Products

// Acá se recorre cada producto y se crea su card (ProductCard)
// En este archivo creamos el container con todas las cards de ProductCard