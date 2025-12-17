import React from 'react'
import '../styles/form.css'
import { useState } from 'react'

function Form() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [contact, setContact] = useState("")
    const [obs, setObs] = useState("")
    const [term, setTerm] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault();

      // validaciones
      if(!name || name.trim() === "" || !isNaN(name)) {
        console.log ("El nombre debe contener un valor correcto")
        return
      }

      if (email === "") {
        console.log ("El email no debe estar vacío")
        return
      }

      if(!number){
        console.log ("El teléfono no debe estar vacío")
        return
      }

      if (!contact) {
        console.log ("El motivo de contacto no debe estar vacío")
        return
      }

      if(term === false){
        console.log("Debe aceptar los términos y condiciones")
        return
      }

      console.log("Formulario enviando correctamente")
      console.log ([
        {
          name,
          email,
          number,
          payment,
          obs,
          term
        }
      ])
      // muestra los datos enviados por consola
       
    }

    const handleReset = () => {
      setName("")
      setEmail ("")
      setNumber("")
      setPayment("")
      setObs("")
      setTerm(false)
    }

    

  return (
    <div className="form-container">
        <form action="post" className="courier-prime-regular" onSubmit={handleSubmit} onReset={handleReset}>

          {/* nombre */}
          <label htmlFor="nombre" className="label" >Nombre:</label>
          <input required type="text" name="nombre" value={name} onChange={(e) => setName (e.target.value)}/>
    
          {/* email */}
          <label htmlFor="email" className="label">Email:</label>
          <input required type="email" name="email" value={email} onChange={(e) => setEmail (e.target.value)}/>

          {/* telefono */}
          <label htmlFor="telefono" className="label">Teléfono:</label>
          <input required type="tel" name="telefono" value={number} onChange={(e) => setNumber (e.target.value)}/>

          {/* contacto */}
          <p className="p-form">Motivo de contacto:</p>
          <label htmlFor="transferencia"> <input type="radio" value="compra" checked={contact==="compra"} onChange={() => setContact("compra")}/> Compra </label>
          <label htmlFor="efectivo"><input type="radio" value="consulta" checked={contact==="consulta"} onChange={() => setContact("consulta")}/> Consulta </label>
          <label htmlFor="efectivo"><input type="radio" value="otro" checked={contact==="otro"} onChange={() => setContact("otro")}/> Otro </label>

          {/* observación */}
          <label htmlFor="consulta" className="label">Observación:</label>
          <textarea name="consulta" id="consulta" value={obs} onChange={(e) => setObs (e.target.value)} placeholder='(Opcional)'/>

          {/* term. y cond. */}
          <label htmlFor=""><input type="checkbox" name="terminos" id="terminos" checked={term} onChange={(e) => setTerm (e.target.checked)}/>Acepto los <span>Términos y Condiciones</span></label>
            
          {/* botones */}
          <div className="button">
              <button type="submit" >Enviar</button>
              <button type="reset">Borrar</button>
          </div> 

        </form>
      
    </div >
  )
}

export default Form

