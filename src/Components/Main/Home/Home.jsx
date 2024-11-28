import React from 'react'
import './Home.css'
import Contact from '../Contact/Contact.jsx'

function Home() {
    return (
        <div className='home-container'>
            <section className='slider-container'>   
                <img src="src/assets/img/logo.jpg" alt="" />
                <div>
                    <h1>Welcome to RGM Gym</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>
                    <button>Get Started</button>
                </div>
            </section>

            <section className='team-container'>
                <div>
                    <h1>Our Team</h1>
                    <p>En RGM,nos dedicamos a transformar vidas a través del fitness, promoviendo un estilo de vida saludable y activo, tus resultados son los nuestros 😉
                    </p>
                    <button>Get Started</button>
                </div>
                <div>
                    <img src="src/assets/img/team.jpg" alt="team" />
                </div>
            </section>

            <Contact />

            {/* <section className='services-container'>
                <div>
                    <h1>Our Services</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </section>

            <section className='plans-container'>
                <div>
                    <h1>Our Plans</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </section>

            <section className='contact-container'>
                <div>
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>
            </section> */}
        </div>
    )
}

export default Home