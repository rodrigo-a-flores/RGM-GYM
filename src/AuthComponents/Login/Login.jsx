import './Login.css';
import { AuthLogin } from '../../assets/js/main.js';

function Login() {

    return (
        <div className="login-container">
            <div className="login-left">
                <div className="branding">
                    <img src="src/assets/img/logo.jpg" alt="Gym Logo" className="logo" />
                </div>
                <div className="illustration">
                    
                </div>
            </div>

            <div className="login-right">
                <form className="login-form" id="login-form" method="post">
                    <h1>Iniciar Sesion</h1>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Correo electrónico" name="email" id="email" autoComplete="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Contraseña" name="password" id="password" autoComplete="current-password" />
                    <button onClick={AuthLogin} type="submit">Ingresar</button>
                    <p className="forgot-password">Has olvidado tu contraseña?</p>
                </form>
            </div>
        </div>
    )
}

export default Login