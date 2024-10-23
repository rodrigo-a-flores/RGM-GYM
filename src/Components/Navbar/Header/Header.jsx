import React from 'react'
import './Header.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
function Header() {
  return (
    <header>
        <h1>RGM </h1>
        <nav>
            {/* Iconos de redes sociales y boton de registro y logueo */}
            <ul>
                <li><FaFacebookSquare /></li>
                <li><FaInstagramSquare /></li>
                <li><FaYoutubeSquare /></li>
            </ul>
            <ul>
                <button>Registrarse</button>
                <button>Iniciar Sesion</button>
            </ul>
        </nav>
    </header>
  )
}

export default Header