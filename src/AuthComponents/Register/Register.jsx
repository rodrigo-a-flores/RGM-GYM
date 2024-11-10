import './Register.css';

function Register() {
    return (
        <div>
            <form className='register-form'>
                <h1>Register</h1>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='email' name='email' id='email' autoComplete='email'/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='password' name='password' id='password' autoComplete='current-password' />
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register