import './Register.css';
import { AuthRegister } from '../../assets/js/main.js';

function Register() {
    return (
        <div className="register-container">
            <div className="register-left">
                <div className="branding">
                    <img src="src/assets/img/logo.jpg" alt="Gym Logo" className="logo" />
                </div>
                <div className="illustration">
                </div>
            </div>

            <div className="register-right">
                <form className="register-form" id="register-form" method="post">
                    <h1>Registro</h1>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" placeholder="Ingrese su correo" name="email" id="email" />
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" placeholder="Ingrese su contraseña" name="password" id="password" />
                    <button onClick={AuthRegister} type="submit">Registrar</button>
                    <p className='parrafo'>¿Ya tienes una cuenta?</p>
                </form>
            </div>
        </div>
    )
}

export default Register