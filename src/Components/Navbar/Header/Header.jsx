import React from 'react'
import './Header.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import HandleModal from '../../../AuthComponents/ModalToForm/HandleModal';
function Header({email}) {
    const info = localStorage.getItem('resultado');

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
                {info === null ?
                <ul>
                    <div><HandleModal identifier={'register'} /></div>
                    <div><HandleModal identifier={'login'} /></div>
                </ul> : 
                (
                    <ul>
                        <span style={{marginRight: '10px'}}>Bienvenido {email.data}</span>
                        <button onClick={() => {
                            localStorage.removeItem('resultado');
                            window.location.reload();
                        }}>Salir</button>
                    </ul>
                )
                }

            </nav>
        </header>
    )
}

export default Header