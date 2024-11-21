const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    _id: Number,
    nombre: String,
    stock: Number,
});

module.exports = mongoose.model('Producto', productoSchema);
