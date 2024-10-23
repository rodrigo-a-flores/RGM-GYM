import React from 'react'

function Plains() {
    return (
        <div>
            <h1>Estos son nuestros planes</h1>
            <section className='first-box'>
                <div>
                    <img src="" alt="" />
                </div>
                <div className="text">
                    <p>¿Como se si es para mi?</p>
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                    </ul>
                </div>
            </section>
            <section className='second-box'>
                <div className="title">
                    <p>¿Como funciona?</p>
                </div>
                <div className="a">
                    <div className="box one">
                        <div className="icon">
                            <i>icono 1</i>
                        </div>
                        <div className="text">
                            <p>texto 1</p>
                        </div>
                    </div>
                    <div className="box two">
                    <div className="icon">
                            <i>icono 2</i>
                        </div>
                        <div className="text">
                            <p>texto 2</p>
                        </div>
                    </div>
                    <div className="box three">
                    <div className="icon">
                            <i>icono 3</i>
                        </div>
                        <div className="text">
                            <p>texto 3</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='third-box'>
                <div className="title">
                    <p>Elige uno de nuestros planes</p>                    
                </div>
                <div className="container">
                    <div className="plan">
                        <div className="plan-title"></div>
                        <div className="plan-price"></div>
                        <div className="plan-description"></div>
                        <div className="plan-button">
                            <button>Quiero este plan</button>
                        </div>
                    </div>
                    <div className="plan">
                        <div className="plan-title"></div>
                        <div className="plan-price"></div>
                        <div className="plan-description"></div>
                        <div className="plan-button">
                            <button>Quiero este plan</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Plains