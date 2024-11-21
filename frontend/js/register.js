document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            alert('Registro exitoso.');
            window.location.href = 'login.html';
        } else {
            alert('Error al registrar usuario.');
        }
    } catch (error) {
        console.error('Error al registrar usuario:', error);
    }
});
