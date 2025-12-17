import React from 'react';
import logo from "../assets/logo.png";
import "../styles/header.css";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();

  const scroll = (e) => {
    // const galery = document.getElementById("galeria");
    // galery.scrollIntoView({behavior: "smooth"})
    e.preventDefault()
    navigate("/", { state: { scrollTo: "galeria" } } );
  }



  return (
    <header>

        <nav>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <ul className="gluten-uniquifier">
          <li>
            <Link to="/">
              <i className="fa-solid fa-house"></i> Inicio
            </Link>
          </li>
          <li>
            <Link to= "/" onClick={scroll}>Galería</Link> {/* Ver cómo hacerlo dentro de la misma página */}
          </li>
          <li>
            <Link to="/catalogo">Catálogo</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  )  
}

