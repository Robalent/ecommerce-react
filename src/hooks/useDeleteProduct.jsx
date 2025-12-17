import React from 'react'
import { useState } from 'react'
import { API_URL } from '../config'

function useDeleteProduct() {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const deleteProduct = async (productId) => {
        setError(null)
        setLoading(true)

        try {
            const response = await fetch (`${API_URL}/products/${String(productId)}`, {
                method: "DELETE"
            //     headers:{
            //     "Content-Type": "application/json"
            // }
            })

            if (!response.ok) {
                throw new Error (`Error al eliminar el producto, ${response.status}`)
            }

            // const data = await response.json()

            return true //data

        } catch (error) {
            console.error(error)
            setError(error)
            return false
        }
    }
    return { deleteProduct, error, loading }
}

export default useDeleteProduct
