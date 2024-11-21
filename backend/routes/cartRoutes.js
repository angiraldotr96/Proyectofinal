const express = require('express');
const Producto = require('../models/Producto');

const router = express.Router();

// Verificar inventario
router.post('/check-inventory', async (req, res) => {
    const cart = req.body;
    const unavailable = [];

    try {
        for (const item of cart) {
            const producto = await Producto.findById(item.id);
            if (!producto || producto.stock < 1) {
                unavailable.push(item.name);
            }
        }

        if (unavailable.length > 0) {
            res.json({ success: false, unavailable });
        } else {
            res.json({ success: true });
        }
    } catch (error) {
        console.error('Error al verificar inventario:', error);
        res.status(500).json({ success: false, error: 'Error en el servidor' });
    }
});

module.exports = router;
