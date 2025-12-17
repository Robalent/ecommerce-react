import {useState} from 'react'
import { API_URL } from '../config'

function usePostProduct() {
    const [error, setError] = useState(null)

    const postProduct = async (formData) => {
        setError(null)

        try {
           const response = await fetch (`${API_URL}/products`, {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData) //convierte a json los obj de js
                                           // en el formData viajan los datos que crearan el producto
           })

           if (!response.ok) {
            throw new Error (`Error al crear el producto, ${response.status}`)
           }

           const data = await response.json()
           return data // data tiene los datos del registro nuevo

        } catch (error) {
            console.error("Error al crear nuevo producto",error)
            setError(error)
            return null
        }
    }
    return {error, postProduct}
}

export default usePostProduct