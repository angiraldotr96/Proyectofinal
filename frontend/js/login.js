document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();
        if (response.ok) {
            alert('Inicio de sesión exitoso.');
            localStorage.setItem('token', result.token);
            window.location.href = 'cart.html';
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
    }
});
