import React from 'react'
import './Header.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
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
                <button><Link to="/register">Registrarse</Link></button>
                <button><Link to="/login">Iniciar Sesion</Link></button>
            </ul>
        </nav>
    </header>
  )
}

export default Header