import './Login.css';

function Login() {
    return (
        <div>
            <form className='login-form'>
                <h1>Login</h1>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='email' name='email' id='email' autoComplete='email' />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='password' name='password' id='password' autoComplete='current-password' />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login