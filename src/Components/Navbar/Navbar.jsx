import React from 'react';
import Header from './Header/Header';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const emailData = JSON.parse(localStorage.getItem('resultado'));    
    return (
        <div className='navbar-container'>
            <Header email={emailData}/>
            <nav className='navbar'>
                
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/plains">Plains</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
                <img src="src/assets/img/logo.jpg" alt="logo" />
            </nav>
        </div>
    )
};

export default Navbar;