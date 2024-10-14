import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
        <h1>RGM Gimnasio</h1>
        <nav>
            {/* Iconos de redes sociales y boton de registro y logueo */}
            <ul>
                <li>Icono 1</li>
                <li>Icono 2</li>
                <li>Icono 3</li>
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