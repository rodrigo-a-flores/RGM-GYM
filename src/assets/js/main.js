export const AuthLogin = () => {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const formData = {
            email,
            password
        }

        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(formData)
            }
            );

            const result = await response.json();

            if (response.ok && result.success) {
                alert('Inicio de sesion exitoso');
                setTimeout(() => {
                    localStorage.setItem('resultado', JSON.stringify(result));
                    window.location.href = '/';
                }, 1000);
            }else{
                alert('Credenciales incorrectas o no registrado');
            }
        } catch (error) {
            console.log(error.message);
        }
    })
}

export const AuthRegister = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = {
            email: email,
            password: password
        }
        try {
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }
            );
            const data = await response.json();
            if (response.ok && data.success) {
                alert('Usuario registrado con exito');
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
            }
        } catch (error) {
            console.log(error.message);
        }
    })
}