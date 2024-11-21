const cart = [];

// Añadir productos al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const productElement = event.target.closest('.product');
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.querySelector('h2').textContent;

        cart.push({ id: parseInt(productId), name: productName });
        updateCartUI();
    });
});

// Actualizar la interfaz del carrito
function updateCartUI() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        cartList.appendChild(li);
    });
}

// Finalizar compra
document.getElementById('checkout').addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:3000/api/check-inventory', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cart)
        });

        const result = await response.json();

        if (result.success) {
            alert('Compra realizada exitosamente.');
        } else {
            alert('Algunos productos no están disponibles: ' + result.unavailable.join(', '));
        }
    } catch (error) {
        console.error('Error al verificar el inventario:', error);
        alert('Hubo un error al procesar la compra.');
    }
});
