import React from 'react'
import "../styles/footer.css";
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
        <div className="footer courier-prime-regular"> 
            <ul>
                <li>
                    <Link to="/"> Inicio</Link>
                </li>
                <li>
                    <Link to="/#galeria">Galería</Link> 
                </li>
                <li>
                    <Link to="/catalogo">Catálogo</Link>
                </li>
                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>

            </ul>

            <hr />
            <h6>2025 - © todos los derechos reservados</h6>
        
        </div>

    </footer>
  )
}

