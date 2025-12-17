import { useState, useEffect } from 'react'
import { API_URL } from '../config';

function useGetProducts() {

    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [initialProducts, setInitialProducts] = useState([]);
    
    const getProducts = async (url) => {
        try {

            setLoading(true)
            setError(null)

            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`Error al traer los productos, ${response.status}`)
            }

            const data = await response.json()

            setProducts(data)
            setInitialProducts (data)

        } catch (error) {
            console.error(error)
            setError(error)
            setProducts([])
            setInitialProducts([])

        } finally{
            setLoading(false)
        }
    };

    useEffect (() => {
        getProducts(`${API_URL}/products`)
    },[] )

    return {products, setProducts, error, loading, initialProducts}
}


export default useGetProducts