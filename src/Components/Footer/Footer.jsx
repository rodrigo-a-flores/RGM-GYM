import React from 'react';
import './Footer.css';
import Map from './Map.jsx';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer-container'>
            {/* Footer con datos de contacto, redes sociales, un mapa de google con la ubicacion del lugar y copyright */}
            <footer>
                <div className='info'>
                    <h2>RGM GYM</h2>
                    <p>En RGM,nos dedicamos a transformar vidas a del fitness, promoviendo un estilo de vida<br/> saludable y activo, tus resultados son los nuestros 😉</p>
                    <p className='copyright'>© 2022 RGM Gimnasio. Todos los derechos reservados.</p>
                </div>
                <div className='contact'>
                    <h2>Contacto</h2>
                    <p>123-456-7890</p>
                    <p>5KqJm@example.com</p>
                </div>
                <div className='social'>
                    <h2>Redes Sociales</h2>
                    <ul>
                        <li><a href="https://www.facebook.com" target="_blank"><FaFacebookSquare /> <span>Facebook</span></a></li> 
                        <li><a href="https://www.twitter.com" target="_blank"><FaTwitterSquare /> Twitter</a></li> 
                        <li><a href="https://www.instagram.com" target="_blank"><FaInstagramSquare /> Instagram</a></li>
                    </ul>
                </div>
                <div className='location'>
                    <h2>Ubicación</h2>
                    <Map />
                </div>
            </footer>
        </div>
    )
};

export default Footer;