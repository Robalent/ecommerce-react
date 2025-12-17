import React from 'react'
import '../styles/accordion.css'

export default function Accordion() {
  return (
      
    // ACCORDION
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            ¿Qué es Merch Oficial?
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            Somos una tienda online dedicada al merchandising oficial de tus artistas favoritos. Todos nuestros productos son originales y de la mejor calidad, con diseños exclusivos.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            ¿Quiénes están dentras de la marca?
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Somos un equipo de jovenes apasionadas por el arte, la moda y la música. Comenzamos con la idea de diseñar remeras personales hasta que poco a poco comenzó a crecer nuestra comunidad.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            ¿Puedo colaborar o proponer ideas?
          </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            Nos encanta recibir ideas! si queres participar o sugerir ideas contactate con nosotras a traves de Whatsapp, nuestro formulario de contacto o redes sociales.
          </div>
        </div>
      </div>
    </div>
  )
}
