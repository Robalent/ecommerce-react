import {useState} from 'react'
import { API_URL } from '../config'

function usePutProduct() {
    const [error, setError] = useState(null)

    const putProduct = async (formData, productId) => {
        setError(null)

        try {
            const response = await fetch(`${API_URL}/products/${String(productId)}`,{
                method:"PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            if (!response.ok) {
                throw new Error (`Error al editar el producto, ${response.status}`)
            }

            const data = await response.json()
            return data

        } catch (error) {
            console.error(error)
            setError(error)
            return null
        }
    }
    return {error, putProduct}
}

export default usePutProduct